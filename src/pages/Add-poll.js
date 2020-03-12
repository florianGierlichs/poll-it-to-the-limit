import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function AddPoll() {
  return (
    <>
      <Input placeholder="What's your poll?" id="questionPoll" />
      <Input placeholder="What's your poll?" id="firstOption" />
      <Input placeholder="What's your poll?" id="secondOption" />
      <Input placeholder="What's your poll?" id="thirdOption" />
      <Link to="/VotePoll">VotePoll</Link>
    </>
  );
}

export default AddPoll;
