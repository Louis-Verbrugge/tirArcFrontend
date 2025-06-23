

import { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';

export function Footer( { setRefFooter }) {

    const refPage = useRef(null);
    useEffect(() => {
        if (refPage.current) {
            setRefFooter(refPage.current);
        }
    }, []);


return (
    <div className={styles.footer} ref={refPage}>
        <div className={styles.top}/>
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h2>Ready to get started ?</h2>
                    <button>inscris toi dès maintenant !</button>
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
