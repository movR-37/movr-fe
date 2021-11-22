import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function HomepageSelection() {
  const history = useHistory();
  return (
    <div className="homePageSelectionContainer">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Location"
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
        onClick={() => history.push("/chat")}
      >
        Get Started
      </Button>
    </div>
  );
}
