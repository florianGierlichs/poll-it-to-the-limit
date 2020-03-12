import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function AddPoll() {
  return (
    <>
      <Input
        wrapperClass="inputWrapper"
        placeholder="What's your poll?"
        class="input"
        id="questionPoll"
      />
      <Input
        wrapperClass="optionWrapper"
        placeholder="first option"
        class="input"
        id="firstOption"
      />
      <Input
        wrapperClass="optionWrapper"
        placeholder="second option"
        class="input"
        id="secondOption"
      />
      <Input
        wrapperClass="optionWrapper"
        placeholder="third option"
        class="input"
        id="thirdOption"
      />
      <Link to="/VotePoll">VotePoll</Link>
    </>
  );
}

export default AddPoll;
