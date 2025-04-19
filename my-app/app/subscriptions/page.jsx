"use client";

import { useState } from "react";
import styles from "../../styles/page.module.css";
import Navbar from "../components/Navbar";

export default function Subscriptions() {
  const [subscriptions] = useState([
    {
      id: 1,
      title: "Tech Talk Daily",
      creator: "Tech Team",
      image: "/images/episode1.jpg",
      lastEpisode: "Les dernières innovations en IA",
      episodesCount: 156
    },
    {
      id: 2,
      title: "Histoire du Monde",
      creator: "Marie Laurent",
      image: "/images/episode2.jpg",
      lastEpisode: "La Révolution Française",
      episodesCount: 89
    },
    {
      id: 3,
      title: "Business Insights",
      creator: "Pierre Dubois",
      image: "/images/episode3.jpg",
      lastEpisode: "Stratégies de croissance",
      episodesCount: 234
    }
  ]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.subscriptions}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Mes Abonnements</h1>
            <p className={styles.sectionSubtitle}>Gérez vos podcasts préférés</p>
          </div>
          
          <div className={styles.subscriptionGrid}>
            {subscriptions.map((podcast) => (
              <article key={podcast.id} className={styles.subscriptionCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className={styles.podcastImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                  <p className={styles.podcastCreator}>Par {podcast.creator}</p>
                  <div className={styles.episodeInfo}>
                    <p className={styles.lastEpisode}>Dernier épisode: {podcast.lastEpisode}</p>
                    <p className={styles.episodesCount}>{podcast.episodesCount} épisodes</p>
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.actionButton}>Écouter</button>
                    <button className={styles.actionButton}>Gérer</button>
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