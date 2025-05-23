import styles from "./Photos.module.scss";

function Photos() {
  const photos = Array.from({ length: 150 }, () => "/image/landingPage.jpg");

  return (
    <div className={styles.gallery}>
      {photos.map((src, index) => {
        let cardClass = styles.photoCard;

        if (index % 7 === 0) {
          cardClass += ` ${styles.star}`; // large + haut
        } else if (index % 5 === 0) {
          cardClass += ` ${styles.wide}`; // large uniquement
        } 

        return (
          <div key={index} className={cardClass}>
            <a href={src}><img src={src} alt={`photo-${index + 1}`} loading="lazy" /></a>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
