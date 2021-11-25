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
import PaymentWrapper from './Pages/Payment/PaymentWrapper';
import LandingPage from './components/LandingPage/LandingPage';
import LoginMover from "./components/LoginMover";
import SignupMover from "./components/SignupMover";
import ContactUs from './Pages/ContactUsPage/ContactUs';

function App() {

  return (
    <div>
      <header>
        <Router>
          <Switch>
            <Route path="/login-user" component={Login} />
            <Route path="/login-mover" component={LoginMover} />
            <Route path="/signup-user" component={Signup} />
            <Route path="/signup-mover" component={SignupMover} />
            <Route path="/:uid/home" exact component={HomePage} />
            <Route path="/:uid/chat" component={ChatComponent} />
            <Route path="/welcome" component={LandingPage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/payment" exact component={PaymentWrapper} />
            <Route path="/contactus" exact component={ContactUs} />
            <Redirect exact from="/" to="/welcome" />
          </Switch >
        </Router >
      </header >
    </div >
  );
}

export default App;
