import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Output from '../components/Output';
import './Results-poll.css';
import { getPoll } from '../api/polls';

function ResultsPoll() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      try {
        const poll = await getPoll(pollId);
        setPoll(poll);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
    // alternative:
    // getPoll(pollId).then(poll => setPoll(poll));
  }, [pollId]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

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
