

import React, { useState, useEffect } from 'react';

import { getData } from '../../../../database/playground-1.mongodb';


function AddNews() {




    return (
        <>
            <h1>page Admin</h1>

            <p>{getData}</p>

        
        </>
    )
}

export default AddNews;
