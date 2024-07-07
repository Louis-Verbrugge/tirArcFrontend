

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




  return (
    <div className="LandingPage">
      
        <div onClick={() => handleClick("competition") }>
          <SideImage 
          image = {image1}
          title = {"Competitions"}
          />
        </div>

        <div onClick={() => handleClick("inscription") }>
          <SideImage 
          image = {image1}
          title = {"inscription"}
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