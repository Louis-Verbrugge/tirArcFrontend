

import  SideImage from "./SideImage"

import styles from "./LandingPage.css"

import image1 from '../../image/Plan.png'
import image2 from '../../image/Plan.png'
import image3 from '../../image/Plan.png'
import image4 from '../../image/Plan.png'
import image5 from '../../image/Plan.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react"


function LandingPage() {

  const navagate = useNavigate();

  function handleClick(annee) {
    navagate(`/${annee}/`);
  }


  function blockSite() {

  }




  return (
    <div className="LandingPage">

      
      <div className="  ">

        <h1>Club St Sébastien</h1>
        <div className="navigation">
          <a href="inscription">Inscription</a>
          <a href="competition">Competition</a>
          <a>qui somme nous ?</a>
          <a>Photo/video</a>
          <a>Evenement</a>
        </div>
      </div>


      <div className="blockBleu">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </p>
        <img src={image1}></img>

      </div>
      <div className="blockJaune"></div>
      <div className="blockRouge"></div>





    </div>
  );
}

export default LandingPage;

