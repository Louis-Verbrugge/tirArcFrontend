import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './Actualite.module.scss';
import { useNavigate } from 'react-router-dom';
import { endPage } from '../../../../../_helpers/annim/endPage';

function Actualite({ picture, title, pageRef, annimChangePage, setAnnimChangePage, setChangeMemePage }) {
  const navigate = useNavigate();
  const [loadingImage, setLoadingImage] = useState(true);

  function goToActualite(title) {
    title = title.replace(/-/g, '_')
                 .replace(/ /g, '-')

    endPage(navigate, pageRef, '/news/' + title, annimChangePage, setAnnimChangePage, setChangeMemePage);
    //navigate('/news/' + title);

  }

  const handleImageLoad = () => {
    setLoadingImage(false);
  };

  const handleImageError = () => {
    console.error('Error loading image');
    setLoadingImage(false);
  };


  return (
    <div className={styles.actualite} onClick={() => goToActualite(title)}>
      <div className={styles.blockImage}>

        <img
          src={picture}
          alt="image"
        />
        
      </div>
      <div className={styles.containte}>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Actualite;