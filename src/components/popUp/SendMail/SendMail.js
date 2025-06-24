
import React, { useEffect } from "react";
import styles from './SendMail.module.scss'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const { useRef } = require('react');

gsap.registerPlugin(useGSAP);

function SendMail( { anError } ) {

  const annimationSendMail = useRef();

  useEffect(() => {
    function playAnnimationPopUp() {
      gsap.fromTo(annimationSendMail.current,
        { y: -300 }, 
        { y: 0, duration: 2, onComplete: () => {
            gsap.to(annimationSendMail.current, { y: -300, duration: 2, delay: 2, onComplete: () => {
              //window.location.reload();
          }});
        }
      });
    }
    playAnnimationPopUp();
  }, []);


  return (
    <div className={styles.sendMail} ref={annimationSendMail} style={anError ? {background:'rgb(219, 31, 46, .95)'} : {background:'rgb(95, 175, 57, .95)'} } >

      {anError ? 
        <h5>Il y a eu une erreur lors de l'envoi du mail veuillez réesseayer ultérieurement</h5>: 
        <h5>Mail envoyé avec succès 👍</h5>
      }
      
    </div>
  );
}

export default SendMail;
