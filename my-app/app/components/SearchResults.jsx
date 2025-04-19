"use client";

import Image from "next/image";
import { FaStar, FaClock } from "react-icons/fa";
import styles from "../../styles/page.module.css";

export default function SearchResults({ results, query }) {
  if (!results || results.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>Aucun résultat trouvé pour "{query}"</p>
      </div>
    );
  }

  return (
    <section className={styles.searchResults}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Résultats de recherche</h2>
        <p className={styles.sectionSubtitle}>
          {results.length} résultat{results.length > 1 ? 's' : ''} pour "{query}"
        </p>
        
        <div className={styles.podcastGrid}>
          {results.map((item) => (
            <div key={item.id} className={styles.podcastCard}>
              <div className={styles.podcastImageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.podcastImage}
                />
              </div>
              <div className={styles.podcastContent}>
                <h3 className={styles.podcastTitle}>{item.title}</h3>
                <p className={styles.podcastHost}>
                  {item.host ? `par ${item.host}` : `de ${item.podcastName}`}
                </p>
                <div className={styles.podcastMeta}>
                  {item.category && (
                    <span className={styles.podcastCategory}>{item.category}</span>
                  )}
                  {item.rating && (
                    <span className={styles.podcastRating}>
                      <FaStar /> {item.rating}
                    </span>
                  )}
                  {item.duration && (
                    <span className={styles.podcastDuration}>
                      <FaClock /> {item.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 