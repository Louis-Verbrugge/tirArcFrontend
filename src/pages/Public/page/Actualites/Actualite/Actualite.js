import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from './Actualite.module.scss';
import { useNavigate } from 'react-router-dom';
import { endPage } from '../../../../../_helpers/annim/endPage';

function Actualite({ picture, refFooter, title, pageRef, annimChangePage, setAnnimChangePage, setChangeMemePage }) {
  const navigate = useNavigate();

  function goToActualite(title) {
    title = title.replace(/-/g, '_')
                 .replace(/ /g, '-')
    
    endPage(navigate, pageRef, refFooter, '/news/' + title, annimChangePage, setAnnimChangePage, setChangeMemePage);
  }

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