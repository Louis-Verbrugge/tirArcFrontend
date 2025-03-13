
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import {NavBar} from "../../../components/NavBar/NavBar.js";


import logoTirArcCysoing from "../../../image/logoTirArcCysoing.jpg"
import Cookies from 'js-cookie';

import "./LandingPage.css"

import image1 from '../../../image/Plan.png'
import image2 from '../../../image/Plan.png'
import image3 from '../../../image/Plan.png'
import image4 from '../../../image/Plan.png'
import image5 from '../../../image/Plan.png'
import { ButtonToolbar } from "react-bootstrap"

import UseIsAdmin from "../../../_helpers/UseIsAdmin";

import GetDataUser from '../../../_helpers/GetDataUser';

import { NumberCount } from '../../../components/NumberCount/NumberCount';

import styles from "./LandingPage.module.scss"

import { Footer } from '../../../components/Footer/Footer.js';

function LandingPage() {

  const navigate = useNavigate();

  const { isAdmin, login } = UseIsAdmin();


  const { user } = GetDataUser();

  useEffect(() => {
    console.log(user);
    console.log("user.profilePicture 99999999999999999999999999999999 : ");
    console.log(user);
  }, [user])



  let InfoLandingPage = [
    {
      titleInscription: "inscription",
      description: " Inscription pour l'année 2024-2025, test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      image: image1,
      background: "white",
      href: "inscription"
    },
    {
      titleInscription: "Compétitions",
      description: "test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      image: image1,
      background: "black",
      href: "competition"
    },
    {
      titleInscription: "Blog",
      description: "test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      image: image1,
      background: "blue",
      href: "inscription"
    },
    {
      titleInscription: "Qui sommes nous ?",
      description: "test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      image: image1,
      background: "red",
      href: "inscription"

    },
    {
      titleInscription: "inscription 5",
      description: "test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      image: image1,
      background: "yellow",
      href: "inscription"


    },
  ]

  function handleClick(annee) {
    navigate(`/${annee}/`);
  }


  function blockNavigation() {

    const listeBlockNavigation = InfoLandingPage.map((item, index) =>
     
     <a href={"#"+item.titleInscription}>{item.titleInscription}</a>

    )

    return (
      <div className="navigation">
        {listeBlockNavigation}
      </div>

    )
  }

  function checkStatus() {

    if (login && isAdmin) {
      navigate('/admin');
    } else if (login && !isAdmin) {
      //alert("monCompte");
      navigate('/account/myAccount');
    } else {
      navigate('/account/login');
    }
    
  }

  function blockSite() {

    const listeblockSite = InfoLandingPage.map((item, index) =>

      <div id={item.titleInscription} className="blockSite" style={{ flexDirection: index%2 == 0? "row": "row-reverse", background: item.background }} >
        <div className="blockTexte">
          <h2><a href="/inscription">{item.titleInscription}</a></h2>
          <p>
            {item.description}
          </p>
        </div>
        <img onClick={() => handleClick(item.href)} src={image1} />

      </div>
    )

    return(listeblockSite)

  }



  return (
    <div className="landingPage">






      {/* <div>
        <img className="backGroundImage" src={image2}></img>

      </div> */}

    


      {blockSite()}

      <NumberCount />

      <div className={styles.infoNumberCount}>

        <h2>Quelques chiffres</h2>

        <div className={styles.content}>


          <div className={styles.block}>
            <h1>Nombre de licenciés</h1>
            <p>100</p>
          </div>

          <div className={styles.block}>
            <h1>Nombre de competiteurs</h1>
            <p>100</p>
          </div>

          <div className={styles.block}>
            <h1>Age du Club</h1>
            <p>100 ans</p>
          </div>
  
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default LandingPage;

