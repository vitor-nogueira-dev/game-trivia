import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Game from './pages/Game/Game';
import Feedback from './pages/Feedback/Feedback.jsx';
import Ranking from './pages/Ranking';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/feedback" component={Feedback} />
        <Route path="/settings" component={Settings} />
        <Route path="/game" component={Game} />
        <Route path="/ranking" component={Ranking} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}
