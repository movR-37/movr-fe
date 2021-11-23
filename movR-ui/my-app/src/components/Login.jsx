import React from "react";
import Registrationcomp from "./registration-component/Registration-component";

export default function Login() {
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
        type: "Login",
        message: "Create a new account.",
        route: "./signup-user",
        text: "Login",
        testid: "buttonLogin"
    };

    return <Registrationcomp formData={formData} classData={classData} />;
}
