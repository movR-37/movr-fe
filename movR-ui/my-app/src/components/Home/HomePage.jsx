import React from "react";
import HomepageSelection from "../homePageSelection/HomepageSelection";
import Selection from "../selection/Selection";
import logo from "../../images/movr.png";
import "./HomePage.css";
import MapWrapper from "../MapLatest/MapWrapper";

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
        <MapWrapper />
      </div>
    </div>
  );
}
