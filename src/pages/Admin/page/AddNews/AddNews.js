

import React, { useState, useEffect } from 'react';

import { getData } from '../../../../database/playground-1.mongodb';
import axios from 'axios';


function AddNews() {

    const [getData, setGetData] = useState('')

    useEffect(() => {            

        axios({
            method: 'get',
            url: 'http://localhost:5000/api/database',
        })
            .then(function (response) {
                console.log(response.data);
                setGetData(response.data.map((item, index) => {
                    return <p key={index}>{item.name}</p>
                }));
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <h1>page Admin</h1>

            <p>{getData}</p>

        
        </>
    )
}

export default AddNews;
