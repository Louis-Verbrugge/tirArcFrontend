import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import styles from './NavBar.module.scss';


export function NavBar() {

  const navBarRef = useRef(null);
  
  //const [annimNavBar, annimNavBar] = useState(null);

  const timeFirstPartAnnim = .5;
  const timeSecondPartAnnim = .5;

  let annimNavBar = null;
  let annimOpenEtape = null; // 0 = Etape 0, 1 = Etape 1, 2 = Etape 2
  let annimCloseEtape = null; // 0 = Etape0 , 1 = Etape 1, 2 = Etape 2
  let whereIsScroll = 0;

  let annimOpenId = null;
  let annimCloseId = null;


  let blockNavBarHeight = 0;


  let test = 0;


  useEffect(() => {
    blockNavBarHeight = navBarRef.current.getBoundingClientRect().height
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        closeNavBar();
      } else {
        openNavBar();
      }
      lastScrollY = window.scrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  function closeNavBar() {

    if (whereIsScroll != 0) {
      whereIsScroll = 0;

      if (annimNavBar != null) {
        annimNavBar.kill(true);
        annimNavBar = null;
      }
      const animationId = Date.now();
      annimCloseId = animationId;
    
      if (annimOpenEtape == 2 || annimOpenEtape == null) {
        annimCloseEtape = 1
        annimNavBar = gsap.to(
          navBarRef.current,
          { width: "44px", height: "44px", duration: timeSecondPartAnnim, onComplete: () => {

            if (annimCloseId == animationId && annimCloseId >= annimOpenId) {
              annimCloseEtape = 2
              let possitionXNavBar = navBarRef.current.getBoundingClientRect().x; 
              annimNavBar = gsap.to(
                navBarRef.current,
                { x: -possitionXNavBar-200+"px", duration: timeFirstPartAnnim, onComplete: () => { annimNavBar=null } }
              );
            }
          }},
        );
      } else {
        // je joue la fin de l'animation
        if (annimCloseId == animationId) {
          annimCloseEtape = 2;
          let possitionXNavBar = navBarRef.current.getBoundingClientRect().x; 
          annimNavBar = gsap.to(
            navBarRef.current,
            { x: -possitionXNavBar-200+"px", duration: timeFirstPartAnnim, onComplete: () => { annimNavBar=null } }
          );
        }
      }
    }
  }

  function openNavBar() {

    if (whereIsScroll != 1) {
      
      whereIsScroll = 1;
      if (annimNavBar != null) {
        annimNavBar.kill(true);
        annimNavBar = null;
      }
      const animationId = Date.now();
      annimOpenId = animationId;

      if (annimCloseEtape == 2 || annimCloseEtape == null) {
        annimOpenEtape = 1
        annimNavBar = gsap.fromTo(
          navBarRef.current,
          { x: "-200px", width: "44px", height: "44px"},
          { x: "0px", duration: timeFirstPartAnnim, onComplete: () => {

            if (annimOpenId == animationId && annimOpenId >= annimCloseId) {
              annimOpenEtape = 2
              
              annimNavBar = gsap.to(
                navBarRef.current,
                { width: "auto", duration: timeSecondPartAnnim, onComplete: () => { annimNavBar=null } }
              );
            }
          } },
        ); 
      } else {
        // je joue la fin de l'animation
        if (annimOpenId == animationId) {
          annimOpenEtape = 2;
          annimNavBar = gsap.to(
            navBarRef.current,
            { width: "auto", duration: timeSecondPartAnnim, onComplete: () => { annimNavBar=null } }
          );
        }
      }
    }
  }

  useEffect(() => {
    openNavBar()
  }, []);


  return (
    <div className={styles.blockNavBar}>
      <nav className={styles.navBar}>
        <div className={styles.content} ref={navBarRef} id="navBar">
          <p>Tir à l'arc Cysoing</p>
          <div className={styles.nav_icon}>

            <p>News</p>

            <p>Qui sommes-nous ?</p>
            
            <p>Photos</p>
            
            <p>Contact</p> 


          </div>
        </div>
      </nav>
    </div>
    
  );
}
