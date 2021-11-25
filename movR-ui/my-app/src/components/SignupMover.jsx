import React from "react";
import Registrationcomp from "./registration-component/Registration-component";


export default function SignupMover() {
    const formData = [
        {
            type: "text",
            name: "email",
            placeholder: "Email",
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
        },
    ];

    const classData = {
        type: "Registration Mover",
        message: "Already have an account? Login here.",
        route: "./login-mover",
        text: "Sign up",
        testid: "buttonSignup"
    };

    return <Registrationcomp formData={formData} classData={classData} />;
}
