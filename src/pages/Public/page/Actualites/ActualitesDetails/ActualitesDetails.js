

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



function ActualitesDetails( { pathImage }) {

  const props = useParams();

  const [loading, setLoading] = useState(true);


  const [titleActualite, setTitleActualite] = useState("")
  const [descriptionActualite, setDescriptionActualite] = useState("");


  const [listImage, setListImage] = useState([]);
  const [listImageLarge, setListImageLarge] = useState([]);


  function convertUrlToTitle(url) {
    return url
        .replace(/-/g, '%20')                // Remplace les tirets par des espaces
        .replace(/_/g, '-');                 // Remplace les underscores par des espaces
  }




  return (

    <div className={styles.actualitesDetails}> 

      <>

          <div className={styles.container}> 
            <h1><span>{titleActualite}</span></h1>
            <h4>{descriptionActualite}</h4>
            
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
            <h1>TEST</h1> 

          </div>


          <div className={styles.pictureActualites}> 
            
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}

              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // when window width is >= 1500px
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 5
                },
                // when window width is >= 900px and < 1500px
                900: {
                  slidesPerView: 2,
                  spaceBetween: 0
                },
                // when window width is < 900px
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
              }}
              modules={[FreeMode, Pagination]}
              className={styles.swiper}
            >
      
            {
              listImage.map((item, index) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={index}>
                    <a href={pathImage} >
                        <img src={pathImage} alt="img" className={styles.img1} />
                    </a>
                      
                  </SwiperSlide>
                )
              })
            }
            
            </Swiper>
          </div>
        </>

  </div>
  );

}

export default ActualitesDetails;
  