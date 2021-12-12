import React, { useEffect, useState } from "react";
import userLogo from "../../images/user.png";
import moverLogo from "../../images/mover.png";
import "./MoverProfile.css";
import fire from "../../config/firebase.config";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function MoverProfile() {
  const [counter, setCounter] = useState(0);
  const user = fire.auth().currentUser;
  const history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [subtitle_2, setSubtitle_2] = useState("");
  const [images, setImages] = useState([]);
  const [about, setAbout] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [files, setFiles] = useState();

  const handleSave = async (e) => {
    // Post images, name, location, and about you
    e.preventDefault();
    console.log("FILES", files);
    const formData = new FormData();
    for (const key of Object.keys(files)) {
      formData.append("files", files[key]);
    }
    formData.append("name", name);
    formData.append("email", user.email);
    formData.append("location", location);
    formData.append("address", address);
    formData.append("subtitle_2", subtitle_2);
    formData.append("latitude", lat);
    formData.append("longitude", lng);
    formData.append("about", about);
    await axios.put("http://localhost:8000/movers", formData, {
      headers: { contentType: "multipart/form-data" },
    });
    history.push("/mover");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      console.log(lat, lng);
    });
  }, [lat, lng]);

  const handleCancel = () => {
    // Go to waiting room
    history.push("/mover");
  };

  return (
    <form onSubmit={handleSave}>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    placeHolder="Enter your address.."
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    placeHolder="Enter your city/province.."
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    placeHolder="About you.."
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    placeHolder="Moving Capacity.."
                    onChange={(e) => setSubtitle_2(e.target.value)}
                  />
                </div>

                <div>
                  <div className="wrap-input100 validate-input">
                    <input
                      id="file"
                      type="file"
                      name="file"
                      multiple
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => {
                        setFiles(e.target.files);
                      }}
                    />
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    data-testid="infoButton"
                    type="submit"
                    className="login100-form-btn"
                    style={{ backgroundColor: "#800080" }}
                  >
                    SAVE
                  </button>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    data-testid="delButton"
                    onClick={() => handleCancel()}
                    className="login100-form-btn"
                    style={{ backgroundColor: "#8B0000" }}
                  >
                    Go to wait room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
