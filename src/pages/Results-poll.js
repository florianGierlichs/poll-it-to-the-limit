import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Output from '../components/Output';
import './Results-poll.css';

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  `https://my-json-server.typicode.com/florianGierlichs/poll-it-to-the-limit/polls`;

function ResultsPoll() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  return (
    <>
      <div className="output--container">
        <Output
          wrapperclass="outputWrapper outputWrapper--question"
          className="output"
        >
          {poll?.question}
        </Output>

        <Output wrapperclass="outputWrapper" className="output">
          {poll?.answerOne}
        </Output>

        <Output wrapperclass="outputWrapper" className="output">
          {poll?.answerTwo}
        </Output>

        <Output wrapperclass="outputWrapper" className="output">
          {poll?.answerThree}
        </Output>

        <Link to="/AddPoll">AddPoll</Link>
      </div>
    </>
  );
}

export default ResultsPoll;
