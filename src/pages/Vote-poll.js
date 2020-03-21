import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import Form from '../components/Form';
import { SkewOutput, SkewButton } from '../components/Input';
import Button from '../components/Button';
import { getPoll, patchPoll } from '../api/polls';
import Loading from '../components/Loading';

function VotePoll() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(true);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
      setIsLoadingGetPoll(false);
    }

    doGetPoll();
    //Alternative:
    // getPoll(pollId).then(poll => setPoll(poll));
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }

  if (isLoadingGetPoll) {
    return <Loading />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SkewOutput>{poll.question}</SkewOutput>
        <SkewButton
          type="radio"
          name="answer"
          value="answerOne"
          checked={answer === 'answerOne'}
          onChange={event => setAnswer(event.target.value)}
        >
          {poll.answerOne}
        </SkewButton>
        <SkewButton
          type="radio"
          name="answer"
          value="answerTwo"
          checked={answer === 'answerTwo'}
          onChange={event => setAnswer(event.target.value)}
        >
          {poll.answerTwo}
        </SkewButton>
        <SkewButton
          type="radio"
          name="answer"
          value="answerThree"
          checked={answer === 'answerThree'}
          onChange={event => setAnswer(event.target.value)}
        >
          {poll.answerThree}
        </SkewButton>
        <Button disabled={isLoadingPatchPoll} btntext="Vote!!!"></Button>
      </Form>
      <Link to="/polls/:pollId">ResultsPoll</Link>
    </>
  );
}

export default VotePoll;
