import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatComponent from './components/ChatComponent';
import SignIn from './components/SignIn';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chat" component={ChatComponent} />
          <Route path="/" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
