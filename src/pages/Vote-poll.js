import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import Form from '../components/Form';
import { SkewOutput, SkewButton } from '../components/Input';
import Button from '../components/Button';

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  `https://my-json-server.typicode.com/florianGierlichs/poll-it-to-the-limit/polls`;

function VotePoll() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`${POLLS_API_URL}/${pollId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SkewOutput>{poll?.question}</SkewOutput>
        <SkewButton
          type="radio"
          name="answer"
          value="answerOne"
          checked={answer === 'answerOne'}
          onChange={event => setAnswer(event.target.value)}
        >
          {poll?.answerOne}
        </SkewButton>
        <SkewButton
          type="radio"
          name="answer"
          value="answerTwo"
          checked={answer === 'answerTwo'}
          onChange={event => setAnswer(event.target.value)}
        >
          {poll?.answerTwo}
        </SkewButton>
        <SkewButton
          type="radio"
          name="answer"
          value="answerThree"
          checked={answer === 'answerThree'}
          onChange={event => setAnswer(event.target.value)}
        >
          {poll?.answerThree}
        </SkewButton>
        <Button btntext="Vote!!!"></Button>
      </Form>
      <Link to="/polls/:pollId">ResultsPoll</Link>
    </>
  );
}

export default VotePoll;
