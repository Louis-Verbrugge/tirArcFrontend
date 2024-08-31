



import axios from 'axios'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

import pathApiAxios from "../_helpers/PathApiAxios";


const UseIsAdmin = () => {

  console.log("pdlsqkidsqi idkqiiisidiiiiiiiiiiiiiiiiiiiii")


  const [isAdmin, setIsAdmin] = useState(false);
  const [login, setLogin] = useState(false);


  useEffect(() => {   
    
    alert(pathApiAxios('api/auth'))


    axios({
        method: 'post',
        url: pathApiAxios('api/auth')
      })
        .then(function (response) {

          setIsAdmin(response.data.adminAcces);
          setLogin(response.data.login);

      })
        .catch(function (error) {
          setIsAdmin(false);
          setLogin(false);

      }) 

  }, []);

  return { isAdmin, login };
    
}

export default UseIsAdmin;