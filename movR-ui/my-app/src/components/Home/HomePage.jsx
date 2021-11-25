import React from "react";
import HomepageSelection from "../homePageSelection/HomepageSelection";
import MapComponent from "../Map/MapComponent";
import Selection from "../selection/Selection";
import { useHistory } from "react-router-dom";
import logo from "../../images/movr.png";
import Button from "@material-ui/core/Button";
import "./HomePage.css";
import MapWrapper from "../MapLatest/MapWrapper";
import fire from '../../config/firebase.config';

export default function HomePage() {
  const history = useHistory();
  const user = fire.auth().currentUser;
  const handleTrip = (e) => {
    e.preventDefault();
    history.push(`/${user.uid}/triphistory`)
  }

  return (
    <div className="homePage-container" data-testid="masterDiv">
      <div className="homePage-selection">
        <div className="logo">
          <img src={logo} alt="" srcset="" className="logoHome" />
        </div>
        <div className="homePagecontent">
          <HomepageSelection />
          <Button
          variant="outlined"
          onClick={(e) => handleTrip(e)}
        >
          Cancel
        </Button>
        </div>
      </div>
      <div className="homePage-map">
        <MapWrapper />
      </div>
    </div>
  );
}
