import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function MoverProfile() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const [isRequestReceived, setIsRequestReceived] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Mover is connected!"); // x8WIv7-mJelg7on_ALbx
    });
  }, [socket]);

  const handleAccept = async () => {
    const mover = await axios.get(
      "http://localhost:8000/movers/619c37b4f7375af08b530143"
    );
    const connectionObj = {
      user: data.value,
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
        <div>
          <h3>Request received by: {data.user}</h3>
          <h3>Request is from City: {data.location}</h3>
          <button onClick={handleAccept}>Accept</button>
        </div>
      ) : undefined}
    </div>
  );
}
