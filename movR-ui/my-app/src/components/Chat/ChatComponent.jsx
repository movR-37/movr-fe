import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./ChatComponent.css";
import fire from "../../config/firebase.config";

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [allMsgs, setAllMsgs] = useState([]);
  const user = fire.auth().currentUser;
  const socket = io("http://localhost:8000", { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the sv"); // x8WIv7-mJelg7on_ALbx
      socket.emit("custom-event", "User is Connected");
    });
  }, []);

  socket.on("receive-message", (message) => {
    // const newMsg = {
    //   user: user.email,
    //   message,
    // };
    setAllMsgs([...allMsgs, message]);
  });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    const newMsg = {
      user: user.email,
      message,
    };
    socket.emit("send-message", newMsg);
    setAllMsgs([...allMsgs, newMsg]);
  };

  return (
    <div className="chatComponent">
      <div className="messageQueue">
        <h1 className="headingComponent">Chat Now!</h1>
        {allMsgs.map((msg, idx) => (
          <div className="bubble-container">
            <div className="bubble" key={idx}>
              {msg.message}
            </div>
            <p className="bubble-sender">Sent by: {msg.user}</p>
          </div>
        ))}
      </div>
      <div className="submission">
        <div className="text">
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <Button variant="Message" onClick={handleSubmit}>
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}
