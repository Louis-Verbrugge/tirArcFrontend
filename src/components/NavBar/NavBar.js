import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import styles from './NavBar.module.scss';

import { useRef } from "react";
import { getWidth } from "rsuite/esm/DOMHelper";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  const navBarRef = useRef(null);

  function changePage() {
    gsap.to(
      navBarRef.current,
      { width: "44px", duration: 1, onComplete: () => {

        gsap.to(
          navBarRef.current,
          { x: "-100px", duration: 1}
        )

      } },
    ); 
  }



  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
      <nav className={styles.navBar} >
        <div className={styles.content} ref={navBarRef} id="navBar">
          <p>Tir à l'arc Cysoing</p>
          <div className={styles.nav_icon}>

            <p onClick={() => changePage()}>News</p>

            <p>Qui sommes-nous ?</p>
            
            <p>Photos</p>
            
            <p>Contact</p> 


            {console.log("sddddddddddddddddddddddddddddddddddddddddddddddddddddddd 11")}
            {console.log(document.getElementById("navBar"))}
            {console.log("sddddddddddddddddddddddddddddddddddddddddddddddddddddddd 22")}

          </div>
        </div>
      </nav>
    
  );
}
