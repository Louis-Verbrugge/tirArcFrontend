
import styles from "./Inscription.module.scss"
import logoTirArcCysoing from "../../../../image/logoTirArcCysoing.jpg"

import React, { useEffect, useRef } from "react"

import iconTarget from "../../../../image/iconTarget.svg"
import pathApiAxios from "../../../../_helpers/PathApiAxios";

function Inscription( {setRefPage} ) {

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

    //alert(firstName);
    fetch( pathApiAxios(`sendEmail?firstName=${firstName}&lastName=${lastName}&age=${age}&email=${email}`), {
      method: 'POST',
    })
      .then(response => response.text())
      .then(data => {
        console.log("Succès" + data);
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
  };



  return (
    <div className={styles.inscription} ref={refPage}>

      <a href="../" >
        <img id="returnLobby" src={logoTirArcCysoing}></img>
      </a>  

      <div className={styles.blockInscription}>
        <div className={styles.form}>
          
        
          <h1>INSCRIPTION</h1>

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
            <label>Phone number *</label>
            <input type="text"></input>
          </div>

          <button className={styles.btnSubmit} onClick={() => sendMail()}>Valid</button>

        </div>

      </div>

      <div className={styles.blockMoreInfo}>



        <div className={styles.moreInfo}>


          <h3>
            Inscription à partir du Mardi 11 septembre 2024
          </h3>
          

          <div>
            <ul>
              <li>Le montant des licences</li>

              <li>A partir de 10ans: 70€</li>
              <li>Pour les adultes:</li>
              <ul>
                <li>non-compititeurs: 90€</li>
                <li>compétiteurs: 100€</li>
              </ul>
              <li>Location d'arc 25€</li>
              <li>Location de palette obligatoire (dès 18m) 13€</li>

            </ul>
          </div>     
        
        </div>

        <div className={styles.moreInfo}>

          <h3>
            Nos horraires: 
          </h3> 


          <div className={styles.container}>
            <div className={styles.card}>
              <h5 className={styles.jour}>Lundi</h5>
              <div className={styles.detailHoraire}>
                <p>18h-19h30 pour les tireurs débutants</p>
                <p>19h30-21h pour les tireurs confirmés</p>
              </div>
            </div>

            <div className={styles.card}>
              <h5 className={styles.jour}>Mercredi</h5>
              <div className={styles.detailHoraire}>
                <p>18h-19h00 pour les tireurs débutants</p>
                <p>19h-20h pour les tireurs confirmés</p>
              </div>
            </div>

            <div className={styles.card}>
              <h5 className={styles.jour}>Vendredi</h5>
              <div className={styles.detailHoraire}>
                
                <p>19h-20h pour les tireurs débutants</p>
                <p>20h-22h pour les tireurs confirmés</p>
              </div>
            </div>
          </div>    

        </div>




          
      </div>


    </div>
    );
}

export default Inscription;
