import React, { useState } from "react";
import { Button, ClickAwayListener, Card, Grid, CardContent, TextField, Popper } from "@material-ui/core";
import Calendar from "react-calendar";
import moment from 'moment';
import "react-calendar/dist/Calendar.css";
import "./BookingReservation.css";

export default function BookingReservation() {
    const [value, onChange] = useState(new Date());
    const [isHidden, setIsHidden] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <div className="cardContainer">
            <Card className="card">
                <CardContent>
                    <Grid container spacing={2}>

                        {/* Row 0 */}
                        <Grid item xs={12}>
                            <div className="form-heading">
                                Check Availability & Dates
                            </div>
                            <div className="form-sub-heading">

                            </div>
                        </Grid>

                        {/* Row 1 */}
                        <Grid item xs={12} md={6}>
                            <TextField className="TextField" label="First Name" variant="outlined" size="small" InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField className="TextField" label="Last Name" variant="outlined" size="small" InputLabelProps={{ shrink: true }} />
                        </Grid>

                        {/* Row 2 */}
                        <Grid item xs={12}>
                            <TextField className="TextField" label="Email" variant="outlined" size="small" InputLabelProps={{ shrink: true }} />
                        </Grid>

                        {/* Row 3 */}
                        <Grid item xs={12}>
                            <TextField className="TextField" label="Mobile" variant="outlined" size="small" InputLabelProps={{ shrink: true }} type="number" />
                        </Grid>

                        {/* Row 4 */}
                        <Grid item xs={6}>
                            <TextField className="TextField" label="No. of Guests" variant="outlined" size="small" InputLabelProps={{ shrink: true }} type="number" />
                        </Grid>
                        {/* Calendar */}
                        <Grid item xs={6}>
                            <TextField
                                className="TextField"
                                label="Select Date"
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                aria-describedby={id}
                                onClick={handleClick}
                                value={moment(value).format('L')}
                            />
                            <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end"  >
                                <div>
                                    {!!isHidden ? (
                                        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                            <Calendar onChange={onChange} value={value} className="calendar"
                                                onClickDay={(value, e) => {
                                                    onChange(value)
                                                    setAnchorEl(null);
                                                }}
                                            />
                                        </ClickAwayListener>
                                    ) : undefined}
                                </div>
                            </Popper>

                        </Grid>

                        {/* Button Row */}
                        <Grid item xs={12} className="btnGrid">
                            <Button variant="contained" color="secondary" className="formButton">
                                Check Availability & Rates
                            </Button>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </div >
    );
}
