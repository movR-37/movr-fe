import React from 'react'
import './TripReview.css'
import userLogo from "../../images/user.png";
import moverLogo from "../../images/mover.png";
import ReactStars from "react-rating-stars-component";
import { ReactionBarSelector } from '@charkour/react-reactions';
import TextField from "@material-ui/core/TextField";
import { Button, Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

function TripReview() {
    const history = useHistory();
    const handleContinue = async (e) => {
        e.preventDefault();
        history.push(`/review`);
    }


    return (
        <div className="trip-review-limiter">
            <div className="TripReview-master-containerA" />
            <div className="TripReview-master-container">
                <div className="wrap-TripReview-icons">
                    <div className="divider">
                        <img src={userLogo} alt="IMG" className="thumbTrip" />
                    </div>
                    <div className="divider">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>admin@admin.com</h2>
                    </div>
                </div>
                <div className="wrap-TripReview">


                    <div className="TripReview-pic">
                        <h6 className="TripReview_txt1">Total Cost</h6>
                        <h6 className="TripReview_txt1">Total Time</h6>
                        <h6 className="TripReview_txt1">Distance</h6>
                    </div>

                    <div className="TripReview-pic">
                        <h6 className="TripReview_txt2">$132</h6>

                        <h6 className="TripReview_txt2">5.5 Hours</h6>

                        <h6 className="TripReview_txt2">3.2 km</h6>
                        {/* <h6 className="TripReview_txt1">$132</h6>
                            <br></br>
                            <ReactStars
                                count={5}
                                onChange={setValue}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <br></br>
                            <br></br>
                            <TextField
                              id="outlined-multiline-static"
                              fullWidth
                              multiline
                              rows={4}
                              placeholder="review"
                            /> */}
                    </div>



                </div>
                <div className="wrap-TripReview-icons">
                    <div className="divider">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>mover@mover.com</h2>
                    </div>
                    <div className="divider">
                        <img src={moverLogo} alt="IMG" className="thumbTrip" />
                    </div>
                </div>
            </div>
            <div className="TripReview-master-containerTopBottom">
                <Button animated size='massive' onClick={(e) => handleContinue(e)}>
                    <Button.Content visible>Continue</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </div>

        </div>
    )
}

export default TripReview
