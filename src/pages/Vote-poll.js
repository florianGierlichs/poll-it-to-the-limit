import React from 'react';
import { Link } from 'react-router-dom';

function VotePoll() {
  return (
    <>
      <div>VotePoll</div>
      <Link to="/polls/:pollId">ResultsPoll</Link>
    </>
  );
}

export default VotePoll;
