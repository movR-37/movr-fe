import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, NativeSelect } from "@material-ui/core";
import "./NavBar.css"

function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const updateActive = () => setIsActive(prevState => !prevState);
    return (
        <div>
            <div className="navbar-master-container">
                <div className="navbar-logo">MovR</div>
                <div className="dropdownBtn">
                <Button
                  variant="contained"
                  color="secondary"
                  className="dropdownBtn"
                >
                  Log In
                </Button>
              </div>
            </div>

            <div className="navbar-small-screen-container">
                <div className="navbar-small-screen-item">
                    <FontAwesomeIcon icon={faSearch} className="navbar-small-screen-icon" />
                    <p className="navbar-small-screen-title">Explore</p>
                </div>
                <div className="navbar-small-screen-item">
                    <FontAwesomeIcon icon={faUserCircle} className="navbar-small-screen-icon" />
                    <p className="navbar-small-screen-title">Log In</p>
                </div>
            </div>

        </div>
    )
}

export default NavBar
