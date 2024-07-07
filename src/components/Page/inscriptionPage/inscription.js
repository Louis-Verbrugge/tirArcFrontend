
import styles from "./inscription.module.css"

function Inscription() {
  return (
    <div className={styles.inscription}>


      <div className={styles.blockInscription}>

        <div className={styles.form}>

          <h1>Inscription</h1>
      
          <h1>Inscription</h1>

          <div className={styles.inputName}>
            <input type="text" placeholder="Nom"></input>
            <input type="text" placeholder="Prenom"></input>

          </div>


          <input type="number" placeholder="Age"></input>

          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Phone number"></input>

          <button className={styles.btnSubmit} >Valider</button>

        </div>

      </div>
        
  

    </div>
  );
}

export default Inscription;
