import { useEffect, useRef } from 'react';

import { startPage } from '../../../../_helpers/annim/startPage';
import styles from './Presentation.module.scss';

function Presentation( {setRefPage} ) {

    const refPage = useRef(null);
    useEffect(() => {
        
        if (refPage.current) {
            startPage(refPage.current);
            setRefPage(refPage.current);
        }
    }, []);



    return (    
    <div className={styles.presentation} ref={refPage}>

        <h1>Qui sommes-nous ?</h1>

        <p>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire.</p>

        <div className={styles.blockHistory}>
            <div className={styles.blockTarget}>
                <h2>Notre mission</h2>

                <div className={styles.targets}> 
                    
                    <div className={styles.target}>
                        <img src='/icons/icons8-bouclier-50.png' alt='icon' className={styles.icon}/>
                        <p>Protection</p>
                    </div>
                    <div className={styles.target}>
                        <img src='/icons/icons8-bouclier-50.png' alt='icon' className={styles.icon}/>
                        <p>Protection</p>
                    </div>
                    <div className={styles.target}>
                        <img src='/icons/icons8-bouclier-50.png' alt='icon' className={styles.icon}/>
                        <p>Protection</p>
                    </div>
                </div>
            

            </div>

            <div className={styles.ourLocation}>
                <h2>Nos Installations</h2>

                <div className={styles.blockLocation}>

                    <div className={styles.location}>
                        <img src='/image/landingPage.jpg' alt='icon' className={styles.icon}/>
                        <p>Protectiodsn</p>
                    </div>

                    <div className={styles.location}>
                        <img src='/image/landingPage.jpg' alt='icon' className={styles.icon}/>
                        <p>Protection</p>
                    </div>

                    <div className={styles.location}>
                        <img src='/image/landingPage.jpg' alt='icon' className={styles.icon}/>
                        <p>Protection</p>
                    </div>
                </div>


                <button>Rejoignez-nous</button>
            </div>
        </div>


        <div className={styles.blockTeams}>
            <h2>Notre équipe</h2>

            <div className={styles.teams}>
                <div className={styles.team}>
                    <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
                    <h4>John Doe</h4>
                    <p>Président</p>
                </div>
                <div className={styles.team}>
                    <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
                    <h4>John Doe</h4>
                    <p>Président</p>
                </div>
                <div className={styles.team}>
                    <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
                    <h4>John Doe</h4>
                    <p>Président</p>
                </div>
                <div className={styles.team}>
                    <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
                    <h4>John Doe</h4>
                    <p>Président</p>
                </div>
                <div className={styles.team}>
                    <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
                    <h4>John Doe</h4>
                    <p>Président</p>
                </div>
                <div className={styles.team}>
                    <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
                    <h4>John Doe</h4>
                    <p>Président</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Presentation;
