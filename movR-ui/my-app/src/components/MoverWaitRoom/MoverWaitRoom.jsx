import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import fire from "../../config/firebase.config";
import "./MoverWaitRoom.css";

export default function MoverWaitRoom() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const [isRequestReceived, setIsRequestReceived] = useState(false);
  const [isRequestAccepted, setRequestAccepted] = useState(false);
  const [data, setData] = useState({});
  const { email } = fire.auth().currentUser;

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Mover is connected!");
    });
  }, [socket]);

  const handleCancel = async () => {
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

    socket.emit("accept-request", {
      mover,
    });

    console.log("handling submit for mover");

    setIsRequestReceived(false);
    setRequestAccepted(true);
  };

  socket.on("receive-request", (value) => {
    setRequestAccepted(false);
    setIsRequestReceived(true);
    setData({ ...value });
    console.log("request is received by the mover!", value);
  });
  return (
    <div>
      {isRequestReceived ? (
        <div className="mover-request-div">
          <h3>Request received by: {data.user}</h3>
          <h3>Request is from City: {data.location}</h3>
          <Button variant="contained" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Decline
          </Button>
        </div>
      ) : undefined}
      {isRequestAccepted ? (
        <div className="mover-request-div">
          <h3>Request Accepted!</h3>
        </div>
      ) : undefined}
    </div>
  );
}
