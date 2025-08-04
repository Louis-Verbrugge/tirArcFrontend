
import styles from "./Inscription.module.scss"
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

import SendMail from "../../../../components/popUp/SendMail/SendMail";

import { Accordion } from 'rsuite';
import 'rsuite/Accordion/styles/index.css';




function Inscription( {setRefPage} ) {

  const [sendMailPopUp, setSendMailPopUp] = useState(undefined);

  const [hasGuardian, setHasGuardian] = useState(false);

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  }, []);


  function sendMail() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    if (firstName === "" || lastName === "" || age === "" || email === "") {
      return;
    }

    emailjs
      .send(
        'service_sdhgmo9',
        'template_v0bfzdi',
        {
          firstName: firstName,
          name: lastName,
          age: age,
          email: email,
          phoneNumber: phoneNumber,
        },
        {
          publicKey: 'jbaU54yy7tj35utNZ',
        }
      )
      .then(() => {
          setSendMailPopUp(false);

        },
        (error) => {
          setSendMailPopUp(true);
        },
      );
  }


  return (
    <div className={styles.inscription} ref={refPage}>

      <SendMail setSendMailPopUp={setSendMailPopUp} anError={sendMailPopUp} />

      <div className={styles.blockInscription}>
        <div className={styles.blockForm}>

          
          <h1>INSCRIPTION</h1>
          <div className={styles.form}>
            
            <div className={styles.inputName}>
              <div className={styles.labelInput}>
                <label>Nom</label>
                <input id="firstName" type="text" required></input>
              </div>

              <div className={styles.labelInput}>
                <label>Prenom</label>
                <input id="lastName" type="text" required></input>
              </div>
            </div>

            <div className={styles.labelInput}>
              <label>Age</label>
              <input id="age" type="number" required onChange={() => {
                let age = document.getElementById("age").value
                if (10 <= age  && age <  18) {
                  setHasGuardian(true);
                }
                else {
                  setHasGuardian(false);
                }
              }}></input>
            </div>

            {!hasGuardian ?    
            
              <div> 
                <div className={styles.labelInput}>
                  <label>Email</label>
                  <input id="email" type="email" required></input>
                </div>

                <div className={styles.labelInput}>
                  <label>numéro de téléphone *</label>
                  <input id="phoneNumber" type="text"></input>
                </div>

                <textarea className={styles.subject} id="Commentaire" name="Commentaire" placeholder={'Commentaire'}/>

              </div>

              : null}





            { hasGuardian ?             
              <div className={styles.tuteur}>

                <h2>Tuteur</h2>

                <div className={styles.inputName}>
                  <div className={styles.labelInput}>
                    <label>Nom *</label>
                    <input id="firstName" type="text" required></input>
                  </div>

                  <div className={styles.labelInput}>
                    <label>Prenom *</label>
                    <input id="lastName" type="text" required></input>
                  </div>
                </div>

                <div className={styles.labelInput}>
                  <label>Age *</label>
                  <input id="age" type="number" required></input>
                </div>

                <div className={styles.labelInput}>
                  <label>Email</label>
                  <input id="email" type="email" required></input>
                </div>


                <div className={styles.labelInput}>
                  <label>numéro de téléphone *</label>
                  <input id="phoneNumber" type="text"></input>
                </div>

                <textarea className={styles.subject} id="Commentaire" name="Commentaire" placeholder={'Commentaire'}/>


              </div>
            : null }


            <button className={styles.btnSubmit} onClick={() => sendMail()}>VALIDER</button>

          </div>
        </div>

      </div>

      <div className={styles.blockMoreInfo}>



        <div className={styles.moreInfoTarif}>
          <div className={styles.containerInfoTarif}>

            <h3>
              TARIFS D'ADHESION
            </h3>

            <div>
              <ul>
                <li>Montant des licences</li>

                <li>A partir de 10 ans: 70€</li>
                <ul>
                  <li>Pour les adultes:</li>
                </ul>

                <li>non-compétiteurs: 90€</li>
                <li>compétiteurs: 100€</li>

                <ul>
                  <li>Complément:</li>
                </ul>
              
                <li>Location d'arc: 25€</li>
                <li>Achat d'une palette (dès 18 mètres): 13€</li>

              </ul>
            </div>   

            <p>*Possibilité de venir avec son matériel personnel</p>
          </div>  
        
        </div>

        <div className={styles.moreInfoHoraire}>

          <h3>
            Nos horaires: 
          </h3> 

          <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <Accordion >
                  <Accordion.Panel header="Lundi (Salle Paul Delécluse)" eventKey={1}>
                    
                    <div className={styles.detailHoraire}>
                      <p>18h00-19h30 pour les tireurs confirmés (avec matériel personnel)</p>
                    </div>
                  </Accordion.Panel>
                  <Accordion.Panel header="Mercredi (Salle William Penny Brookes)" eventKey={2}>
                    <div className={styles.detailHoraire}>
                      <p>18h00-19h00 pour les tireurs débutants</p>
                      <p>19h00-20h00 pour les tireurs confirmés</p>
                    </div>
                  </Accordion.Panel>
                  <Accordion.Panel header="Vendredi (Salle William Penny Brookes)" eventKey={3}>
                    <div className={styles.detailHoraire}>
                      
                      <p>19h00-20h00 pour les tireurs débutants (Ne pouvant pas venir le mercredi soir)</p>
                      <p>20h00-22h00 pour les tireurs confirmés</p>
                    </div>
                  </Accordion.Panel>
              </Accordion>
            </div>
          </div>

        </div>




          
      </div>


    </div>
    );
}

export default Inscription;
