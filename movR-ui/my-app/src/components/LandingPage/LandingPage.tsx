import React from "react";
import userLogo from "../../images/user.png";
import moverLogo from "../../images/mover.png";
import { useHistory } from "react-router-dom";
import './LandingPage.css';
import axios from "axios"


export default function LandingPage() {
    const history = useHistory();

    return (
        <div className="limiter">
            <div className="container-landing100">
                <div className="wrap-landing100">

                    <div className="landing100-pic">
                        <button>
                            <h1 className="landing_txt1">I'm a client!</h1>
                            <img src={userLogo} alt="IMG" onClick={() => history.push('/login-user')} className="thumb" />
                        </button>
                    </div>

                    <div className="landing100-pic">
                        <button>
                            <h1 className="landing_txt1">I'm a mover!</h1>
                            <img src={moverLogo} alt="IMG" onClick={() => history.push('/login-mover')} className="thumb" />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );

}