import React from 'react';
import { Typography } from '@material-ui/core';
import ShowMoreText from 'react-show-more-text';
import "./AboutProfile.css"

export interface IAboutProfileProps {
    profileType: string,
    aboutBody: string
}

function AboutProfile({ profileType, aboutBody }: IAboutProfileProps) {

    const showButton = (text: string, arrow: string) => (
        <span className="show-more-less">
            <br></br><br></br>
            {text}
            <span className="arrow-span">
                <img className="button-arrow" src={arrow}>
                </img>
            </span></span>);

    return (
        <div>
            <div className="about-container">
                <div className="about-title">
                    <span><Typography className="title-text" variant="h4">About the Mover</Typography></span>
                </div>
                <div className="about-body">
                    <ShowMoreText
                        lines={3}
                        more={showButton("Show more", "https://image.flaticon.com/icons/png/512/271/271228.png")}
                        less={showButton("Show less", "https://image.flaticon.com/icons/png/512/271/271220.png")}
                        className='content-css'
                        anchorClass='my-anchor-css-class'
                        expanded={false}
                        width={700}
                    >
                        {aboutBody}
                    </ShowMoreText>
                </div>
            </div>
        </div>
    )
}

export default AboutProfile
