
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';


import image1 from '../../../image/Plan.png'

import UseIsAdmin from "../../../_helpers/UseIsAdmin";

import GetDataUser from '../../../_helpers/GetDataUser';

import { NumberCount } from '../../../components/NumberCount/NumberCount';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import styles from "./LandingPage.module.scss"



function LandingPage( {setRefPage}) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  }, []);
  

  const navigate = useNavigate();

  const { isAdmin, login } = UseIsAdmin();






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


  return (

    <div ref={refPage}>
      <div className={styles.pagePresentation}
        style={{ backgroundImage: `url(/image/landingPage.jpg)` }}>
        <img className={styles.presentationImage} src="/morphoz.png" alt="" />
      </div>
        
      <div className={styles.landingPage}> 





        <h1>Qui sommes-nous ?</h1>

        <div className={styles.blockPresentation}>
          <div>
            <span className={styles.textLarge}>Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, vvMot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de b</span>
          </div>
          <div>
            <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
          </div>
        </div>

        <h1>LES NEWS</h1>

        <div className={styles.blockNews}>

              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                speed={14000}
                autoplay={{
                  delay: 0, 
                  disableOnInteraction: false,
                }}
                freeMode={{
                  enabled: true,
                  momentum: false,
                  sticky: false,
                }}

                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  1500: {
                    slidesPerView: 3,
                    spaceBetween: 5
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 0
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className={styles.swiper}
              >
        
                <SwiperSlide className={styles.swiperSlide}>
                  <a>
                    <img src={"/image/landingPage.jpg"} alt="img" />  
                  </a>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <a>
                    <img src={"/image/landingPage.jpg"} alt="img" />  
                  </a>
                </SwiperSlide>
                      
                <SwiperSlide className={styles.swiperSlide}>
                  <a>
                    <img src={"/image/landingPage.jpg"} alt="img" />  
                  </a>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <a>
                    <img src={"/image/landingPage.jpg"} alt="img" />  
                  </a>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <a>
                    <img src={"/image/landingPage.jpg"} alt="img" />  
                  </a>
                </SwiperSlide>
                      
                <SwiperSlide className={styles.swiperSlide}>
                  <a>
                    <img src={"/image/landingPage.jpg"} alt="img" />  
                  </a>
                </SwiperSlide>
              
              
              </Swiper>


        </div>

        <div className={styles.blockEntrainement}>

          <div className={styles.terrain}>
            <div>
              <div className={styles.title}>
                <h1>Terrain 1</h1>
              </div>
              <span className={styles.textLarge}>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire. 
              </span>
            </div>
            <div className={styles.images}>
              <img className={styles.firstImage} src='/image/membres/personnage1.jpg' alt='icon'/>
              <img className={styles.secondImage} src='/image/membres/personnage1.jpg' alt='icon'/>
              <img className={styles.thirdImage} src='/image/membres/personnage1.jpg' alt='icon'/>
            </div>
          </div>

          <div className={styles.secondTerrain}>
            <div>
              <div className={styles.title}>
                <h1>Terrain 1</h1>
              </div>   
              <span className={styles.textLarge}>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire. 
              </span>
            </div>
            <div className={styles.images}>
              <img className={styles.firstImage} src='/image/membres/personnage1.jpg' alt='icon'/>
              <img className={styles.secondImage} src='/image/membres/personnage1.jpg' alt='icon'/>
              <img className={styles.thirdImage} src='/image/membres/personnage1.jpg' alt='icon'/>
            </div>
          </div>
        </div>



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


      </div>
    </div>
  );
}

export default LandingPage;

