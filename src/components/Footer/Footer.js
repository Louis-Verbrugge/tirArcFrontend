

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { endPage } from '../../_helpers/annim/endPage';
import styles from './Footer.module.scss';

export function Footer( { setRefFooter, pageRef, refFooter, annimChangePage, setAnnimChangePage, setChangeMemePage }) {

    const navigate = useNavigate();





    const refPage = useRef(null);
    useEffect(() => {
        if (refPage.current) {
            setRefFooter(refPage.current);
        }
    }, []);


  function goToActualite() {
    
    // recup le path de la page
    const path = window.location.pathname;
    const pathArray = path.split("/");
    const pathPage = pathArray[pathArray.length - 2];
    
    console.log("Changement de page: " + pathPage + " -> /inscription/");
    console.log(pathArray)
    console.log(pathArray[pathArray.length - 2], pathArray.length - 2);
    
    if (pathPage === 'inscription') {
        // Si on est déjà sur la page d'inscription, on recharge la page
        window.scrollTo(0, 0);
        window.location.reload();
        return;
    }
    else {
        endPage(navigate, pageRef, refFooter, '/inscription/', annimChangePage, setAnnimChangePage, setChangeMemePage);

    }

    
  }


    return (
    <div className={styles.footer} ref={refPage}>
        <div className={styles.top}/>
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h2>Ready to get started ?</h2>
                    <button onClick={() => goToActualite()}>inscris toi dès maintenant !</button>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageFirstCircle}>
                        <div className={styles.imageSecondCircle}>
                        </div>
                    </div>
                    <img src="/image/landingPage.jpg" alt="ffta"/>
                </div>
            </div>

            <div className={styles.bottom}>
                <img src="/image/logoTirArcCysoing.jpg" alt="ffta"/>
                <div className={styles.contact}>
                    <p>© 2025 Tir à l'Arc de Cysoing. Tous droits réservés.</p>                        
                    <div className={styles.socialMedia}>
                        <a href="https://www.facebook.com/Tir-a-larc-Cysoing-103450531470410/">
                            <img src="/image/icons8-facebook-circled.svg" alt="facebook"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        


    </div>
  );
}
