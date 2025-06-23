
import styles from "./Inscription.module.scss"
import { useEffect, useRef } from "react"
import pathApiAxios from "../../../../_helpers/PathApiAxios";
import emailjs from '@emailjs/browser';

import { Accordion, Placeholder } from 'rsuite';

function Inscription( {setRefPage} ) {

  const form = useRef();

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

    emailjs
      .send(
        'service_sdhgmo9',
        'template_v0bfzdi',
        {
          firstName: firstName,
          lastName: lastName,
          age: age,
          email: email
        },
        {
          publicKey: 'jbaU54yy7tj35utNZ',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }


  return (
    <div className={styles.inscription} ref={refPage}>

      <div className={styles.blockInscription}>
        <div className={styles.blockForm}>

          
          <h1>INSCRIPTION</h1>
          <div className={styles.form}>
            
            <div className={styles.inputName}>
              <div className={styles.labelInput}>
                <label>Nom</label>
                <input id="firstName" type="text"></input>
              </div>

              <div className={styles.labelInput}>
                <label>Prenom</label>
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
              <label>numéro de téléphone *</label>
              <input type="text"></input>
            </div>

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
              
                <li>Location d'arc: 25€</li>
                <li>Location d'une palette (dès 18 mètres): 13€</li>

              </ul>
            </div>   
          </div>  
        
        </div>

        <div className={styles.moreInfoHoraire}>

          <h3>
            Nos horaires: 
          </h3> 

          <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <Accordion >
                  <Accordion.Panel header="Lundi" eventKey={1}>
                    
                    <div className={styles.detailHoraire}>
                      <p>18h-19h30 pour les tireurs débutants</p>
                      <p>19h30-21h pour les tireurs confirmés</p>
                    </div>
                  </Accordion.Panel>
                  <Accordion.Panel header="Mercredi" eventKey={2}>
                    <div className={styles.detailHoraire}>
                      <p>18h-19h30 pour les tireurs débutants</p>
                      <p>19h30-21h pour les tireurs confirmés</p>
                    </div>
                  </Accordion.Panel>
                  <Accordion.Panel header="Vendredi" eventKey={3}>
                    <div className={styles.detailHoraire}>
                      
                      <p>19h-20h pour les tireurs débutants</p>
                      <p>20h-22h pour les tireurs confirmés</p>
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
