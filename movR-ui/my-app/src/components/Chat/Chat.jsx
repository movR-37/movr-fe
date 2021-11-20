import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
export default function Chat() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the sv"); // x8WIv7-mJelg7on_ALbx
      socket.emit("custom-event", "test value");
    });
  }, []);

  socket.on("receive-message", (message) => {
    setAllMsgs([...allMsgs, message]);
  });
  const [msg, setMsg] = useState("");
  const [allMsgs, setAllMsgs] = useState([]);

  const onChangeValues = (event) => {
    setMsg(event.target.value);
  };

  const handleSubmit = (event) => {
    socket.emit("send-message", msg);
    setAllMsgs([...allMsgs, msg]);
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
  };

  return (
    <div className="chatContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="messageField"
          value={msg}
          onChange={onChangeValues}
        />
        <input type="submit" value="Submit" />
      </form>

      {allMsgs.map((aMsg) => (
        <p>{aMsg}</p>
      ))}
    </div>
  );
}
