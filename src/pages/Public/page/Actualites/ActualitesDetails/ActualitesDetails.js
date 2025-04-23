

import styles from './ActualitesDetails.module.scss'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import { listeActualite } from '../../../../../data/news/news.js'



function ActualitesDetails( { pathImage }) {

  const props = useParams();

  const [loading, setLoading] = useState(true);


  const [titleActualite, setTitleActualite] = useState("")
  const [descriptionActualite, setDescriptionActualite] = useState("");


  const [listImage, setListImage] = useState([]);
  const [listImageLarge, setListImageLarge] = useState([]);


  function convertUrlToTitle(url) {
    return url
        .replace(/-/g, ' ')                // Remplace les tirets par des espaces
  }


  return (

    <div className={styles.actualitesDetails}> 



      <div className={styles.container}> 
        
        <div className={styles.returnToNews}><a href='/'>← Retour aux annonces</a></div>

        <div className={styles.blockTitle}>
          <h1>{convertUrlToTitle(props.titleActualites)}</h1>
          <p>Publié le {listeActualite.find(({ title }) => title === convertUrlToTitle(props.titleActualites)).date}</p>
        </div>

        <div className={styles.lineSplit} />

        <div className={styles.blockDescription}>

          <h2>Description:</h2>
          <p>{listeActualite.find(({ title }) => title === convertUrlToTitle(props.titleActualites)).description}</p>

        </div>  


        <div className={styles.blockImage}>
          {listeActualite.find(({ title }) => title === convertUrlToTitle(props.titleActualites)).allPircure.map((item, index) => {
            
            
            return (
              <img src={item} alt="img" className={styles.img1} key={index} />
            )
            

          })}
        </div>
          
        
        

      </div>

    </div>
  );

}

export default ActualitesDetails;
  