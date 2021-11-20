import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import "./ProfileHighlightsItem.css";

export interface IProfileHighlightsItemProps {
    iconUrl: string,
    title: string,
    subtitle: string
}

function ProfileHighlightsItem({ iconUrl, title, subtitle }: IProfileHighlightsItemProps) {
    return (
        <div>
            <div className="highlights">
                <div className="highlights-icon">
                    <img src={iconUrl} width="20px" />
                </div>
                <div className="highlights-text">
                    <div className="highlights-text-title">
                        {title}
                    </div>
                    <div className="highlights-text-subtitle">
                        {subtitle}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHighlightsItem
