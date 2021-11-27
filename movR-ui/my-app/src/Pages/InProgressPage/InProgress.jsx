import React, { useEffect } from "react";
import "./InProgress.css";
import progressLogo from "./inProgress.png";
import { io } from "socket.io-client";
import { useLocation, useHistory } from "react-router-dom";

function InProgress() {
  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  const history = useHistory();
  const { id, bill, completed, currentTip, totalHours, totalDistance } =
    useLocation().state;

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("end-trip-request", { message: "End Trip", id });
    });
    socket.on("notify-user", (value) => {
      console.log("value", value);
      history.push("/itinerary", {
        id,
        bill,
        completed,
        currentTip,
        totalHours,
        totalDistance,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="inProgressMaster">
      <div className="progressCardWrap">
        <div className="progressCard">
          <div className="progress-pic">
            <h1 className="inProgress_txt1">Trip Is In Progress!</h1>
            <img src={progressLogo} alt="IMG" className="thumbProgress" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProgress;
