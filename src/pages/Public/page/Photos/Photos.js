
import { useEffect, useRef } from "react";

import { allImage } from '../../../../data/news/news.js';


import styles from "./Photos.module.scss";


function Photos( { setRefPage } ) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  });


  return (
    <div className={styles.pagePhotos} ref={refPage}> 
      <h1>PHOTOS / VIDEOS !!!</h1>

      <div className={styles.gallery} >
        {allImage.map((src, index) => {
          let cardClass = styles.photoCard;

          if (index % 7 === 0) {
            cardClass += ` ${styles.star}`; // large + haut
          } else if (index % 5 === 0) {
            cardClass += ` ${styles.wide}`; // large uniquement
          } 

          return (
            <div key={index} className={cardClass}>
              <a href={src}><img src={src} alt={`photo-${index + 1}`} loading="lazy" /></a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
