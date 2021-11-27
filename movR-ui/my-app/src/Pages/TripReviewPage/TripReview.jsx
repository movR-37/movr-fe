import React, { useState, useEffect } from "react";
import "./TripReview.css";
import userLogo from "../../images/user.png";
import moverLogo from "../../images/mover.png";
import ReactStars from "react-rating-stars-component";
import { ReactionBarSelector } from "@charkour/react-reactions";
import TextField from "@material-ui/core/TextField";
import { Button, Icon } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
function TripReview() {
  const { id } = useLocation().state;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const handleContinue = () => {
    history.push(`/review`);
  };

  const fetchTrip = async () => {
    let response = await axios.get(`http://localhost:8000/trips/${id}`);
    response = response.data;
    console.log(response);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    console.log(id);
    fetchTrip();
    socket.on("connect", () => {
      socket.emit("end-trip-request", { message: "End Trip", id });
    });
    socket.on("notify-user", (value) => {
      console.log("value", value);
      history.push("/review", { id });
    });
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading ? (
    <div className="trip-review-limiter">
      <div className="TripReview-master-containerA" />
      <div className="TripReview-master-container">
        <div className="wrap-TripReview-icons">
          <div className="divider">
            <img src={userLogo} alt="IMG" className="thumbTrip" />
          </div>
          <div className="divider">
            <br></br>
            <br></br>
            <br></br>
            <h2>{data.user || ""}</h2>
          </div>
        </div>
        <div className="wrap-TripReview">
          <div className="TripReview-pic">
            <h6 className="TripReview_txt1">Total Cost</h6>
            <h6 className="TripReview_txt1">Total Time</h6>
            <h6 className="TripReview_txt1">Distance</h6>
          </div>

          <div className="TripReview-pic">
            <h6 className="TripReview_txt2">${data.bill || ""}</h6>

            <h6 className="TripReview_txt2"> {data.totalHours || ""} Hours</h6>

            <h6 className="TripReview_txt2">{data.totalDistance || ""} km</h6>
          </div>
        </div>
        <div className="wrap-TripReview-icons">
          <div className="divider">
            <br></br>
            <br></br>
            <br></br>
            <h2>{data.mover || ""}</h2>
          </div>
          <div className="divider">
            <img src={moverLogo} alt="IMG" className="thumbTrip" />
          </div>
        </div>
      </div>
      <div className="TripReview-master-containerTopBottom">
        <Button animated size="massive" onClick={handleContinue}>
          <Button.Content visible>Continue</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  );
}

export default TripReview;
