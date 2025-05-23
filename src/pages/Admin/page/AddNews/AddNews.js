

import React, { useState, useEffect } from 'react';
import axios from 'axios';


import pathApiAxios from "../../../../_helpers/PathApiAxios";


function AddNews() {

    const [getData, setGetData] = useState('')

    useEffect(() => {            

        axios({
            method: 'get',
            url: pathApiAxios('api/database'),
        })
            .then(function (response) {
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
