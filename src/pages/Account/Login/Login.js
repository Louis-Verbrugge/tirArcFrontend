

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';

  
function Login() {

    


    const navigate = useNavigate();


    //let isAdminFront = false;    

    const [submit, setSubmit] = useState(false);

    const [credentials, setCredentials] = useState({
        login: "louis",
        password: "louis"
    })


    useEffect(() => {
        if (submit) {
            console.log("crednedhsqgydhqsygdygqsudqshgdqsuuydqsovfyqçs :: "+credentials);
        }

        axios({
            method: 'post',
            url: 'http://localhost:5000/api/login', 
            data: {
                credentials
            }
        })
            .then(function (response) {
            //isAdminFront = response.data.tokenAdmin;

            //Cookies.set('adminToken', isAdminFront, { expires: 3650, secure: true, sameSite: 'Strict' }); // Stocker le token dans un cookie sécurisé

            if (response.data.adminAcces) {
                navigate('/admin');
            } else {
                navigate('/admin');
            }
        })
            .catch(function (error) {
            console.log(error);
            //isAdminFront = false;

        });




    }, [credentials, submit]);


    function onSubmit() {   
        setCredentials({
            login: document.getElementById("email").value,
            password: document.getElementById("password").value
        });

        setSubmit(true);
    }


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

            <a href='./createAccount'>Tu n'as pas de compte ?</a>

        </>
    )
}

export default Login;
