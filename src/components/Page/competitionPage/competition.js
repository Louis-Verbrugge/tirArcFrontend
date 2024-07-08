

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import styles from './competition.module.css';


function Competition() {

  const navagate = useNavigate();

  function handleClick(annee) {
    navagate(`/competition/${annee}`);
  }


  return (
    <div className={styles.competition}>

      <h1 className={styles.title}>Nos Competitions:</h1>

      <div className={styles.blockCompetition}>

        <div onClick={() => handleClick("2023")} className={styles.carteCompetition}>
          <h2 className={styles.anneeCompetition}>2023-2024</h2>
        </div>

        <div onClick={() => handleClick("2022")}className={styles.carteCompetition}>
          <h2 className={styles.anneeCompetition}>2022-2023</h2>
        </div>

        <div onClick={() => handleClick("2021")}className={styles.carteCompetition}>
          <h2 className={styles.anneeCompetition}>2021-2022</h2>
        </div>

        <div onClick={() => handleClick("2020")}className={styles.carteCompetition}>
          <h2 className={styles.anneeCompetition}>2020-2021</h2>
        </div>

      </div>
      
    </div>
  );
}

export default Competition;
