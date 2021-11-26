import React, { useEffect, useState } from "react";
import userLogo from "../../images/user.png";
import moverLogo from "../../images/mover.png";
import { useHistory } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../LandingPage/LandingPage.css';
import './TripHistory.css';
import fire from "../../config/firebase.config";
import axios from "axios"


export default function TripHistory() {
    const history = useHistory();
    const user = fire.auth().currentUser;
    const [currTrip, setCurrTrip] = useState([{}]);
    let tempTrip = [{}];


    useEffect(() => {
        async function fetchTrips(email: string) {
            const response = await axios.get(`http://localhost:8000/trips`);
            const responseData = response.data;
            const data = responseData.filter((d) => d.user === user.email);

            data.map(trip => {
                tempTrip.push(trip);
            });
            setCurrTrip(tempTrip);
        }

        fetchTrips();
    }, []);

    return (
        <div className="limiter">
            <div className="container-landing100">
                <div className="wrap-landing100">
                    <h1 className='trip-text'>My Trip History With Movr</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="large" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Mover</TableCell>
                                    <TableCell align="right">Total Distance&nbsp;(km)</TableCell>
                                    <TableCell align="right">Total Time&nbsp;(hr)</TableCell>
                                    <TableCell align="right">Bill&nbsp;($)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currTrip.map((trip) => (
                                    <TableRow
                                        key={trip.user}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {trip.mover}
                                        </TableCell>
                                        <TableCell align="right">{trip.totalDistance}</TableCell>
                                        <TableCell align="right">{trip.totalHours}</TableCell>
                                        <TableCell align="right">{trip.bill}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        </div >
    );

}