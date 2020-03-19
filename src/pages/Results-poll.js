import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Output from '../components/Output';
import './Results-poll.css';
import { getPoll } from '../api/polls';

function ResultsPoll() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
    }

    doGetPoll();
    // alternative:
    // getPoll(pollId).then(poll => setPoll(poll));
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
