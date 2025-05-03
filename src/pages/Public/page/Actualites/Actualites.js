

import styles from './Actualites.module.scss';

import React, { useState, useEffect, useRef } from 'react';

import Actualite from './Actualite/Actualite';

import axios from 'axios';

import { listeActualite } from '../../../../data/news/news.js'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



function Actualites( {setRefPage} ) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  }, []);




  const [structData, setStructData] = useState({});
  const [loadingStructData, setLoadingStructData] = useState(true);
  


  function displayActualites() {

    return listeActualite.map((item, index) => {
       return (
              <Actualite 
                  key={index} 
                  picture={item.picture} 
                  title={item.title} 
                  description={item.petite_description} 
              />
          );
  });

  }


  
  return (
    <div className={styles.actualites} ref={refPage}> 

      <h1 className={styles.title}>{structData.titre_de_la_page} <span>{structData.mot_bleu_titre_de_la_page}</span></h1>
          

      <div className={styles.blockActualites}>
        {displayActualites()}
      </div>



  </div>
  );
}

export default Actualites;
  