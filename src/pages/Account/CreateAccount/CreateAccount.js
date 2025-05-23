
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import pathApiAxios from "../../../_helpers/PathApiAxios";


function CreateAccount() {

    const [submit, setSubmit] = useState(false);

    const [credentials, setCredentials] = useState({
        firstName: "louis",
        lastName: "louis",
        years: 19,
        email: "louis",
        password: "louis"
    })
    
    function onSubmit() {
        setCredentials({
            lastName: document.getElementById("lastName").value,
            firstName: document.getElementById("firstName").value,
            years: document.getElementById("years").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
        setSubmit(true);
    }

    useEffect(() => {
        if (submit) {

            axios({
                method: 'post',
                url: pathApiAxios('api/addAccount'),
                data: {
                    credentials
                }
            })
                .then(function (response) {
                //alert(response.data);
            })
                .catch(function (error) {
                //alert(error);
            });
        }
    }, [credentials]);


    return (
        <>
            <h1>Create Account</h1>

            <div>
                <label>lastName</label>
                <input id="lastName" type="text"></input>
            </div>

            <div>
                <label>firstName</label>
                <input id="firstName" type="text"></input>
            </div>

            <div>
                <label>years</label>
                <input id="years" type="text"></input>
            </div>

            <div>
                <label>email</label>
                <input id="email" type="text"></input>
            </div>

            <div>
                <label>password</label>
                <input id="password" type="text"></input>
            </div>

            <button onClick={onSubmit}>Submit</button>

            <a href='./login'>&lt;-retour</a>

        </>
    )
}

export default CreateAccount;
