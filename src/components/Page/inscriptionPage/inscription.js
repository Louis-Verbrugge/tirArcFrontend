
import styles from "./inscription.module.css"

import iconTarget from "../../../image/iconTarget.svg"

function Inscription() {

  function sendMail() {
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    alert(firstName);
    fetch(`http://localhost:5000/sendEmail?firstName=${firstName}&lastName=${lastName}&age=${age}&email=${email}`, {
      method: 'POST',
    })
      .then(response => response.text())
      .then(data => {
        console.log("Succès" + data);
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
  }

  return (
    <div className={styles.inscription}>


      <div className={styles.blockInscription}>

      <div className={styles.form}>

        <img className={styles.iconTarget} src={iconTarget} ></img>
      
        <h1>Inscription</h1>

        <div className={styles.inputName}>
        <div className={styles.labelInput}>
          <label>First Name</label>
          <input id="firstName" type="text"></input>
        </div>

        <div className={styles.labelInput}>
          <label>Last Name</label>
          <input id="lastName" type="text"></input>
        </div>

        </div>

        <div className={styles.labelInput}>
        <label>Age</label>
        <input id="age" type="number"></input>
        </div>

        <div className={styles.labelInput}>
        <label>Email</label>
        <input id="email" type="text"></input>
        </div>

        <div className={styles.labelInput}>
        <label>Phone number</label>
        <input type="text"></input>
        </div>

        <button className={styles.btnSubmit} onClick={() => sendMail()} >Valider</button>

      </div>

      </div>
      
    

    </div>
    );
}

export default Inscription;
