import { useEffect, useRef } from 'react';

import styles from './Presentation.module.scss';

function Presentation( {setRefPage} ) {

    const refPage = useRef(null);
    useEffect(() => {
        
        if (refPage.current) {
            setRefPage(refPage.current);
        }
    }, []);



    return (    
    <div className={styles.presentation} ref={refPage}>

        <h1>Qui sommes-nous ?</h1>

        <div className={styles.blockPresentation}>
            <div className={styles.text}>
                <span className={styles.textLarge}>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire.

                </span>
            </div>
            <div className={styles.image}>
                <img src='/image/membres/personnage1.jpg' alt='icon' className={styles.icon}/>
            </div>
        </div>
       

        <div className={styles.blockTeams}>
            <h1>Notre équipe</h1>

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
            </div>
        </div>
        <div className={styles.blockChiffres}>
            <h1>Quelques chiffres</h1>
            <div className={styles.chiffres}>

                <div className={styles.contentChiffre}> 

                    
                    <div className={styles.chiffre}>
                        <h2>56</h2>
                        <span className={styles.textLarge}>Adhérents</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>23</h2>
                        <span className={styles.textLarge}>Comptéiteurs</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>13</h2>
                        <span className={styles.textLarge}>Cible extlérieur</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>17</h2>
                        <span className={styles.textLarge}>Cible intérieur</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.blockTerrain}>

            <h1>Nos terrains</h1>

            <div className={styles.terrains}>
            
                
                <div className={styles.terrain}>
                    <div>
                        <h2>Terrain 1</h2>
                        <span className={styles.textLarge}>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire. 
                        </span>
                    </div>
                    <div className={styles.images}>
                        <img className={styles.firstImage} src='/image/membres/personnage1.jpg' alt='icon'/>
                        <img className={styles.secondImage} src='/image/membres/personnage1.jpg' alt='icon'/>
                        <img className={styles.thirdImage} src='/image/membres/personnage1.jpg' alt='icon'/>
                    </div>
                </div>
                <div className={styles.secondTerrain}>
                    <div>
                        <h2>Terrain 1</h2>
                        <span className={styles.textLarge}>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire. 
                        </span>
                    </div>
                    <div className={styles.images}>
                        <img className={styles.firstImage} src='/image/membres/personnage1.jpg' alt='icon'/>
                        <img className={styles.secondImage} src='/image/membres/personnage1.jpg' alt='icon'/>
                        <img className={styles.thirdImage} src='/image/membres/personnage1.jpg' alt='icon'/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.blockContact}>
            <h1>Nous contacter</h1>
            <div className={styles.contact}>
                <span className={styles.textLarge}>Pour nous contacter, vous pouvez nous envoyer un email à l'adresse suivante :
                    <a href='mailto:louvbg@gmail.com'>louvbg@gmail.com</a>
                </span>
            </div>
        </div>
    </div>

    );
}

export default Presentation;
