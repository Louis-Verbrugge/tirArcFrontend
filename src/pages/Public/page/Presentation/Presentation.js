
import styles from './Presentation.module.scss';

function Presentation() {



  return (
    <div className={styles.presentation}>

        <h1>Qui sommes-nous ?</h1>

        <p>Nous sommes une association de passionnés de la course à pied, qui se sont réunis pour partager leur amour de ce sport et organiser des événements pour les coureurs de tous niveaux. Notre objectif est de promouvoir la course à pied en tant qu'activité saine et accessible à tous, tout en créant une communauté dynamique et solidaire.</p>

        <div className={styles.blockTarget}>
            <h2>Notre mission</h2>

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
