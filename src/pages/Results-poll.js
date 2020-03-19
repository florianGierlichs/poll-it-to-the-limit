import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Output from '../components/Output';
import './Results-poll.css';
import { getPoll } from '../api/polls';
import Loading from '../components/Loading';

function ResultsPoll() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function doGetPoll() {
      setIsLoading(true);
      try {
        const poll = await getPoll(pollId);
        setPoll(poll);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
    // alternative:
    // getPoll(pollId).then(poll => setPoll(poll));
  }, [pollId]);

  if (isLoading) {
    return <Loading />;
  }

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
