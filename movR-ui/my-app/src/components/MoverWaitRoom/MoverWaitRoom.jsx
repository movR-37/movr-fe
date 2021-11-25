import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import fire from "../../config/firebase.config";
import "./MoverWaitRoom.css";

export default function MoverWaitRoom() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const [isRequestReceived, setIsRequestReceived] = useState(false);
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
    const mover = await axios.get(
      "http://localhost:8000/movers/619c37b4f7375af08b530143"
    );
    const connectionObj = {
      user: data.user,
      mover: mover.name,
    };
    const response = await axios.post(
      "http://localhost:8000/trips",
      connectionObj
    );

    socket.emit("accept-request", {
      response,
      message: "Request Accepted by Mover!",
    });

    console.log("handling submit for mover");
  };

  socket.on("receive-request", (value) => {
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
          <Button variant="contained" color="success" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant="outlined" color="error" onClick={handleCancel}>
            Decline
          </Button>
        </div>
      ) : undefined}
    </div>
  );
}
