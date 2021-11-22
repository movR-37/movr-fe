import React from "react";
import HomepageSelection from "../homePageSelection/HomepageSelection";
import MapComponent from "../Map/MapComponent";
import Selection from "../selection/Selection";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homePage-container">
      <div className="homePage-selection">
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
