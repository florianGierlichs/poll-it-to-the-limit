import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Output from '../components/Output';
import './Results-poll.css';
import { getPoll } from '../api/polls';
import Loading from '../components/Loading';
import PieChart from 'react-minimal-pie-chart';

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

  const dataMock = [
    { title: 'answerOne', value: 30, color: 'green' },
    { title: 'answerTwo', value: 15, color: 'red' },
    { title: 'answerThree', value: 20, color: 'blue' }
  ];
  const defaultLabelStyle = {
    fontSize: '10px',
    fontFamily: 'sans-serif',
    fill: 'whitesmoke'
  };

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

        <PieChart
          data={dataMock}
          style={{ height: '200px' }}
          label={({ data, dataIndex }) =>
            Math.round(data[dataIndex].percentage) + '%'
          }
          labelStyle={defaultLabelStyle}
        />

        <Link to="/AddPoll">AddPoll</Link>
      </div>
    </>
  );
}

export default ResultsPoll;
