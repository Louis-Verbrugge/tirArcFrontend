
import React, { useState, useEffect } from 'react';

import GetDataUser from '../../../_helpers/GetDataUser';
import axios from 'axios';
import Compressor from 'compressorjs';
import { Buffer } from 'buffer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import pathApiAxios from '../../../_helpers/PathApiAxios';

function MyAccount() {
    
    const navigate = useNavigate();

    const { user } = GetDataUser();
    const [imageDecode, setImageDecode] = useState('')


    function uploadFile() {

        const fileInput = document.getElementById('testtest');
        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append('profileImage', file);
        
        axios({
            method: 'post',
            url: pathApiAxios('api/addProfilePicture'), 
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(function (response) {
                setImageDecode(response.data.imageData)
            
        })
            .catch(function (error) {
                console.log(error);
        });

    }

    function disconnect() {
        Cookies.remove('tokenUser');
        navigate('../../');

    }


    return (
        <>
            <h1>Mon Compte</h1>
            <p>Prénom: {user.firstName}</p>
            <p>Nom: {user.lastName}</p>
            <p>Âge: {user.years}</p>
            <p>Email: {user.email}</p>


            <input type="file" id="testtest" accept="image/png, image/jpeg" />

            <button onClick={ () => uploadFile()}>Changer la photo de profil</button>

            <p>image decoded:</p>
            {imageDecode && (   
                <img 
                    src={`data:image/png;base64,${imageDecode}`} 
                    alt="Profile" 
                />
            )}
            <p>{imageDecode}</p>

            <button onClick={ () => disconnect()}>disconnect</button>
        </>
    )
}

export default MyAccount;
