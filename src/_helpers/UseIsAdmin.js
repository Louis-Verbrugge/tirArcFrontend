



import axios from 'axios'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const UseIsAdmin = () => {

  console.log("pdlsqkidsqi idkqiiisidiiiiiiiiiiiiiiiiiiiii")


  const [isAdmin, setIsAdmin] = useState(false);
  const [login, setLogin] = useState(false);


  useEffect(() => {            


    axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth',
        data: {
            tokenAdmin: Cookies.get('adminToken'),
            tokenUser: Cookies.get('tokenUser') 

        }
      })
        .then(function (response) {

          setIsAdmin(response.data.adminAcces);
          setLogin(response.data.login);

        //setLoading(false);  // Le chargement est terminé après la réponse

      })
        .catch(function (error) {
          setIsAdmin(false);
          setLogin(false);
          //setLoading(false);  // En cas d'erreur, le chargement est aussi terminé

      }) 

  }, []);

  return { isAdmin, login };
    
}

export default UseIsAdmin;