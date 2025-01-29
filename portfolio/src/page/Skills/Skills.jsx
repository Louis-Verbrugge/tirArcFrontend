

import styles from './Skills.module.scss';
import { useEffect, useState, useRef } from 'react'
import startPage from '../../_helpers/annimation/startPage';

import { gsap } from 'gsap';

function Skills({ setRefPage, refPage}) {

  const pageSkills = useRef(null);


  
  const skillsCyber = ['/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg'];

  const skillsFontEnd = ['/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg'];

  const skillsBackEnd = ['/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg', '/vite.svg'];

  useEffect(() => {
    if (pageSkills.current) {
      startPage(pageSkills);
      setRefPage(pageSkills);

    }

    for (const elem of ['.annimationSkillsCyber', '.annimationSkillsFront', '.annimationSkillsBack']) {
      gsap.fromTo(elem, 
        { opacity: 0 }, 
        { opacity: 1, duration: 3, delay: 0.3,  stagger: { from: "edges", amount: 1.7 } }
      );
    }
  }, [pageSkills, refPage]);


  return (
    <div ref={pageSkills} className={styles.pageSkills}>    
        <h1>Skills</h1>

        <h2>Cybersécurité </h2>
        {
          skillsCyber.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <img class='annimationSkillsCyber' src={skill} alt={skill.name} />
            </div>
          )) 
        }

        <h2>Front-End</h2>
        {
          skillsFontEnd.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <img class='annimationSkillsFront' src={skill} alt={skill.name} />
            </div>
          ))
        }

        <h2>Back-end</h2>
        {
          skillsBackEnd.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <img class='annimationSkillsBack' src={skill} alt={skill.name} />
            </div>
          ))
        }

    </div>
  )
}

export default Skills;