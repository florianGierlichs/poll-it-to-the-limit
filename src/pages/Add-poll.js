import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function AddPoll() {
  return (
    <>
      <Input placeholder="What's your poll?" id="questionPoll" />
      <Input placeholder="first option" id="firstOption" />
      <Input placeholder="second option" id="secondOption" />
      <Input placeholder="third option" id="thirdOption" />
      <Link to="/VotePoll">VotePoll</Link>
    </>
  );
}

export default AddPoll;
