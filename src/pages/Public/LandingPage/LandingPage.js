
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import { listeActualite, imagePageHome } from '../../../data/news/news.js';
import { endPage } from '../../../_helpers/annim/endPage';



import styles from "./LandingPage.module.scss"



function LandingPage( {setRefPage, refFooter, annimChangePage, setAnnimChangePage, setChangeMemePage}) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  });
  
  const navigate = useNavigate();

  function goToActualite(title) {
    title = title.replace(/-/g, '_')
                  .replace(/ /g, '-')
    
    endPage(navigate, refPage.current, refFooter, '/news/' + title, annimChangePage, setAnnimChangePage, setChangeMemePage);
    //navigate('/news/' + title);

  }


  return (

    <div ref={refPage}>
      <div className={styles.pagePresentation}
        style={{ backgroundImage: `url('${imagePageHome.fondDecran.replaceAll(' ', '%20')}')` }}>
        <img className={styles.presentationImage} src="/cysoing_tir.png" alt="" />
      </div>
        
      <div className={styles.landingPage}> 

        <h1>Qui sommes-nous ?</h1>

        <div className={styles.blockPresentation}>
          <div className={styles.text}>
            <span className={styles.textLarge}>
              Notre club pratique le tir à l’arc sur cible, discipline olympique. Il est affilié à la Fédération
              Française de Tir à l’Arc. Tous les niveaux de tireur y sont représentés, du jeune débutant au
              compétiteur confirmé ayant des titres régionaux ou nationaux. Nous étions 56 tireurs durant
              la saison précédente 2024-2025. Toute l’année, le tir se déroule en salle puis en extérieur
              l’été, sur un terrain aménagé à des distances de 18, 30 et 50 mètres. Les compétitions se
              font à des distances de 18 mètres. Certaines sont adaptées aux jeunes débutants.
              L’ambiance du club est conviviale et compte parmi ses membres de nombreux volontaires
              prêts à vous accompagner. Nous avons hâte de vous rencontrer et de vous compter parmi
              nous.
            </span>
          </div>
          <div className={styles.image}>
            <img src={imagePageHome.quiSommesNous} alt='icon' className={styles.icon}/>
          </div>
        </div>

        <h1>LES NEWS</h1>

        <div className={styles.blockNews}>

              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                speed={14000}
                autoplay={{
                  delay: 0, 
                  disableOnInteraction: false,
                }}
                freeMode={{
                  enabled: true,
                  momentum: false,
                  sticky: false,
                }}

                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  1500: {
                    slidesPerView: 3,
                    spaceBetween: 5
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 0
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className={styles.swiper}
              >
                {listeActualite.map((item, index) => (
                  <SwiperSlide key={index} className={styles.swiperSlide}>
                    <a onClick={() => goToActualite(item.title)}>
                      <img src={item.picture} alt={item.title} />
                    </a>
                  </SwiperSlide>
                ))}
                            
              </Swiper>


        </div>

        <div className={styles.blockEntrainement}>

          <div className={styles.terrain}>
            <div>
              <div className={styles.title}>
                <h3>LE DÉROULEMENT D’UN ENTRAINEMENT</h3>
              </div>
              <span className={styles.textLarge}>
                Dès le début de l’année, nous vous apprenons à respecter les règles de sécurité, où
                récupérer votre matériel, comment le monter puis à le manipuler. Une fois cela fait, vous
                pouvez vous exercer à tirer à 10m puis à 18m avec un viseur. Progressivement, la taille de
                votre blason se réduira. Notre objectif est de vous donner les clés pour vous permettre
                d’évoluer en toute autonomie dans la discipline. Vous êtes formés au tir avec bienveillance
                par les bénévoles du club ainsi que sous la supervision générale d’un entraîneur. Pour vous
                challenger, tous les premiers mercredis et vendredi du mois, vous aurez la possibilité de
                passer une petite évaluation notée. Ce “passage de flèche” vous permettra si votre objectif
                de point est atteint, de changer la taille de votre blason
              </span>
            </div>
            <div className={styles.images}>
              <img className={styles.firstImage} src={imagePageHome.deroulementEntrainement.image_1} alt='icon'/>
              <img className={styles.secondImage} src={imagePageHome.deroulementEntrainement.image_2} alt='icon'/>
              <img className={styles.thirdImage} src={imagePageHome.deroulementEntrainement.image_3} alt='icon'/>
            </div>
          </div>

          <div className={styles.secondTerrain}>
            <div>
              <div className={styles.title}>
                <h3>LES COMPÉTITIONS</h3>
              </div>   
              <span className={styles.textLarge}>
                Les couleurs de notre club sont largement représentées lors des compétitions. Nous
                participons régulièrement à des rencontres officielles de la Fédération Française de Tir à
                l’Arc (FFTA) ainsi qu’à des concours loisirs. Il n’est pas nécessaire d’avoir une licence de
                compétiteur pour participer à ces derniers. Nous nous rendons généralement dans les villes
                qui les hébergent dans un assez large périmètre autour de Cysoing. Durant la période
                hivernale, elles se déroulent en salle. Les cibles sur lesquelles nous tirons lors de
                l’ensemble de ces évènements sont majoritairement des blasons de 40cm ou des trispots.
                Mais dès le retour des beaux jours, nous participons à des concours 3D en extérieur
              </span>
            </div>
            <div className={styles.images}>
              <img className={styles.firstImage} src={imagePageHome.competition.image_1} alt='icon'/>
              <img className={styles.secondImage} src={imagePageHome.competition.image_2} alt='icon'/>
              <img className={styles.thirdImage} src={imagePageHome.competition.image_3} alt='icon'/>
            </div>
          </div>
        </div>



        <div className={styles.infoNumberCount}>

            <h1>Quelques chiffres</h1>
            <div className={styles.chiffres}>

                <div className={styles.contentChiffre}> 

                    
                    <div className={styles.chiffre}>
                        <h2>56</h2>
                        <span className={styles.textLarge}>Adhérents</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>14</h2>
                        <span className={styles.textLarge}>Compétiteurs</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>8</h2>
                        <span className={styles.textLarge}>Cibles extérieures</span>
                    </div>
                    <div className={styles.chiffre}>
                        <h2>15</h2>
                        <span className={styles.textLarge}>Cibles intérieures</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

