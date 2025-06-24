

import styles from './Actualites.module.scss';

import React, { useState, useEffect, useRef } from 'react';

import Actualite from './Actualite/Actualite';

import { listeActualite } from '../../../../data/news/news.js'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



function Actualites( {setRefPage, refFooter, annimChangePage, setAnnimChangePage, setChangeMemePage} ) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  });


  function displayActualites() {

    console.log("displayActualites");
    console.log(refPage);

    return listeActualite.map((item, index) => {
       return (
              <Actualite 
                  key={index} 
                  refFooter={refFooter}
                  picture={item.picture} 
                  title={item.title} 
                  pageRef={refPage.current}
                  annimChangePage={annimChangePage}
                  setAnnimChangePage={setAnnimChangePage}
                  setChangeMemePage={setChangeMemePage}
                  
              />
          );
  });

  }


  
  return (
    <div className={styles.actualites} ref={refPage}> 

      <h1 className={styles.title}>les NEWS</h1>
          

      <div className={styles.blockActualites}>
        {displayActualites()}
      </div>



  </div>
  );
}

export default Actualites;
  