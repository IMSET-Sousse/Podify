"use client";

import { useState } from "react";
import { FaPlay, FaHeadphones, FaUsers, FaStar, FaChartLine, FaUserPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const categories = [
    { name: "Musique", icon: "🎵", color: "#FF6B6B", description: "Découvrez les meilleurs podcasts musicaux", count: "2.5K podcasts" },
    { name: "Éducation", icon: "📚", color: "#4ECDC4", description: "Apprenez avec les meilleurs experts", count: "1.8K podcasts" },
    { name: "Technologie", icon: "💻", color: "#45B7D1", description: "Restez à jour avec les dernières innovations", count: "3.2K podcasts" },
    { name: "Histoire", icon: "🏛️", color: "#96CEB4", description: "Explorez les moments clés de l'histoire", count: "1.5K podcasts" },
    { name: "Culture", icon: "🎭", color: "#D4A5A5", description: "Plongez dans l'art et la culture", count: "1.2K podcasts" },
    { name: "Business", icon: "💼", color: "#9B59B6", description: "Développez votre carrière professionnelle", count: "2.1K podcasts" }
  ];

  const stats = [
    { icon: <FaHeadphones />, value: "10K+", label: "Podcasts" },
    { icon: <FaUsers />, value: "50K+", label: "Utilisateurs" },
    { icon: <FaStar />, value: "4.8", label: "Note moyenne" },
    { icon: <FaChartLine />, value: "1M+", label: "Écoutes" }
  ];

  const featuredCreators = [
    { id: 1, name: "Sarah Martin", role: "Tech Expert", image: "/images/creator1.jpg", followers: "125K", featuredShows: ["Tech Talk Daily", "Future of AI"], rating: 4.9 },
    { id: 2, name: "David Chen", role: "Music Producer", image: "/images/creator2.jpg", followers: "98K", featuredShows: ["Music Studio", "Artist Spotlight"], rating: 4.8 },
    { id: 3, name: "Emma Wilson", role: "Business Coach", image: "/images/creator3.jpg", followers: "75K", featuredShows: ["Business Growth", "Startup Stories"], rating: 4.9 },
    { id: 4, name: "James Brown", role: "History Professor", image: "/images/creator4.jpg", followers: "60K", featuredShows: ["History Today", "World Events"], rating: 4.7 }
  ];

  const latestEpisodes = [
    { id: 1, title: "The Future of AI", podcast: "Tech Talk Daily", creator: "Sarah Martin", image: "/images/episode-latest1.jpg", duration: "45 min", releaseDate: "2024-02-20", isNew: true },
    { id: 2, title: "Music Production Tips", podcast: "Music Studio", creator: "David Chen", image: "/images/episode-latest2.jpg", duration: "38 min", releaseDate: "2024-02-19", isNew: true },
    { id: 3, title: "Startup Stories", podcast: "Business Growth", creator: "Emma Wilson", image: "/images/episode-latest3.jpg", duration: "52 min", releaseDate: "2024-02-18", isNew: false },
    { id: 4, title: "Ancient Civilizations", podcast: "History Today", creator: "James Brown", image: "/images/episode-latest4.jpg", duration: "60 min", releaseDate: "2024-02-17", isNew: false }
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Découvrez le Meilleur du <span className={styles.highlight}>Podcasting</span></h1>
            <p>Explorez des milliers de podcasts sur tous les sujets qui vous passionnent</p>
            <div className={styles.heroSearch}>
          <input
            type="text"
            placeholder="Rechercher des podcasts..."
            value={searchQuery}
            onChange={handleSearchChange}
                className={styles.heroSearchInput}
              />
              <button className={styles.heroSearchButton}><FaPlay /> Rechercher</button>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div>
                    <span>{stat.value}</span>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className={styles.categories}>
          <h2>Explorez par Catégorie</h2>
          <div className={styles.categoryGrid}>
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`${styles.categoryCard} ${selectedCategory === cat.name ? styles.selected : ""}`}
                onClick={() => setSelectedCategory(cat.name)}
                style={{ '--category-color': cat.color }}
              >
                <span className={styles.iconEmoji}>{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <small>{cat.count}</small>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Creators */}
        <section className={styles.creators}>
          <h2>Créateurs Vedettes</h2>
          <div className={styles.creatorsGrid}>
            {featuredCreators.map((creator) => (
              <article key={creator.id} className={styles.creatorCard}>
                <Image src={creator.image} alt={creator.name} width={120} height={120} />
                <h3>{creator.name}</h3>
                <p>{creator.role}</p>
                <span><FaUsers /> {creator.followers}</span>
                <div>
                  {creator.featuredShows.map((show, i) => (
                    <small key={i}>{show}</small>
                  ))}
                </div>
                <button><FaUserPlus /> Suivre</button>
              </article>
            ))}
                </div>
        </section>

        {/* Latest Episodes */}
        <section className={styles.latestEpisodes}>
          <h2>Derniers Épisodes</h2>
          <div className={styles.episodesGrid}>
            {latestEpisodes.map((ep) => (
              <article key={ep.id} className={styles.episodeCard}>
                <Image src={ep.image} alt={ep.title} width={300} height={200} />
                {ep.isNew && <span>Nouveau</span>}
                <h3>{ep.title}</h3>
                <p>{ep.podcast} • {ep.creator}</p>
                <small>{ep.duration}</small>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
