

import styles from './ActualitesDetails.module.scss'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useRef } from 'react';

import { listeActualite } from '../../../../../data/news/news.js'


import { endPage } from '../../../../../_helpers/annim/endPage';

function ActualitesDetails( { setRefPage, refFooter, annimChangePage, setAnnimChangePage, setChangeMemePage }) {

  const navigate = useNavigate();

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  });

  const props = useParams();

  function convertUrlToTitle(url) {
    return url
        .replace(/-/g, ' ');
  }


  return (

    <div className={styles.actualitesDetails} ref={refPage}> 



      <div className={styles.container}> 
        
        <div className={styles.returnToNews}><p onClick={() => {
          endPage(navigate, refPage.current, refFooter, '/news', annimChangePage, setAnnimChangePage, setChangeMemePage);
        }}>← Retour aux annonces</p></div>

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
  