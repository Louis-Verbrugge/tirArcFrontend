


import axios from 'axios'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const UseIsAdmin = () => {


  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {            


    axios({
        method: 'post',
        url: 'http://localhost:5000/checkAdmin',
        data: {
            tokenAdmin: Cookies.get('adminToken')
        }
      })
        .then(function (response) {
        if (response.data.adminAcces) {
          setIsAdmin(true);

        } else {
          setIsAdmin(false);
        }
      })
        .catch(function (error) {
          setIsAdmin(false);
      }) 

  }, []);

  return isAdmin;
    
}

export default UseIsAdmin;