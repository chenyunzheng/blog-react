import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/posts' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
