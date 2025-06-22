import React, { useEffect, useRef, useState } from "react";

import { gsap } from 'gsap';

import { endPage } from "../../_helpers/annim/endPage";
import { startPage } from "../../_helpers/annim/startPage";

import styles from './NavBar.module.scss';
import { useNavigate } from "react-router-dom";




export function NavBar( { refPage, annimChangePage, setAnnimChangePage, changeMemePage, setChangeMemePage} ) {

  const navBarRef = useRef(null);
  const navigate = useNavigate();

  const burgerNavRef = useRef(null);
  const iconeBurgerRef = useRef(null);
  let menuClose = false;
  const timeAnnimation = 0.5;

  let isClickInside;
  let isCLickBurgerMenu;



  const timeFirstPartAnnim = .5;
  const timeSecondPartAnnim = .5;

  let annimNavBar = null;
  let annimOpenEtape = null; // 0 = Etape 0, 1 = Etape 1, 2 = Etape 2
  let annimCloseEtape = null; // 0 = Etape0 , 1 = Etape 1, 2 = Etape 2
  let whereIsScroll = 1;

  let annimOpenId = null;
  let annimCloseId = null;
  let blockNavBarHeight;



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


  document.addEventListener('click', (event) => {
      if (burgerNavRef.current && iconeBurgerRef.current) {
          isClickInside = burgerNavRef.current.contains(event.target);
          isCLickBurgerMenu = iconeBurgerRef.current.contains(event.target);

          if (!isClickInside && burgerNavRef.current.style.display === 'flex' && !isCLickBurgerMenu) {
              closeMenuBurger();
          }
      }
  });


  const handleScroll = () => {
    if (burgerNavRef.current.style.display === 'flex') {
        closeMenuBurger();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  function toggleMenu() {
    if (burgerNavRef.current && burgerNavRef.current.style.display !== 'none') {
      if (burgerNavRef.current.style.display === 'flex') {
        closeMenuBurger();
      } else {
        openMenuBurger();
      }
    } else {
      openMenuBurger();
    }
  }

  function closeMenuBurger() {
    if (!menuClose && burgerNavRef.current) {
      gsap.fromTo(
          burgerNavRef.current,
          { x: '0%' },
          {
              x: '-100%',
              duration: timeAnnimation,
              onStart: () => (menuClose = true),
              onComplete: () => {
                  burgerNavRef.current.style.display = 'none';
                  menuClose = false;
              },
          }
      );
    }
  }

  function openMenuBurger() {
    if (burgerNavRef.current) {
        burgerNavRef.current.style.display = 'flex';
        gsap.fromTo(
            burgerNavRef.current,
            { x: '-100%' },
            { x: '0%', duration: timeAnnimation }
        );
    } else {
        console.warn('GSAP target not found.');
    }
  }



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

  useEffect(() => {
    if (changeMemePage) {
      setChangeMemePage(false);
      
    } else {
      startPage(refPage, annimChangePage, setAnnimChangePage);
    }
  }, [refPage, changeMemePage]);


  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenuBurger;

  return (
    <div className={styles.blockNavBar}>

    
      <nav className={styles.navBar}>
        <div className={styles.content} ref={navBarRef} id="navBar">
          <p onClick={() => endPage(navigate, refPage, '/', annimChangePage, setAnnimChangePage, setChangeMemePage)}>Tir à l'arc Cysoing</p>
          <div className={styles.nav_icon}>

            

            <p onClick={() => endPage(navigate, refPage, '/news', annimChangePage, setAnnimChangePage, setChangeMemePage)}>News</p>

            <p onClick={() => endPage(navigate, refPage, '/Qui-sommes-nous', annimChangePage, setAnnimChangePage, setChangeMemePage)}>Qui sommes-nous ?</p>
            
            <p onClick={() => endPage(navigate, refPage, '/photos', annimChangePage, setAnnimChangePage, setChangeMemePage)}>Photos</p>
            
            <p onClick={() => endPage(navigate, refPage, '/inscription', annimChangePage, setAnnimChangePage, setChangeMemePage)}>inscription</p> 

          </div>
        </div>
      </nav>

      <nav className={styles.burgerNav}>
          <img
              onClick={() => toggleMenu()}
              src={'/icons/burgerMenu.svg'}
              alt='logo burger'
              id='iconeBurger'
              ref={iconeBurgerRef}
          />
          <div className={styles.containt} id='burgerNav' ref={burgerNavRef}>
              <a onClick={() => {
                  closeMenuBurger();
                  endPage(navigate, refPage, '/', annimChangePage, setAnnimChangePage, setChangeMemePage);
              }}>
                Tir à l'arc Cysoing
              </a>
              <a onClick={() => {
                  closeMenuBurger();
                  endPage(navigate, refPage, '/news', annimChangePage, setAnnimChangePage, setChangeMemePage);
              }}>
                News
              </a>
              <a onClick={() => {
                  closeMenuBurger();
                  endPage(navigate, refPage, '/Qui-sommes-nous', annimChangePage, setAnnimChangePage, setChangeMemePage);
              }}>
                Qui sommes-nous ?
              </a>
              <a onClick={() => {
                  closeMenuBurger();
                  endPage(navigate, refPage, '/photos', annimChangePage, setAnnimChangePage, setChangeMemePage);
              }}>
                Photos
              </a>
              <a onClick={() => {
                  closeMenuBurger();
                  endPage(navigate, refPage, '/inscription', annimChangePage, setAnnimChangePage, setChangeMemePage);
              }}>
                inscription
              </a>
          </div>
      </nav>

    </div>
    
  );
}