

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import { Buffer } from 'buffer';

function GetDataUser() {    

    const [user, setUser] = useState({
        firstName: "",
        lastName:"",
        years: "",
        email: "",
        profilePicture: ""
    })

    const [lastNameuser, setLastNameUser] = useState("");
    const [firtNameUser, setFirtNameUser] = useState("");

    useEffect(() => {
        console.log("lastNameuser : " + lastNameuser);
        console.log("firtNameUser : " + firtNameUser);
    }, [lastNameuser, firtNameUser]);

    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/user',
            data: {
                tokenUser: Cookies.get('tokenUser')
            }
        })

            .then(function (response) {
                
            const dataUser = response.data.user;
            setLastNameUser(response.data.user.lastName);
            setFirtNameUser(response.data.user.firstName);

            setUser({
                firstName: dataUser.firstName,
                lastName: dataUser.lastName,
                years: dataUser.years,
                email: dataUser.email,
                profilePicture: dataUser.profilePicture

            })
        })

            .catch(function (error) {
            console.log(error);
        });

    }, []);

    console.log("user : ");
    console.log(user);

    return { user };

}

export default GetDataUser;