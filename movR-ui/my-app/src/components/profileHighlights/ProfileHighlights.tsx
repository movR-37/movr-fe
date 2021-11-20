import React from 'react'
import { Typography } from '@material-ui/core';
import "./ProfileHighlights.css"
import ProfileHighlightsItem from './profileHighlightsItem/ProfileHighlightsItem';
import { IProfileHighlightsItemProps } from './profileHighlightsItem/ProfileHighlightsItem';

export interface IProfileHighlightsProps {
    profileType: string,
    profileIconUrl: string,
    highlightItems: IProfileHighlightsItemProps[]
}

function ProfileHighlights({ profileType, profileIconUrl, highlightItems }: IProfileHighlightsProps) {
    return (
        <div className="highlights-container">
            <div className="highlights-header">
                <div className="title">
                    <span><Typography className="title-text" variant="h4">{profileType} Highlights</Typography></span>
                </div>
                <div className="header-icon">
                    <img src={profileIconUrl} width="40px" />
                </div>
            </div>
            <hr></hr>

            {highlightItems.map((item, idx) => (
                <ProfileHighlightsItem
                    key={idx}
                    iconUrl={item.iconUrl}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}

            <hr></hr>

        </div>

    )
}

export default ProfileHighlights
