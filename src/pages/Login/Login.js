

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import axios from 'axios'
import Cookies from 'js-cookie';

let isAdminFront = false


function Login() {

    const [credentials, setCredentials] = useState({
        login: "louis",
        password: "louis"
    })




    function onSubmit() {   
        setCredentials({
            login: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    }

    useEffect(() => {
        console.log(credentials.login);
        console.log(credentials);

        console.log(process.env.ADMIN_USER)

        axios({
            method: 'post',
            url: 'http://localhost:5000/loginAdmin',
            data: {
                credentials
            }
        })
            .then(function (response) {
            console.log("is Admin ? : " + response.data.isAdmin);
            isAdminFront = response.data.isAdmin;

            Cookies.set('adminToken', isAdminFront, { expires: 3650, secure: true, sameSite: 'Strict' }); // Stocker le token dans un cookie sécurisé

        })
            .catch(function (error) {
            console.log(error);
            isAdminFront = false;

        });
        

    }, [credentials]);


    return (
        <>
            <h1>page Login</h1>
            <p>{process.env.ADMIN_USER}</p>
            <div>
                <label>email</label>
                <input id="email" type="text"></input>
            </div>

            <div >
                <label>password</label>
                <input id="password" type="text"></input>
            </div>

            <button onClick={onSubmit} >Click pour valider</button>
        </>
    )
}

export default Login;
