import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/poditfy-logo.png"
              alt="Podify Logo"
              width={120}
              height={60}
              priority
            />
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navItem}>Accueil</Link>
            <Link href="/episodes" className={styles.navItem}>Épisodes</Link>
            <Link href="/about" className={styles.navItem}>À propos</Link>
            <Link href="/contact" className={styles.navItem}>Contact</Link>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Plongez dans l'univers des 
            <span className={styles.highlight}> podcasts</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Découvrez des histoires captivantes, des débats passionnants 
            et des conversations inspirantes.
          </p>
          
          <div className={styles.ctas}>
            <Link
              href="/episodes"
              className={styles.primaryCta}
            >
              Explorer les épisodes
              <span className={styles.ctaIcon}>🎧</span>
            </Link>
            <Link
              href="/about"
              className={styles.secondaryCta}
            >
              Découvrir Podify →
            </Link>
          </div>
        </section>

        {/* Featured Episodes */}
        <section className={styles.featured}>
          <h2 className={styles.sectionTitle}>Épisodes populaires</h2>
          
          <div className={styles.cardsContainer}>
            {/* Episode Cards */}
            {[1, 2, 3].map((episode) => (
              <article key={episode} className={styles.card}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={`/images/episode${episode}.jpg`}
                    alt={`Épisode ${episode}`}
                    width={400}
                    height={250}
                    className={styles.cardImage}
                  />
                  <div className={styles.playOverlay}>
                    <button className={styles.playButton}>
                      ▶ Écouter
                    </button>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    Épisode {episode}: Le futur du podcasting
                  </h3>
                  <p className={styles.cardDescription}>
                    Une exploration approfondie des tendances actuelles 
                    et futures dans l'industrie du podcasting.
                  </p>
                  <div className={styles.cardMeta}>
                    <span className={styles.duration}>45 min</span>
                    <span className={styles.category}>Technologie</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer amélioré */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Image
              src="/images/poditfy-logo.png"
              alt="Podify Logo"
              width={100}
              height={50}
            />
            <p className={styles.footerText}>
              Votre plateforme de podcasts préférée depuis 2024.
            </p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <Link href="/">Accueil</Link>
              <Link href="/episodes">Épisodes</Link>
              <Link href="/about">À propos</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Légal</h4>
              <Link href="/privacy">Confidentialité</Link>
              <Link href="/terms">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2024 Podify. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}