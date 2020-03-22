import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SkewInput } from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { postPoll } from '../api/polls';

function AddPoll() {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerTree] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      votes: []
    };

    const createdPoll = await postPoll(poll);
    alert(`Created poll with id ${createdPoll.id}`);
    history.push(`/polls/${createdPoll.id}/vote`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SkewInput
          wrapperclass="inputWrapper inputWrapper--question"
          placeholder="What's your poll?"
          className="input"
          id="questionPoll"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <SkewInput
          wrapperclass="inputWrapper"
          placeholder="first option"
          className="input"
          id="firstOption"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <SkewInput
          wrapperclass="inputWrapper"
          placeholder="second option"
          className="input"
          id="secondOption"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <SkewInput
          wrapperclass="inputWrapper"
          placeholder="third option"
          className="input"
          id="thirdOption"
          value={answerThree}
          onChange={event => {
            setAnswerTree(event.target.value);
          }}
        />
        <Button disabled={isLoading} btntext="Start poll!!"></Button>
        <Link to="/VotePoll">VotePoll</Link>
      </Form>
    </>
  );
}

export default AddPoll;
