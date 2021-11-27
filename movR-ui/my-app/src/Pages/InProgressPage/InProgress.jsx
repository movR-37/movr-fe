import React from 'react'
import './InProgress.css'
import progressLogo from "./inProgress.png";

function InProgress() {
    return (
        <div className="inProgressMaster">
            <div className="progressCardWrap">
                <div className="progressCard">
                    <div className="progress-pic">
                            <h1 className="landing_txt1">Trip Is In Progress!</h1>
                            <img src={progressLogo} alt="IMG" className="thumb"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InProgress
