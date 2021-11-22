import React from "react";
import HomepageSelection from "../homePageSelection/HomepageSelection";
import MapComponent from "../Map/MapComponent";
import Selection from "../selection/Selection";
import logo from "../../images/movr.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homePage-container" data-testid="masterDiv">
      <div className="homePage-selection">
        <div className="logo">
          <img src={logo} alt="" srcset="" className="logoHome" />
        </div>
        <div className="homePagecontent">
          <HomepageSelection />
        </div>
      </div>
      <div className="homePage-map">
        <MapComponent />
      </div>
    </div>
  );
}
