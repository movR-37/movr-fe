import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core';
import "./ProfileHeader.css"

export interface IProfileHeaderProps {
    title?: string,
    rating: string,
    noOfReviews: string,
    location: string
}

export default function ProfileHeader(props: IProfileHeaderProps) {
    return (
        <div>
            <div className="header">
                <div className="title">
                    <Typography variant="h4" style={{ fontWeight: 500 }} >{props.title}</Typography>
                </div>
                <div className="subtitle">
                    <div className="review-div">
                        <span><FontAwesomeIcon icon={faStar} color="rgb(157,78,221)" size="sm" style={{ marginBottom: 1 }} /></span>
                        <span style={{ fontWeight: 500, fontSize: 16, marginLeft: 2, marginTop: 3, marginRight: 1 }}>{props.rating}</span>
                        <span className="reviews-text">({props.noOfReviews} reviews)</span>
                    </div>
                    <div className="spacer"></div>
                    <div className="location-div">
                        <span style={{ marginLeft: 2 }}><FontAwesomeIcon icon={faMapMarkerAlt} color="rgb(157,78,221)" size="sm" style={{ marginBottom: 1 }} /></span>
                        <span style={{ marginLeft: 3 }}>{props.location}</span>
                    </div>
                    <div className="margin-auto-div"></div>
                    <div className="spacer"></div>
                    <div className="share-div">
                        <span><FontAwesomeIcon icon={faShare} color="grey" size="sm" style={{ marginBottom: 1 }} />
                        </span><span style={{ color: "grey", marginLeft: 3 }}>Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

