import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function AddPoll() {
  return (
    <>
      <Input placeholder="What's your poll?" />
      <Link to="/VotePoll">VotePoll</Link>
    </>
  );
}

export default AddPoll;
