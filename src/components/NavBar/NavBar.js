import React, { useEffect, useRef, useState } from "react";

import { gsap } from 'gsap';

import { endPage } from "../../_helpers/annim/endPage";
import { startPage } from "../../_helpers/annim/startPage";

import styles from './NavBar.module.scss';
import { useNavigate } from "react-router-dom";



export function NavBar( { refPage, annimChangePage, setAnnimChangePage} ) {

  const navBarRef = useRef(null);
  const navigate = useNavigate();
  
  
  //const [annimNavBar, annimNavBar] = useState(null);

  const timeFirstPartAnnim = .5;
  const timeSecondPartAnnim = .5;

  let annimNavBar = null;
  let annimOpenEtape = null; // 0 = Etape 0, 1 = Etape 1, 2 = Etape 2
  let annimCloseEtape = null; // 0 = Etape0 , 1 = Etape 1, 2 = Etape 2
  let whereIsScroll = 1;

  let annimOpenId = null;
  let annimCloseId = null;
  let blockNavBarHeight;

  const [changeMemPage, setChangeMemPage] = useState(false);


  useEffect(() => {
    if (navBarRef.current) {
      const rect = navBarRef.current.getBoundingClientRect();
      const styles = getComputedStyle(navBarRef.current);
  
      const height = rect.height 
        - parseFloat(styles.paddingTop) 
        - parseFloat(styles.paddingBottom) 
        - parseFloat(styles.borderTopWidth) 
        - parseFloat(styles.borderBottomWidth);
  
      blockNavBarHeight = height + "px";
    }
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
          { width: blockNavBarHeight, height: blockNavBarHeight, duration: timeSecondPartAnnim, onComplete: () => {

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
          { x: "-200px", width: blockNavBarHeight, height: blockNavBarHeight},
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

  // useEffect(() => {
  //   openNavBar()
  // }, []);

  useEffect(() => {
    if (changeMemPage) {
      setChangeMemPage(false);
      
    } else {
      startPage(refPage, annimChangePage, setAnnimChangePage);
    }
  }, [refPage, changeMemPage]);


  return (
    <div className={styles.blockNavBar}>
      <nav className={styles.navBar}>
        <div className={styles.content} ref={navBarRef} id="navBar">
          <p onClick={() => endPage(navigate, refPage, '/', annimChangePage, setAnnimChangePage, setChangeMemPage)}>Tir à l'arc Cysoing</p>
          <div className={styles.nav_icon}>

            

            <p onClick={() => endPage(navigate, refPage, '/news', annimChangePage, setAnnimChangePage, setChangeMemPage)} >News</p>

            <p onClick={() => endPage(navigate, refPage, '/Qui-sommes-nous', annimChangePage, setAnnimChangePage, setChangeMemPage)}>Qui sommes-nous ?</p>
            
            <p onClick={() => endPage(navigate, refPage, '/', annimChangePage, setAnnimChangePage, setChangeMemPage)}>Photos</p>
            
            <p onClick={() => endPage(navigate, refPage, '/inscription', annimChangePage, setAnnimChangePage, setChangeMemPage)}>inscription</p> 

          </div>
        </div>
      </nav>
    </div>
    
  );
}
