import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddPoll from "./pages/Add-poll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VotePoll from "./pages/Vote-poll";
import ResultsPoll from "./pages/Results-poll";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <AddPoll />
          </Route>
          <Route path="/AddPoll">
            <AddPoll />
          </Route>
          <Route path="/VotePoll">
            <VotePoll />
          </Route>
          <Route path="/ResultsPoll">
            <ResultsPoll />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
