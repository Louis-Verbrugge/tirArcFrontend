import { useEffect, useRef } from 'react';

import { imagePageQuiSommesNous } from '../../../../data/news/news.js';


import styles from './Presentation.module.scss';

function Presentation( {setRefPage} ) {

    const refPage = useRef(null);
    useEffect(() => {
        
        if (refPage.current) {
            setRefPage(refPage.current);
        }
    });


    return (    
    <div className={styles.presentation} ref={refPage}>

        <h1>Qui sommes-nous ?</h1>

        <div className={styles.blockPresentation}>
            <div className={styles.text}>
                <span className={styles.textLarge}>
                    Notre club pratique le tir à l’arc sur cible, discipline olympique. Il est affilié à la Fédération
                    Française de Tir à l’Arc. Tous les niveaux de tireur y sont représentés, du jeune débutant au
                    compétiteur confirmé ayant des titres régionaux ou nationaux. Nous étions 56 tireurs durant
                    la saison précédente 2024-2025. Toute l’année, le tir se déroule en salle puis en extérieur
                    l’été, sur un terrain aménagé à des distances de 18, 30 et 50 mètres. Les compétitions se
                    font à des distances de 18 mètres. Certaines sont adaptées aux jeunes débutants.
                    L’ambiance du club est conviviale et compte parmi ses membres de nombreux volontaires
                    prêts à vous accompagner. Nous avons hâte de vous rencontrer et de vous compter parmi
                    nous.

                </span>
            </div>
            <div className={styles.image}>
                <img src={imagePageQuiSommesNous.fondDecran} alt='icon' className={styles.icon}/>
            </div>
        </div>
       

        <div className={styles.blockTeams}>
            <h1>Notre équipe</h1>

            <div className={styles.teams}>
                <div className={styles.team}>
                    <img src={imagePageQuiSommesNous.bureau.image_1} alt='icon' className={styles.icon}/>
                    <h4>Ludovic VERBRUGGE</h4>
                    <p>Président</p>
                </div>
                <div className={styles.team}>
                    <img src={imagePageQuiSommesNous.bureau.image_2} alt='icon' className={styles.icon}/>
                    <h4>Gaëlle CORMAN</h4>
                    <p>Vice-présidente</p>
                </div>
                <div className={styles.team}>
                    <img src={imagePageQuiSommesNous.bureau.image_3} alt='icon' className={styles.icon}/>
                    <h4>Iris LANN</h4>
                    <p>Secrétaire</p>
                </div>
                <div className={styles.team}>
                    <img src={imagePageQuiSommesNous.bureau.image_4} alt='icon' className={styles.icon}/>
                    <h4>Arnaud HENNO</h4>
                    <p>Secrétaire adjoin</p>
                </div>
                <div className={styles.team}>
                    <img src={imagePageQuiSommesNous.bureau.image_5} alt='icon' className={styles.icon}/>
                    <h4>Christian BOURNONVILLE</h4>
                    <p>Trésorier</p>
                </div>
                <div className={styles.team}>
                    <img src={imagePageQuiSommesNous.bureau.image_6} alt='icon' className={styles.icon}/>
                    <h4>Bernard COULON</h4>
                    <p>Trésorier adjoint</p>
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
                        <h2>14</h2>
                        <span className={styles.textLarge}>Comptéiteurs</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>8</h2>
                        <span className={styles.textLarge}>Cible extlérieurs</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>15</h2>
                        <span className={styles.textLarge}>Cible intérieurs</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.blockTerrain}>

            <h1>Nos terrains</h1>

            <div className={styles.terrains}>
            
                
                <div className={styles.terrain}>
                    <div>
                        <h3>
                            Nos terrains en salle : Paul Delécluse / William Penny Brookes
                        </h3>
                        <span>
                            Ces deux salles multisports nous offrent la possibilité de tirer tous les lundis, mercredis et
                            vendredis soirs. Sont présentes dans ces deux espaces de nombreuses cibles faciles à
                            mettre en place. La seconde salle nous permet de stocker l’ensemble du matériel prêté par
                            le club, vous évitant ainsi de transporter vous même les arcs du club. Pour cette raison, la
                            salle Delécluse reste donc réservée aux archers détenant leur propre matériel mais l’autre
                            vous accueillera sans problèmes les autres jours d'entraînement. Les pièces sont
                            spacieuses et calmes. Elles nous sont exclusivement réservées sur nos créneaux
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
                        <h3>Notre terrain extérieur : “Les frères SCHOENDORFF”</h3>
                        <span>
                            Le club organise des séances de tir en extérieur sur le terrain “les frères SCHOENDORFF”
                            dès le retour des beaux jours, du mois de mai au début du mois d’octobre. Il est idéal pour
                            les archers autonomes et ayant leur propre matériel. Bien que les séances s’organisent
                            majoritairement aux mêmes heures que les entraînements en salle, ces dernières peuvent
                            lors des plus beaux jours, se tenir de 17h30 à bien plus tard. Sept cibles y sont mises à
                            disposition : 1 à 18 m, 4 à 30 m et 2 à 50 m. Des cibles 3D sont également présentes pour
                            permettre des entraînements à des distances plus aléatoires.
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
                    <a href='mailto:cysoing.arc@gmail.com'>cysoing.arc@gmail.com</a>
                </span>
            </div>
        </div>
    </div>

    );
}

export default Presentation;
