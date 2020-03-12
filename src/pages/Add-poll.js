import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import './Add-poll.css';

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
      answerThree: answerThree
    };

    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        'http://my-json-server.typicode.com/florianGierlichs/poll-it-to-the-limit/polls',
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
      <form onSubmit={handleSubmit}>
        <Input
          wrapperclass="inputWrapper inputWrapper--question"
          placeholder="What's your poll?"
          className="input"
          id="questionPoll"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <Input
          wrapperclass="inputWrapper"
          placeholder="first option"
          className="input"
          id="firstOption"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <Input
          wrapperclass="inputWrapper"
          placeholder="second option"
          className="input"
          id="secondOption"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <Input
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
      </form>
    </>
  );
}

export default AddPoll;
