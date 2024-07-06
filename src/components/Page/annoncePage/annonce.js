
import styles from './annonce.module.css';

function Annonce() {
  return (
    <div className={styles.annonce}>
      
        <div className={styles.post}>

            <h2 className={styles.titlePost}>Post 1</h2>
            <p className={styles.descriptionPost}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
        </div>

        <div className={styles.post}>

          <h2 className={styles.titlePost}>Post 1</h2>
          <p className={styles.descriptionPost}>blablablablablablablablablablablablablablablablablablablbalb</p>

        </div>
      
    </div>
  );
}

export default Annonce;
