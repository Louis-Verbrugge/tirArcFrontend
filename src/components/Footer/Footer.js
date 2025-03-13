

import styles from './Footer.module.scss';

export function Footer() {


  return (
    <div className={styles.footer}>

        <div className={styles.top}/>

        <div className={styles.content}>

            <div className={styles.left}>

                <h2>Ready to get started ?</h2>

                <button>inscris toi dès maintenant !</button>

                <img src="https://www.facebook.com/Tir-a-larc-Cysoing-103450531470410/" alt="ffta"/>

            </div>

            <div className={styles.right}>

                <div className={styles.imageFirstCircle}>
                    <div className={styles.imageSecondCircle}>

                    </div>
                </div>

                <img src="/image/landingPage.jpg" alt="ffta"/>

                <div className={styles.socialMedia}>
                    <a href="https://www.facebook.com/Tir-a-larc-Cysoing-103450531470410/">
                        <img src="https://www.tiralarccysoing.fr/wp-content/uploads/2021/06/facebook.png" alt="facebook"></img>
                    </a>
                    <a href="https://www.instagram.com/tiralarccysoing/">
                        <img src="https://www.tiralarccysoing.fr/wp-content/uploads/2021/06/instagram.png" alt="instagram"></img>
                    </a>
                    <a href="https://www.youtube.com/channel/UC5v3m7Z3J9Mw7vPc7l8qyjg">
                        <img src="https://www.tiralarccysoing.fr/wp-content/uploads/2021/06/youtube.png" alt="youtube"></img>
                    </a>
                </div>
            </div>

            


        </div>

    </div>
  );
}
