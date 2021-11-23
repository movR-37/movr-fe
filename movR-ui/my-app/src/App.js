import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import MapComponent from './components/Map/MapComponent.jsx'
import HomePage from './components/Home/HomePage.jsx'
import Chat from './components/Chat/Chat';
import Profile from './Pages/ProfilePage/ProfilePage'
import ChatComponent from './components/Chat/ChatComponent';
import FaqPage from './Pages/faqPage/faqPage';

function App() {

  return (
    <div>
      <header>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/:uid/home" exact component={HomePage} />
            <Route path="/:uid/chat" component={ChatComponent} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/faq" exact component={FaqPage} />
            <Redirect exact from="/" to="/login" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
