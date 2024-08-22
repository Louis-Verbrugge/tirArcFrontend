

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';
import MyAccount from "./MyAccount/MyAccount";


function AccountRoute() {

  return (

    <Routes>
      
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/myAccount' element={<MyAccount />} />
      
    </Routes>

  );
}

export default AccountRoute;
