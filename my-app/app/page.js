import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/images/poditfy-logo.png" // Remplacez ce logo par celui de votre podcast
          alt="Logo Poditfy"
          width={180}
          height={100}
          priority
        />
        
        <h1>Bienvenue sur Podify</h1>
        <br></br>
        <p>Découvrez vos podcasts préférés.</p>
<br></br>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://example.com/podcast-episode" // Remplacez par le lien vers un épisode du podcast
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.playButton}>Écouter un épisode</button>
          </a>
          <a
            href="https://example.com/about" // Lien vers une page à propos du podcast
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            En savoir plus
          </a>
        </div>
<br></br>
        <div className={styles.cardsContainer}>
          <h2>Épisodes récents</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image
                className={styles.cardImage}
                src="/images/episode1.jpg" // Image d'épisode
                alt="Épisode 1"
                width={300}
                height={200}
              />
              <h3>Épisode 1: Introduction au podcast</h3>
              <p>Découvrez l'univers de Poditfy et comment ça fonctionne.</p>
              <a href="/episode1" className={styles.cardButton}>Écouter l'épisode</a>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.cardImage}
                src="/images/episode2.jpg" // Image d'épisode
                alt="Épisode 2"
                width={300}
                height={200}
              />
              <h3>Épisode 2: Le monde du podcasting</h3>
              <p>Plongez dans l'univers du podcasting et ses enjeux.</p>
              <a href="/episode2" className={styles.cardButton}>Écouter l'épisode</a>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.cardImage}
                src="/images/episode3.jpg" // Image d'épisode
                alt="Épisode 3"
                width={300}
                height={200}
              />
              <h3>Épisode 3: Comment créer votre podcast</h3>
              <p>Apprenez à créer et diffuser votre propre podcast.</p>
              <a href="/episode3" className={styles.cardButton}>Écouter l'épisode</a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://example.com/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactez-nous
        </a>
        <a
          href="https://example.com/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Politique de confidentialité
        </a>
        <a
          href="https://example.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conditions d'utilisation
        </a>
      </footer>
    </div>
  );
}
