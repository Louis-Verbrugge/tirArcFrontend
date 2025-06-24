
import React, { useEffect, useState } from "react";
import getCookie from "../../../_helpers/GetCookie";

import axios from 'axios';

import pathApiAxios from '../../../_helpers/PathApiAxios';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import styles from './Cookie.module.scss'


const { useRef } = require('react');

gsap.registerPlugin(useGSAP);

function Cookie() {

    const annimationCookie = useRef();

    const [structData, setStructData] = useState({});
    const [loadingStructData, setLoadingStructData] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
            axios({
                method: 'get',
                url: pathApiAxios('api/page-cookie'),
            })
  
            .then(function (response) {
                setStructData(response.data.data)
            })
    
            .catch(function (error) {
              console.error('Erreur lors de la récupération des actualités :', error);
            })
    
            .finally(function () {
              setLoadingStructData(false);
            })
        };
        fetchData();
    }, []);


    function playAnnimationPopUp(acceptCookie) {

        if (acceptCookie) {
            document.cookie = "validCookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }

        gsap.fromTo(annimationCookie.current,
        { opacity: 1 }, 
        { opacity: 0, duration: .5, onComplete: () => {
            annimationCookie.current.style.display = "none";
        }
        });
    }
    
    if (getCookie("validCookie") === "true" || loadingStructData) { 
        return null;
    } else {
        return (
        <div className={styles.cookie} ref={annimationCookie}>

            <div className={styles.header}>
                <h3>{structData.icone_cookie}</h3>

                <div className={styles.text}>
                    <h4>{structData.titre}</h4>
                    <p>{structData.description}</p>
                </div>
            </div>
        
            <div className={styles.blockButton}>
                <button className={styles.accept} onClick={() => playAnnimationPopUp(true)}><p>{structData.nom_bouton_accepter}</p></button>
                <button className={styles.decline} onClick={() => playAnnimationPopUp(false)} ><p>{structData.nom_bonton_refuser}</p></button>
            </div>
        </div>
        );
    }
}

export default Cookie;
