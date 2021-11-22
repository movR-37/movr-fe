import React from 'react';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import App from '../App';


export default function Form() {

    const [currentSum,setCurrentSum] = useState();
    const [currentTip,setCurrentTip] = useState(0);
    const [estimatedTime,setEstimatedTime] = useState("");
    const [hourlyRate,setHourlyRate] = useState("");
    const [estimatedDistance,setEstimatedDistance] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        console.log(currentTip);
        let val = ((estimatedTime*30) * (1+(currentTip/100)) * 1.15 ) + 1.67*estimatedDistance
        setCurrentSum(parseFloat(val).toFixed(2));
    }
        return( 
            <form>
                {/* <TextField placeholder='Expected Time/ hr' 
                value = {estimatedTime} 
                onChange={e => setEstimatedTime(e.target.value)}
                >
                </TextField> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                id="outlined-adornment-Time"
                value={estimatedTime}
                size="small"
                onChange={e => setEstimatedTime(e.target.value)}
                endAdornment={<InputAdornment position="end">hr</InputAdornment>}
                aria-describedby="outlined-Time-helper-text"
                inputProps={{
                'aria-label': 'Time',
                }}
                />
                <FormHelperText id="outlined-Distance-helper-text">Time</FormHelperText>
                </FormControl>
                <br/>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                id="outlined-adornment-Distance"
                size="small"
                value={estimatedDistance}
                onChange={e => setEstimatedDistance(e.target.value)}
                endAdornment={<InputAdornment position="end">km</InputAdornment>}
                aria-describedby="outlined-Distance-helper-text"
                inputProps={{
                'aria-label': 'Distance',
                }}
                />
                <FormHelperText id="outlined-Distance-helper-text">Distance</FormHelperText>
                </FormControl>
                <br/>
                <br/>
                <p>Hourly rate: 30$</p>
                <p>Tax: 15%</p>
                {/* cost calculated by current cost of petrol =1.67/l x  estimated distance * mileage + hourlycost + tax*/}
                {/* <input readOnly placeholder='Hourly Rate' 
                value = {hourlyRate} 
                onChange={e => setHourlyRate(e.target.value)}>
                </input> */}
                 <br/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Select Tip %</FormLabel>
                <RadioGroup row aria-label="tip" name="row-radio-buttons-group" defaultValue="15"
                size="small">
                <FormControlLabel value="15" control={<Radio />} label="15" onChange={e => setCurrentTip(e.target.value)}/>
                <FormControlLabel value="20" control={<Radio />} label="20" onChange={e => setCurrentTip(e.target.value)}/>
                <FormControlLabel value="25" control={<Radio />} label="25" onChange={e => setCurrentTip(e.target.value)}/>
                </RadioGroup>
                </FormControl>
                <br/>
                <Button size="medium" onClick={(e) => onSubmit(e)}>Calculate Cost</Button>
                <br/>
                <br/>
                {/* <input type="text" id="result" value = {currentSum} readOnly placeholder='$$$'/> */}
                <TextField
                label="Estimated Cost"
                id="result"
                value={currentSum}
                defaultValue="$$"
                size="small"
                variant="outlined"
                onChange={e => setCurrentSum(e.target.value)}
                />
            </form>
        );
    }