import React from 'react';
import './App.css';
import Header from './components/Header';
import AddPoll from './pages/Add-poll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VotePoll from './pages/Vote-poll';
import ResultsPoll from './pages/Results-poll';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import spring from './themes/spring';

function App() {
  return (
    <ThemeProvider theme={spring}>
      <Router>
        <GlobalStyles />
        <Header></Header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <AddPoll />
            </Route>
            <Route path="/AddPoll">
              <AddPoll />
            </Route>
            <Route path="/polls/:pollId/vote">
              <VotePoll />
            </Route>
            <Route path="/polls/:pollId">
              <ResultsPoll />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
