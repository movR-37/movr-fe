import React from "react";
import Registrationcomp from "./registration-component/Registration-component";

export default function LoginMover() {
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
        type: "Login Mover",
        message: "Create a new account.",
        route: "./signup-mover",
        text: "Login",
        testid: "buttonLogin"
    };

    return <Registrationcomp formData={formData} classData={classData} />;
}
