

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';

import pathApiAxios from "../_helpers/PathApiAxios";


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
    }, [lastNameuser, firtNameUser]);

    useEffect(() => {


        axios({
            method: 'post',
            url: pathApiAxios('api/user'),
            
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

    return { user };

}

export default GetDataUser;