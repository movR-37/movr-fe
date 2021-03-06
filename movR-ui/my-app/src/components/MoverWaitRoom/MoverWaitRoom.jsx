import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import fire from "../../config/firebase.config";
import "./MoverWaitRoom.css";
import { useHistory } from "react-router-dom";

export default function MoverWaitRoom() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const [isRequestReceived, setIsRequestReceived] = useState(false);
  const [isRequestAccepted, setRequestAccepted] = useState(false);
  const [isTripEnded, setIsTripEnded] = useState(false);
  const [endTrip, setEndTrip] = useState(false);
  const [data, setData] = useState({});
  const [endTripData, setEndTripData] = useState({});
  const { email, uid } = fire.auth().currentUser;
  const history = useHistory();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Mover is connected!");
    });
  }, [socket]);

  const handleCancel = () => {
    setIsRequestReceived(false);
  };

  const handleAccept = async () => {
    console.log("email mover", email);
    const connectionObj = {
      user: data.user,
      mover: email,
    };
    const response = await axios.post(
      "http://localhost:8000/trips",
      connectionObj
    );
    const { mover } = response.data;
    const requestData = response.data;

    socket.emit("accept-request", {
      mover,
      allData: requestData,
    });

    console.log("handling submit for mover");

    setIsRequestReceived(false);
    setRequestAccepted(true);
  };

  const handleEndTrip = () => {
    socket.emit("end-trip-notify-user", endTripData);
    setIsRequestReceived(false);
    setIsTripEnded(false);
    setEndTrip(true);
  };

  socket.on("notify-mover", (value) => {
    setIsTripEnded(true);
    setEndTripData(value);
  });

  socket.on("receive-request", (value) => {
    setRequestAccepted(false);
    setIsRequestReceived(true);
    setData({ ...value });
    console.log("request is received by the mover!", value);
  });
  return (
    <div>
      <div className="container-waiting">
        <div className="wrap-waiting waiting-txt">
          <div className="mover-request-div">
            {isRequestReceived ? (
              <div>
                <h3>Request received by: {data.user}</h3>
                <h3>Request is from City: {data.location}</h3>
                <Button variant="contained" onClick={handleAccept}>
                  Accept
                </Button>
                <Button variant="outlined" onClick={handleCancel}>
                  Decline
                </Button>
              </div>
            ) : (
              <p>
                {" "}
                Welcome to your wait room! You will be getting your requests
                here!
              </p>
            )}
            {isRequestAccepted ? (
              <div className="mover-request-div">
                <h3>Request Accepted!</h3>
                <Button
                  variant="contained"
                  onClick={() => history.push(`/${uid}/chat`)}
                >
                  Chat
                </Button>
              </div>
            ) : (
              <p></p>
            )}
            {isTripEnded ? (
              <Button variant="contained" onClick={handleEndTrip}>
                End Trip
              </Button>
            ) : (
              <p></p>
            )}
            {endTrip ? (
              <div className="mover-request-div">
                <h3>Trip Ended!</h3>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      {isTripEnded ? (
        <Button variant="contained" onClick={handleEndTrip}>
          End Trip
        </Button>
      ) : undefined}
      {endTrip ? (
        <div className="mover-request-div">
          <h3>Trip Ended!</h3>
        </div>
      ) : undefined}
    </div>
  );
}
