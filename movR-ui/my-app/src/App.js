import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import MapComponent from './components/Map/MapComponent.jsx'
import HomePage from './components/Home/HomePage.jsx'
import Chat from './components/Chat/Chat';
import Profile from './Pages/ProfilePage/ProfilePage'

function App() {

  return (
    <div>
      <header>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/map" component={MapComponent} />
            <Route path="/home" component={HomePage} />
            <Route path="/chat" component={Chat} />
            <Route path="/profile" component={Profile} />
            <Redirect exact from="/" to="/login" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
