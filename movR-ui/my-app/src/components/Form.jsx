import React from 'react';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
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
                <input placeholder='Expected Time/ hr' 
                value = {estimatedTime} 
                onChange={e => setEstimatedTime(e.target.value)}>
                </input>
                <br/>
                <input placeholder='Expected Distance/ mi' 
                value = {estimatedDistance} 
                onChange={e => setEstimatedDistance(e.target.value)}>
                </input>
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
                <RadioGroup row aria-label="tip" name="row-radio-buttons-group" defaultValue="15">
                <FormControlLabel value="15" control={<Radio />} label="15" onChange={e => setCurrentTip(e.target.value)}/>
                <FormControlLabel value="20" control={<Radio />} label="20" onChange={e => setCurrentTip(e.target.value)}/>
                <FormControlLabel value="25" control={<Radio />} label="25" onChange={e => setCurrentTip(e.target.value)}/>
                </RadioGroup>
                </FormControl>
                <br/>
                <button onClick={(e) => onSubmit(e)}>Calculate Cost</button>
                <br/>
                <input type="text" id="result" value = {currentSum} readOnly placeholder='$$$'/>
            </form>
        );
    }