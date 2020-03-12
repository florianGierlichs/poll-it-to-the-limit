import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

function AddPoll() {
  return (
    <>
      <Input placeholder="What's your poll?" class="input" id="questionPoll" />
      <Input placeholder="first option" class="input" id="firstOption" />
      <Input placeholder="second option" class="input" id="secondOption" />
      <Input placeholder="third option" class="input" id="thirdOption" />
      <Link to="/VotePoll">VotePoll</Link>
    </>
  );
}

export default AddPoll;
