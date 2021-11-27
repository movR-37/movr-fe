import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PercentIcon from "@mui/icons-material/Percent";
import Divider from "@mui/material/Divider";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./Itinerary.css";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Itinerary() {
  const history = useHistory();
  const { currentTip, totalHours, totalDistance, id, bill, completed } =
    useLocation().state;

  const handlePayment = () => {
    history.push(`/payment`, {
      data: {
        id,
        bill,
        completed,
        totalHours,
        totalDistance,
      },
    });
  };
  // can set input values instead of the hardcoded ones e.g 2.6 blah blah
  let distance = totalDistance;
  let distanceCost = distance * 1.67;
  let distanceCostString =
    distance + " km x 1.67 = $" + distanceCost.toFixed(2);

  let time = totalHours;
  let timeCost = time * 30;
  let timeCostString = time + " hrs x 30 = $" + timeCost.toFixed(2);

  let tax = 0.15;
  let taxCost = (distanceCost + timeCost) * tax;
  let taxCostString =
    "($" +
    distanceCost.toFixed(2) +
    " + $" +
    timeCost.toFixed(2) +
    ") x " +
    tax +
    " = $" +
    taxCost.toFixed(2);

  let tip = currentTip / 1000;
  let tipCost = (distanceCost + timeCost) * tip;
  let tipCostString =
    "($" +
    distanceCost.toFixed(2) +
    " + $" +
    timeCost.toFixed(2) +
    ") x " +
    tip +
    " = $" +
    tipCost.toFixed(2);

  let total = distanceCost + timeCost + taxCost + tipCost;
  let totalCostString = "$" + total.toFixed(2);
  return (
    <div className="fullPage">
      <div className="itineraryMaster">
        <div className="listDiv">
          <List className="listItinerary" sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SocialDistanceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Distance Cost"
                secondary={distanceCostString}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TimelapseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Time Cost" secondary={timeCostString} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PercentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Tax" secondary={taxCostString} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalAtmIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Tip" secondary={tipCostString} />
            </ListItem>
            <Divider />
            <ListItem className="totalItem">
              <ListItemAvatar>
                <Avatar>
                  <MonetizationOnIcon />
                </Avatar>
              </ListItemAvatar>
              {/* <ListItemText primary="Total" secondary={totalCostString} /> */}
              <h6 className="Itinerary_txt1">Total Cost = {totalCostString}</h6>
            </ListItem>
            <Button variant="contained" color="primary" onClick={handlePayment}>
              Proceed to Payment
            </Button>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
