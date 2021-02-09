import React from 'react';
import './App.css';
import OnePiece from './components/OnePiece';
import Display from './components/Display';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/">
            <OnePiece />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
