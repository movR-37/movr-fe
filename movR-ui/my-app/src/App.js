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
import PaymentWrapper from './Pages/Payment/PaymentWrapper';
import LandingPage from './components/LandingPage/LandingPage';
import LoginMover from "./components/LoginMover";
import SignupMover from "./components/SignupMover";
import MoverWaitRoom from './components/MoverWaitRoom/MoverWaitRoom';
import ContactUs from './Pages/ContactUsPage/ContactUs';
import MoverProfile from './components/MoverProfile/MoverProfile';
import EstimatePayment from './Pages/EstimatePayment/EstimatePayment';
import TripHistory from './components/TripHistory/TripHistory';
import CurrentTrip from './Pages/CurrentTrip/CurrentTrip';
import TripReview from './Pages/TripReviewPage/TripReview';
import GiveReview from './Pages/TripReviewPage/GiveReview';
import Itinerary from './Pages/Itinerary/Itinerary';
import InProgress from './Pages/InProgressPage/InProgress';

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
            <Route path="/mover" exact component={MoverWaitRoom} />
            <Route path="/payment-cost" exact component={EstimatePayment} />
            <Route path="/payment" exact component={PaymentWrapper} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/tripSummary" exact component={TripReview} />
            <Route path="/review" exact component={GiveReview} />
            <Route path="/faq" exact component={FaqPage} />
            <Route path="/add-profile" exact component={MoverProfile} />
            <Route path="/trip-history" exact component={TripHistory} />
            <Route path="/current-trip" exact component={CurrentTrip} />InProgress
            <Route path="/itinerary" exact component={Itinerary} />
            <Route path="/inprogress" exact component={InProgress} />
            <Redirect exact from="/" to="/welcome" />
          </Switch >
        </Router >
      </header >
    </div >
  );
}

export default App;
