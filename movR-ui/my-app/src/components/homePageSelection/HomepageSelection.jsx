import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import fire from "../../config/firebase.config";

export default function HomepageSelection() {
  const [socket, setSocket] = React.useState();
  const user = fire.auth().currentUser;
  const history = useHistory();
  // Update this to take from db
  const data = {
    user: user.email,
    location: "mtl",
  };

  const handleSubmit = () => {
    const socket = io("http://localhost:8000", { transports: ["websocket"] });
    setSocket(socket);
    socket.on("connect", () => {
      console.log("Looking for movers");
      socket.emit("send-request", data);
    });
  };
  if (socket) {
    socket.on("ack-accept", (value) => {
      console.log(value);
    });
  }

  return (
    <div className="homePageSelectionContainer">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Location"
          data-testid="demo-simple-select-id"
        >
          <MenuItem value={"Montreal"}>Montreal</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Service"
          data-testid="optionsDropDown"
        >
          <MenuItem value={"Mover"}>Mover</MenuItem>
          <MenuItem value={"Driver"}>Driver</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />
      <br />

      <Button
        data-testid="getStartedButton"
        variant="contained"
        color="secondary"
        className="get-started"
        onClick={handleSubmit}
        // onClick={() => history.push("/profile")}
      >
        Get Started
      </Button>
    </div>
  );
}
