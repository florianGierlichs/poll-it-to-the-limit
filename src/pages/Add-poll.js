import React from 'react';
import { Link } from 'react-router-dom';
import { SkewInput } from '../components/Input';
import Button from '../components/Button';
import './Add-poll.css';
import Form from '../components/Form';

function AddPoll() {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerTree] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      vote: []
    };

    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        `https://my-json-server.typicode.com/florianGierlichs/poll-it-to-the-limit/polls`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(poll)
      }
    );
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
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
        <Button btntext="Start poll!!"></Button>
        <Link to="/VotePoll">VotePoll</Link>
      </Form>
    </>
  );
}

export default AddPoll;
