

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
                
            console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            const dataUser = response.data.user;
            console.log(response.data.user);
            setLastNameUser(response.data.user.lastName);
            setFirtNameUser(response.data.user.firstName);

            // let image = undefined;
            
            // if (dataUser.profilePicture !== "") {

            //     alert("dataUser.profilePicturokkkkkkkkkkk ")

            //     console.log("dataUser.profilePicture LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")

            //     console.log(dataUser.profilePicture)

            //     const base64 = Buffer.from(dataUser.profilePicture, 'binary').toString('base64');


            //     // console.log("base64")
            //     // console.log(base64)
            //     image = base64;
            // } else {
            //     alert("pas okkkkkkkkkkkkkk")
            // }


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