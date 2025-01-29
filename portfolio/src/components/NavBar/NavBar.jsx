

import styles from './NavBar.module.scss'

import endPage from '../../_helpers/annimation/endPage'
import { useNavigate } from 'react-router-dom';

function NavBar({ setRefPage, refPage}) {

  const navigate = useNavigate();


  const linkNavigate = [
    {name: '<Accueil />', path: '/'},
    {name: '<Projects />', path: '/projects'},
    {name: '<Skills />', path: '/skills'},
    {name: '<About Me />', path: '/aboutMe'}
  ]

  return (
    <div className={styles.navBar}>
        
        <div className={styles.navBarLogo}>
            <p>O</p>
        </div>
        
        <div className={styles.navBarText}>
            {
              linkNavigate.map((item, index) => {
                return <p key={index} onClick={() => {
                  console.log("JE CHNAGE DE PAGE HAHAA")
                  endPage(setRefPage, refPage, item.path, navigate)
                }} >{item.name}</p>
              })
            }
        </div>


    </div>
  )
}

export default NavBar