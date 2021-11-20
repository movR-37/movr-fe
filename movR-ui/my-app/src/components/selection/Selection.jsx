import React from "react";
import { Button, NativeSelect } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "react-dropdown/style.css";
import "./Selection.css";


export default function Selection() {

  const cities = [
    "Montreal",
    "Toronto"
  ];

  const opts = [
    "Mover"
  ];
  const history = useHistory();


  return (
    <div data-testid="masterDiv" className="grandParentContainer">
      <div className="dropdownBar">
        <div className="headerFont">
          <h1 data-testid="title1" className="title">Let us help you make moving easier!</h1>
          <h2 data-testid="title2"className="selection-heading">
            Join the MovR community now.
          </h2>
        </div>

        <div className="get-started-small-container">
          <Button
            variant="contained"
            color="secondary"
            className="get-started-small"
          >
            Get Started
          </Button>
        </div>

        <div className="parentContainer">

          <Grid container className='dropdown-container'>

            <Grid data-testid="optionsDropDown" item={true} xs={4} className='selection-ddI'>

              <NativeSelect
                className="dropdown-select"
              >
                <option value={""}>What are you looking for?</option>
                {opts.map((options, idx) => {
                  return (
                    <option value={options} key={idx}>{options}</option>
                  )
                })}
              </NativeSelect>

            </Grid>

            <Grid data-testid="cityDropDown" item={true} xs={4} className='selection-ddII'>

              <NativeSelect
                className="dropdown-select"
              >
                <option value={""}>Select a City</option>
                {cities.map((city, idx) => {
                  return (
                    <option value={city} key={idx}>{city}</option>
                  )
                })}
              </NativeSelect>

            </Grid>

            <Grid item={true} xs={3} >

              <div className="dropdownBtn">
                <Button data-testid="getStartedButton"
                  variant="contained"
                  color="secondary"
                  className="get-started"
                  onClick={() => history.push('/profile')}
                >
                  Get Started
                </Button>
              </div>


            </Grid>

          </Grid>

        </div>

      </div >
    </div >
  );
}
