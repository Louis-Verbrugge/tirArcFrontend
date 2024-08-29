
import { Navigate } from "react-router-dom" 
import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Loading from "../components/Loading/Loading";

const AuthAdmin = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {            


        axios({
            method: 'post',
            url: 'http://localhost:5000/checkAdmin',
            data: {
                tokenAdmin: Cookies.get('adminToken')
            }
        })
            .then(function (response) {
            console.log("is Admin dsqdsqdsqd? : " );
            if (response.data.adminAcces) {
                setIsAuthenticated(true);

            } else {
                setIsAuthenticated(false);
            }

            })
            .catch(function (error) {
                console.log("no okkkkkkkkkkkkkkkkkk")
                setIsAuthenticated(false);
            })


            .finally(function () {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)

            })



    }, []);


    if (loading) {
        return <Loading size={100}/>
    }
    
    if (isAuthenticated) {
        return children

    } else {
        return <Navigate to="/" />
    }



    
}

export default AuthAdmin;