
import { Navigate } from "react-router-dom" 
import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { addMinutes } from "rsuite/esm/internals/utils/date";

const AuthAdmin = ({children}) => {


    
    console.log(children)

    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(null);


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
                console.log("okokkkkkkkkkkkkkkkkk")
                console.log(children)
                setIsAuthenticated(true);
                return children

            } else {
                console.log("no okkkkkkkkkkkkkkkkkk")
                //return <Navigate to="/" />
                setIsAuthenticated(false);
            }

            })
            .catch(function (error) {
                console.log("no okkkkkkkkkkkkkkkkkk")
            //return <Navigate to="/" />
            setIsAuthenticated(false);

            })

            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Affiche un indicateur de chargement
    }

    if (isAuthenticated) {
        return children
    } else {
        return <Navigate to="/" />
    }



    
}

export default AuthAdmin;