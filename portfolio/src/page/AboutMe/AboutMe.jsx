

import styles from './AboutMe.module.scss';
import { useEffect, useRef } from 'react';
import startPage from '../../_helpers/annimation/startPage';

function AboutMe({ setRefPage, refPage}) {

  const pageAboutMe = useRef(null);

  useEffect(() => {
    if (pageAboutMe.current) {
      startPage(pageAboutMe);
      setRefPage(pageAboutMe);

    }
  }, [pageAboutMe, refPage]);

  return (
    <div ref={pageAboutMe}>    
        <h1>About Me</h1>
    </div>
  )
}

export default AboutMe;