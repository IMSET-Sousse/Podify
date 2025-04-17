"use client";

import { useState } from "react";
import styles from "@/styles/page.module.css";
import Navbar from "@/app/components/Navbar";

export default function Episodes() {
  const [episodes] = useState([
    {
      id: 1,
      title: "L'avenir de l'IA",
      podcast: "Tech Talk Daily",
      duration: "45:30",
      date: "2024-03-15",
      image: "/images/episode1.jpg",
      description: "Une discussion approfondie sur les dernières avancées en intelligence artificielle."
    },
    {
      id: 2,
      title: "Les mystères de l'Égypte ancienne",
      podcast: "Histoire du Monde",
      duration: "52:15",
      date: "2024-03-14",
      image: "/images/episode2.jpg",
      description: "Découvrez les secrets des pyramides et de la civilisation égyptienne."
    },
    {
      id: 3,
      title: "Marketing digital 2024",
      podcast: "Business Insights",
      duration: "38:45",
      date: "2024-03-13",
      image: "/images/episode3.jpg",
      description: "Les tendances du marketing digital pour l'année 2024."
    }
  ]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.episodes}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Épisodes Récents</h1>
            <p className={styles.sectionSubtitle}>Découvrez les derniers épisodes de vos podcasts préférés</p>
          </div>
          
          <div className={styles.episodeList}>
            {episodes.map((episode) => (
              <article key={episode.id} className={styles.episodeCard}>
                <div className={styles.episodeImage}>
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className={styles.podcastImage}
                  />
                </div>
                <div className={styles.episodeContent}>
                  <div className={styles.episodeHeader}>
                    <h3 className={styles.episodeTitle}>{episode.title}</h3>
                    <span className={styles.episodeDuration}>{episode.duration}</span>
                  </div>
                  <p className={styles.podcastName}>{episode.podcast}</p>
                  <p className={styles.episodeDescription}>{episode.description}</p>
                  <div className={styles.episodeFooter}>
                    <span className={styles.episodeDate}>
                      {new Date(episode.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <div className={styles.episodeActions}>
                      <button className={styles.playButton}>
                        <span className={styles.playIcon}>▶</span>
                        Écouter
                      </button>
                      <button className={styles.actionButton}>Télécharger</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 