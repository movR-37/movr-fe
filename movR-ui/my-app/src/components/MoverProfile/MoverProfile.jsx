import React, { useState } from 'react'
import userLogo from "../../images/user.png";
import moverLogo from "../../images/mover.png";
import './MoverProfile.css';


export default function MoverProfile() {

    const [counter, setCounter] = useState(0);

    const addInputField = () => {
        return (
            `<input
            className="input100"
            placeHolder="A link to your image"
        />`
        )
    }

    return (
        <div className="limiter">
            <div className="container-moverProfile100">
                <div className="wrap-moverProfile100">
                    <div>
                        <img src={userLogo} width="350" height="350" alt="IMG" />
                    </div>
                    <div className="moverProfile100-form validate-form">
                        <span className="moverProfile100-form-title"> My Profile </span>
                        <div className="form-input-container">
                            <div className="wrap-input100 validate-input">
                                <input
                                    className="input100"
                                    placeHolder="Enter your full name.."
                                />
                            </div>
                            <div className="wrap-input100 validate-input">
                                <input
                                    className="input100"
                                    placeHolder="Enter your location.."
                                />
                            </div>
                            <div className="wrap-input100 validate-input">
                                <input
                                    className="input100"
                                    placeHolder="About you.."
                                />
                            </div>

                            <div>
                                <div className="wrap-input100 validate-input">

                                    <input
                                        className="input100"
                                        placeHolder="A link to your image"
                                    />

                                </div>
                                <div className="wrap-input100 validate-input">

                                    <input
                                        className="input100"
                                        placeHolder="A link to your image"
                                    />

                                </div>

                                <div className="wrap-input100 validate-input">

                                    <input
                                        className="input100"
                                        placeHolder="A link to your image"
                                    />

                                </div>
                                <div className="wrap-input100 validate-input">

                                    <input
                                        className="input100"
                                        placeHolder="A link to your image"
                                    />

                                </div>

                                <div className="wrap-input100 validate-input">

                                    <input
                                        className="input100"
                                        placeHolder="A link to your image"
                                    />

                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button data-testid='infoButton' className="login100-form-btn" style={{ backgroundColor: '#800080' }}>SAVE</button>
                            </div>
                            <div className="container-login100-form-btn">
                                <button data-testid='delButton' className="login100-form-btn" style={{ backgroundColor: '#8B0000' }}>CANCEL</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}