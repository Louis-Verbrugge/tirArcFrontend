
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';


import image1 from '../../../image/Plan.png'

import UseIsAdmin from "../../../_helpers/UseIsAdmin";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import { listeActualite } from '../../../data/news/news.js';
import { endPage } from '../../../_helpers/annim/endPage';

import styles from "./LandingPage.module.scss"



function LandingPage( {setRefPage, refFooter, annimChangePage, setAnnimChangePage, setChangeMemePage}) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  }, []);
  
  const navigate = useNavigate();

  function goToActualite(title) {
    title = title.replace(/-/g, '_')
                  .replace(/ /g, '-')
    
    endPage(navigate, refPage.current, refFooter, '/news/' + title, annimChangePage, setAnnimChangePage, setChangeMemePage);
    //navigate('/news/' + title);

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
          <div className={styles.text}>
            <span className={styles.textLarge}>Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, vvMot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de bienvenue, Mot de b</span>
          </div>
          <div className={styles.image}>
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
                {listeActualite.map((item, index) => (
                  <SwiperSlide key={index} className={styles.swiperSlide}>
                    <a onClick={() => goToActualite(item.title)}>
                      <img src={item.picture} alt={item.title} />
                    </a>
                  </SwiperSlide>
                ))}
                            
              </Swiper>


        </div>

        <div className={styles.blockEntrainement}>

          <div className={styles.terrain}>
            <div>
              <div className={styles.title}>
                <h3>LE DEROULEMENT D’UN ENTRAINEMENT</h3>
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
                <h3>LES COMPETITIONS</h3>
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

            <h1>Quelques chiffres</h1>
            <div className={styles.chiffres}>

                <div className={styles.contentChiffre}> 

                    
                    <div className={styles.chiffre}>
                        <h2>56</h2>
                        <span className={styles.textLarge}>Adhérents</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>23</h2>
                        <span className={styles.textLarge}>Comptéiteurs</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>13</h2>
                        <span className={styles.textLarge}>Cible extlérieur</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>17</h2>
                        <span className={styles.textLarge}>Cible intérieur</span>
                    </div>
                </div>
            </div>
        </div>


      </div>
    </div>
  );
}

export default LandingPage;

