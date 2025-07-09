import { useEffect, useRef } from 'react';
import styles from './MentionsLegales.module.scss'

function MentionLegales( { setRefPage } ) {

  const refPage = useRef(null);
  useEffect(() => {
      if (refPage.current) {
          setRefPage(refPage.current);
      }
  });

  
  return (
    <div className={styles.mentionsLegales} ref={refPage}>
      <header>
        <h1><span>Mentions Légales</span></h1>
      </header>
      <div className={styles.blockSection}>
        <section>
          <h2>1. Informations Éditeur</h2>
          <p>
            <strong>Nom de l'entreprise :</strong> Morphoz 2.0
          </p>
          <p>
            <strong>Forme juridique :</strong> Société par Actions Simplifiée
            (SAS)
          </p>
          <p>
            <strong>Capital social :</strong> 20 000,00 €
          </p>
          <p>
            <strong>Siège social :</strong> 50 rue de Paris, 59300 Valenciennes
          </p>
          <p>
            <strong>Adresse e-mail :</strong>{" "}
            <a href="mailto:contact@morphoz.fr">contact@morphoz.fr</a>
          </p>
          <p>
            <strong>Numéro SIRET :</strong> 814 551 909 00025
          </p>
          <p>
            <strong>Numéro de TVA intracommunautaire :</strong> FR20814551909
          </p>
        </section>
        <section>
          <h2>2. Directeur de la publication</h2>
          <p>Le directeur de la publication est : Louis Verbrugge.</p>
        </section>
        <section>
          <h2>3. Hébergement du site</h2>
          <p>
            <strong>Nom de l’hébergeur :</strong> OVH
          </p>
          <p>
            <strong>Adresse de l’hébergeur :</strong> 2 rue Kellermann, 59100
            Roubaix, France
          </p>
          <p>
            <strong>Numéro de téléphone :</strong> +33 (0)9 72 10 10 07
          </p>
        </section>
        <section>
          <h2>4. Propriété intellectuelle</h2>
          <p>
            Tous les éléments du site Morphoz Architecte (textes, images,
            graphismes, logo, etc.) sont protégés par des droits de propriété
            intellectuelle. Toute reproduction ou représentation totale ou
            partielle de ce site ou de l'un de ces éléments sans autorisation
            expresse de Morphoz Architecte est interdite.
          </p>
        </section>
        <section>
          <h2>5. Données personnelles</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 et
            au Règlement Général sur la Protection des Données (RGPD), les
            utilisateurs disposent d’un droit d’accès, de rectification et de
            suppression des données les concernant. Pour exercer ce droit, vous
            pouvez nous contacter à l’adresse e-mail mentionnée ci-dessus.
          </p>
        </section>
        <section>
          <h2>6. Cookies</h2>
          <p>
            Le site Morphoz Architecte utilise des cookies pour améliorer
            l'expérience utilisateur. Les utilisateurs peuvent configurer leur
            navigateur pour refuser les cookies, mais cela peut limiter certaines
            fonctionnalités du site.
          </p>
        </section>
        <section>
          <h2>7. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites. Morphoz
            Architecte n'assume aucune responsabilité quant au contenu de ces
            sites externes.
          </p>
        </section>
        <section>
          <h2>8. Droit applicable et attribution de juridiction</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, les tribunaux compétents seront ceux de Valenciennes,
            France.
          </p>
        </section>
        <section>
          <h2>9. Contact</h2>
          <p>
            Pour toute question relative aux mentions légales ou à d'autres
            informations sur le site, veuillez nous contacter à l'adresse e-mail
            mentionnée ci-dessus.
          </p>
        </section>
      </div>
    </div>
  );
}

export default MentionLegales;
