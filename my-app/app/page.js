import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/poditfy-logo.svg" // Remplacez ce logo par celui de votre podcast
          alt="Logo Poditfy"
          width={180}
          height={38}
          priority
        />
        
        <h1>Bienvenue sur Podify</h1>
        <p>Découvrez vos podcasts préférés.</p>

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

        <div className={styles.episodeList}>
          <h2>Épisodes récents</h2>
          <ul>
            <li><a href="/episode1">Épisode 1: Introduction au podcast</a></li>
            <li><a href="/episode2">Épisode 2: Le monde du podcasting</a></li>
            <li><a href="/episode3">Épisode 3: Comment créer votre podcast</a></li>
          </ul>
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
