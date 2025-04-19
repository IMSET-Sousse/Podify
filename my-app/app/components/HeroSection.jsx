"use client";

import Image from "next/image";
import { FaHeadphones, FaUsers, FaStar, FaChartLine } from "react-icons/fa";
import SearchBar from "./SearchBar";
import styles from "../../styles/page.module.css";

const STATS = [
  { id: 1, value: "10K+", label: "Podcasts", icon: FaHeadphones },
  { id: 2, value: "50K+", label: "Utilisateurs", icon: FaUsers },
  { id: 3, value: "4.8", label: "Note Moyenne", icon: FaStar },
  { id: 4, value: "1M+", label: "Écoutes", icon: FaChartLine }
];

export default function HeroSection({ onSearch }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Découvrez le Meilleur du <span className={styles.highlight}>Podcast</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Explorez des milliers de podcasts de qualité sur tous les sujets qui vous passionnent
          </p>
          <div className={styles.heroSearch}>
            <SearchBar onSearch={onSearch} />
          </div>
          
          <div className={styles.statsContainer}>
            {STATS.map((stat) => (
              <div key={stat.id} className={styles.statItem}>
                <stat.icon className={styles.statIcon} aria-hidden="true" />
                <div className={styles.statContent}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroImageContainer}>
          <Image 
            src="/images/hero-podcast.png" 
            alt="Illustration de podcasts" 
            width={500} 
            height={400} 
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
} 