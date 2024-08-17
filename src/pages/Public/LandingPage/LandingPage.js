
import { useNavigate } from 'react-router-dom';


import logoTirArcCysoing from "../../../image/logoTirArcCysoing.jpg"
import Cookies from 'js-cookie';

import styles from "./LandingPage.css"

import image1 from '../../../image/Plan.png'
import image2 from '../../../image/Plan.png'
import image3 from '../../../image/Plan.png'
import image4 from '../../../image/Plan.png'
import image5 from '../../../image/Plan.png'
import { useEffect } from "react"
import { ButtonToolbar } from "react-bootstrap"

import UseIsAdmin from "../../../_helpers/IsAdmin";


function LandingPage() {

  const navigate = useNavigate();

  const isAdmin = UseIsAdmin();


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

  const navagate = useNavigate();

  function handleClick(annee) {
    navagate(`/${annee}/`);
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


  function loginAdmin() {


    if (isAdmin) {
      navigate('/admin');
    }

    else {
      navigate('/login');
    }
  }

  function deconnection() {
    Cookies.remove('adminToken');
    window.location.reload();
  }


  return (
    <div className="landingPage">

      <a href="../" >
        <img id="returnLobby" src={logoTirArcCysoing}></img>
      </a>

      <div className="blockLogin">

        <img id="loginAdmin" src={logoTirArcCysoing}></img>

        <div className="navBarLogin">
          <p onClick={loginAdmin}href="/login">Admin</p>

          { isAdmin ? <p onClick={deconnection}>Deconnection</p> : null }

        </div>
      </div>


    
      <img className="backGroundImage" src={image2}></img>

      <div className="">
        <h1>Club St Sébastien</h1>
        {blockNavigation()}
      </div>


      {blockSite()}






    </div>
  );
}

export default LandingPage;

