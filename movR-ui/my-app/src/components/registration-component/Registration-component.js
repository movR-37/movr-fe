import React, { useEffect, useState } from "react"
import "./Login.css";
import image from "./icons/login.png";
import logo from "../../images/movr.png";
import { useHistory } from "react-router-dom";
import fire from "../../config/firebase.config";
import userStatus from "../../UserLoginStatus";
import axios from "axios"

function RegistrationComp({ formData, classData }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const user = fire.auth().currentUser;
  let userObj = {};
  if (user) {
    userObj = {
      email: user.email
    };
  }



  const postUsertoDB = () => {
    axios.post('http://localhost:8000/movers', userObj)
      .then(response => console.log(response));
  }

  const onChange = React.useCallback(e => {
    switch (e.target.name) {
      case "password":
        setErrorMessage("");
        setPassword(e.target.value);
        break;
      case "email":
        setErrorMessage("");
        setEmail(e.target.value);
        break;
      default:
    }
  }, []);

  const handleSubmission = (currentPage) => {
    if (currentPage === 'Registration') {
      history.push("/login-user");
    }
    else if (currentPage === 'Registration Mover') {
      history.push(`/login-mover`);

    } else if (currentPage === 'Login Mover') {
      history.push(`/profile`);
    } else {
      history.push(`/${user.uid}/home`)
    }
  };

  const onSubmit = async () => {
    try {
      setErrorMessage("");
      if (classData.type === "Registration Mover") {
        await fire.auth().createUserWithEmailAndPassword(email, password);
        postUsertoDB(user);
      } else if (classData.type === "Registration") {
        await fire.auth().createUserWithEmailAndPassword(email, password);
      }
      else if (classData.type === "Login Mover") {
        await fire.auth().signInWithEmailAndPassword(email, password);
        userStatus.setStatus(true);
        console.log(userStatus.getStatus());
      } else {
        await fire.auth().signInWithEmailAndPassword(email, password);
        userStatus.setStatus(true);
        console.log(userStatus.getStatus());
      }
      handleSubmission(classData.type);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic">
            <img src={logo} alt="IMG" />
          </div>

          <div
            className="login100-form validate-form"
          >
            <span className="login100-form-title"> User {classData.type} </span>

            <div className="form-input-container">
              {formData.map((data, index) => (
                <div key={index} className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type={data.type}
                    name={data.name}
                    placeholder={data.placeholder}
                    onChange={onChange}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100"></span>
                </div>
              ))}
            </div>
            <p>{errorMessage.length ? errorMessage : null}</p>
            <div className="container-login100-form-btn">
              <button onClick={() => {
                (onSubmit())
              }} data-testid={classData.testid} className="login100-form-btn">{classData.text}</button>
            </div>

            <div className="text-center p-t-136">
              <button onClick={() => {
                history.push(classData.route)
              }
              } className="txt2">{classData.message}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationComp;