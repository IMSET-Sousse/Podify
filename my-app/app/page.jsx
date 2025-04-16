"use client"; // Ajout de la directive "use client" pour éviter l'erreur liée aux hooks React

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import Navbar from "@/app/components/Navbar"


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const categories = ["Musique", "Éducation", "Technologie", "Histoire"];
  const popularPodcasts = [
    { id: 1, title: "Le Futur du Podcasting", creator: "John Doe", description: "Les dernières tendances dans l'industrie du podcast.", image: "/images/episode1.jpg" },
    { id: 2, title: "Technologie et Innovations", creator: "Alice Smith", description: "Découvrez les dernières innovations dans le monde tech.", image: "/images/episode2.jpg" },
    { id: 3, title: "L'Éducation en 2025", creator: "Marc Dupont", description: "Comment l'éducation évolue avec la technologie.", image: "/images/episode3.jpg" },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.page}>
      
      <Navbar/>
      {/* Main Content */}
      <main className={styles.main}>
        {/* Section Recherche */}
        <section className={styles.searchSection}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Rechercher des podcasts..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.selected : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Section Podcasts Populaires */}
        <section className={styles.featured}>
          <h2 className={styles.sectionTitle}>Podcasts populaires</h2>
          <div className={styles.podcastGrid}>
            {popularPodcasts.map((podcast) => (
              <article key={podcast.id} className={styles.podcastCard}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={podcast.image}
                    alt={podcast.title}
                    width={400}
                    height={250}
                    className={styles.podcastImage}
                  />
                  <div className={styles.playOverlay}>
                    <button className={styles.playButton}>🎧</button>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                  <p className={styles.podcastDescription}>{podcast.description}</p>
                  <p className={styles.podcastCreator}>Créé par {podcast.creator}</p>
                  <Link href={`/podcast/${podcast.id}`} className={styles.cardLink}>Voir le podcast</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>© 2025 Podify. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
