import React from "react";
import { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import "./Form.css";
import { useHistory } from "react-router-dom";
import fire from "../config/firebase.config";
import axios from "axios";

export default function Form({ id }) {
  const [currentSum, setCurrentSum] = useState();
  const [currentTip, setCurrentTip] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [estimatedDistance, setEstimatedDistance] = useState("");
  const [currentTime, setCurrentTime] = useState();
  const [currentDistance, setCurrentDistance] = useState();
  const history = useHistory();
  const user = fire.auth().currentUser;

  const onSubmit = (e) => {
    e.preventDefault();
    const total = estimatedTime * 30 + 1.67 * estimatedDistance;
    const totalTip = (total * currentTip) / 1000;
    let val = total * 1.15 + totalTip;
    setCurrentSum(parseFloat(val).toFixed(2));
    setCurrentTime(parseFloat(estimatedTime).toFixed(2));
    setCurrentDistance(parseFloat(estimatedDistance).toFixed(2));
  };

  const handleAccept = async (e) => {
    e.preventDefault();

    history.push("/inprogress", {
      id,
      bill: currentSum ? currentSum : 0,
      completed: false,
      currentTip: currentTip,
      totalHours: currentTime,
      totalDistance: currentDistance,
    });
  };

  const handleRadio = (e) => {
    setCurrentTip(parseInt(e.target.value));
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/trips/${id}`);
    history.push(`/${user.uid}/home`);
  };

  return (
    <div className="reviewFormContainer">
      <form className="reviewForm-form">
        <h1>Estimate Cost</h1>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-Time"
            value={estimatedTime}
            size="small"
            onChange={(e) => setEstimatedTime(e.target.value)}
            endAdornment={<InputAdornment position="end">hr</InputAdornment>}
            aria-describedby="outlined-Time-helper-text"
            className="reviewForm-input"
            inputProps={{
              "aria-label": "Time",
            }}
          />
          <FormHelperText
            data-testid="timeField"
            id="outlined-Distance-helper-text"
          >
            Time
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-Distance"
            size="small"
            value={estimatedDistance}
            onChange={(e) => setEstimatedDistance(e.target.value)}
            endAdornment={<InputAdornment position="end">km</InputAdornment>}
            aria-describedby="outlined-Distance-helper-text"
            inputProps={{
              "aria-label": "Distance",
            }}
          />
          <FormHelperText
            data-testid="distanceField"
            id="outlined-Distance-helper-text"
          >
            Distance
          </FormHelperText>
        </FormControl>
        <br />
        <br />
        <p>Hourly rate: 30$</p>
        <p>Tax: 15%</p>
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Tip %</FormLabel>
          <RadioGroup
            row
            aria-label="tip"
            name="row-radio-buttons-group"
            defaultValue="15"
            size="small"
            onChange={handleRadio}
          >
            <FormControlLabel
              value="150"
              control={<Radio />}
              label="15"
              onClick={(e) => setCurrentTip(1500)}
            />
            <FormControlLabel
              value="200"
              control={<Radio />}
              label="20"
              onClick={(e) => setCurrentTip(2000)}
            />
            <FormControlLabel
              value="250"
              control={<Radio />}
              label="25"
              onClick={(e) => setCurrentTip(2500)}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          aria-label="subButton"
          variant="outlined"
          onClick={(e) => onSubmit(e)}
        >
          Calculate Cost
        </Button>
        <br />
        <br />
        <TextField
          label="Estimated Cost"
          id="result"
          value={currentSum}
          defaultValue="$$"
          size="small"
          variant="outlined"
          className="reviewForm-estimate"
          onChange={(e) => setCurrentSum(e.target.value)}
        />
        <br />
        <br />

        <Button
          variant="outlined"
          className="gotoChat"
          onClick={(e) => handleAccept(e)}
        >
          Confirm Trip!
        </Button>
        <br />
        <br />
        <Button variant="outlined" onClick={(e) => handleCancel(e)}>
          Go Back
        </Button>
      </form>
    </div>
  );
}
