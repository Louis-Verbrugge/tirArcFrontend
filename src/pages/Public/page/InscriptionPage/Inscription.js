
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
    let age = Number(document.getElementById("age").value);
    let commentaire = document.getElementById("commentaire").value;

    if (commentaire == "") {
      commentaire = "(pas de commentaire)"
    }

    
    let email;
    let phoneNumber;
    let lastNameGuardian;
    let nameGuardian;
    let ageGuardian;
    let emailGuardian;
    let phoneNumberGuardian;

    if (age < 10) {
      alert("Les inscriptions sont disponibles à partir de 10 ans")
    }

    if (age >= 18) {
      email = document.getElementById("email").value;
      phoneNumber = document.getElementById("phoneNumber").value;

      lastNameGuardian = "(il n'a pas de tuteur)"
      nameGuardian = "(il n'a pas de tuteur)"
      ageGuardian = "(il n'a pas de tuteur)"
      emailGuardian = "(il n'a pas de tuteur)"
      phoneNumberGuardian = "(il n'a pas de tuteur)"

    } else {
      email = "(pas de mail car il est mineur)"
      phoneNumber = "(pas de numéro car il est mineur)"

      lastNameGuardian = document.getElementById("lastNameGuardian").value;
      nameGuardian = document.getElementById("nameGuardian").value;
      ageGuardian = document.getElementById("ageGuardian").value;
      emailGuardian = document.getElementById("emailGuardian").value;
      phoneNumberGuardian = document.getElementById("phoneNumberGuardian").value;

    }



    if (age >= 18) {
      if (firstName === "" || lastName === "" || age === "" || email === "") {
        alert("Il manque des infos !")
        return;
      }
    } else {
      if (firstName === "" || lastName === "" || lastNameGuardian === "" || nameGuardian === "" || ageGuardian == "" ||emailGuardian == "") {
        alert("Il manque des infos !")
        return;
      }
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
          lastNameGuardian: lastNameGuardian,
          nameGuardian: nameGuardian,
          ageGuardian: ageGuardian,
          emailGuardian: emailGuardian,
          phoneNumberGuardian: phoneNumberGuardian,
          commentaire: commentaire
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

                <textarea className={styles.subject} id="commentaire" name="Commentaire" placeholder={'Commentaire'}/>

              </div>

              : null}





            { hasGuardian ?             
              <div className={styles.tuteur}>

                <h2>Tuteur</h2>

                <div className={styles.inputName}>
                  <div className={styles.labelInput}>
                    <label>Nom</label>
                    <input id="lastNameGuardian" type="text" required></input>
                  </div>

                  <div className={styles.labelInput}>
                    <label>Prenom</label>
                    <input id="nameGuardian" type="text" required></input>
                  </div>
                </div>

                <div className={styles.labelInput}>
                  <label>Age</label>
                  <input id="ageGuardian" type="number" required></input>
                </div>

                <div className={styles.labelInput}>
                  <label>Email</label>
                  <input id="emailGuardian" type="email" required></input>
                </div>


                <div className={styles.labelInput}>
                  <label>numéro de téléphone *</label>
                  <input id="phoneNumberGuardian" type="text"></input>
                </div>

                <textarea className={styles.subject} id="commentaire" name="Commentaire" placeholder={'Commentaire'}/>


              </div>
            : null }

            <p>*Retrouvez-nous au forum des associations de Cysoing le samedi 6 septembre de 14h à 18h.</p>
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
