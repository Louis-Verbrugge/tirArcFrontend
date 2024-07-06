

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
    //sendMail(annee);
    sendMaill(annee);
    navagate(`/competition/`);
  }


  function sendMaill(data) {
    alert("okokk");
    let testtt = "test louis :) :) :) :) :)";
    fetch(`http://localhost:5000/sendEmail?text=${testtt}`, {
      method: 'POST',
    })
      .then(response => response.text())
      .then(data => {
        console.log("Succès" + data);
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
    }


  return (
    <div className="LandingPage">
      
        <div onClick={() => handleClick("competition") }>
          <SideImage 
          image = {image1}
          title = {"Competitions"}
          />
        </div>

        <div onClick={() => handleClick("Inscriptions") }>
          <SideImage 
          image = {image1}
          title = {"Inscriptions"}
          />
        </div>

        <div onClick={() => handleClick("competition") }>
          <SideImage 
          image = {image1}
          title = {"Competitions"}
          />
        </div>
        
        <div onClick={() => handleClick("competition") }>

          <SideImage 
          image = {image1}
          title = {"hello Image 3"}
          />
        </div>


        <div onClick={() => handleClick("competition") }>
        
          <SideImage 
          image = {image1}
          title = {"hello Image 3"}
          />
        </div>

    </div>
  );
}

export default LandingPage;



/*
resolve: {
  fallback: {
    "path": require.resolve("path-browserify")
  }
}
  */