"use client";

import { useState } from "react";
<<<<<<< HEAD
import { FaUser } from "react-icons/fa";
=======
>>>>>>> 3f617241658c38bd5595819403574aa143bcc288
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import Navbar from "@/app/components/Navbar";
import { FaPlay, FaHeadphones, FaUsers, FaStar, FaChartLine, FaUserPlus, FaCalendar } from "react-icons/fa";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
<<<<<<< HEAD

  const categories = ["Musique", "Éducation", "Technologie", "Histoire"];
  const popularPodcasts = [
    {
      id: 1,
      title: "Le Futur du Podcasting",
      creator: "John Doe",
      description: "Les dernières tendances dans l'industrie du podcast.",
      image: "/images/episode1.jpg",
    },
    {
      id: 2,
      title: "Technologie et Innovations",
      creator: "Alice Smith",
      description: "Découvrez les dernières innovations dans le monde tech.",
      image: "/images/episode2.jpg",
    },
    {
      id: 3,
      title: "L'Éducation en 2025",
      creator: "Marc Dupont",
      description: "Comment l'éducation évolue avec la technologie.",
      image: "/images/episode3.jpg",
    },
=======
  
  const categories = [
    { 
      name: "Musique", 
      icon: "🎵",
      color: "#FF6B6B",
      description: "Découvrez les meilleurs podcasts musicaux",
      count: "2.5K podcasts"
    },
    { 
      name: "Éducation", 
      icon: "📚",
      color: "#4ECDC4",
      description: "Apprenez avec les meilleurs experts",
      count: "1.8K podcasts"
    },
    { 
      name: "Technologie", 
      icon: "💻",
      color: "#45B7D1",
      description: "Restez à jour avec les dernières innovations",
      count: "3.2K podcasts"
    },
    { 
      name: "Histoire", 
      icon: "🏛️",
      color: "#96CEB4",
      description: "Explorez les moments clés de l'histoire",
      count: "1.5K podcasts"
    },
    { 
      name: "Culture", 
      icon: "🎭",
      color: "#D4A5A5",
      description: "Plongez dans l'art et la culture",
      count: "1.2K podcasts"
    },
    { 
      name: "Business", 
      icon: "💼",
      color: "#9B59B6",
      description: "Développez votre carrière professionnelle",
      count: "2.1K podcasts"
    }
  ];

  const stats = [
    { icon: <FaHeadphones />, value: "10K+", label: "Podcasts" },
    { icon: <FaUsers />, value: "50K+", label: "Utilisateurs" },
    { icon: <FaStar />, value: "4.8", label: "Note moyenne" },
    { icon: <FaChartLine />, value: "1M+", label: "Écoutes" }
  ];

  const trendingPodcasts = [
    { 
      id: 1, 
      title: "Le Futur du Podcasting", 
      creator: "John Doe", 
      description: "Les dernières tendances dans l'industrie du podcast.", 
      image: "/images/episode1.jpg", 
      category: "Technologie",
      duration: "45 min",
      rating: 4.9
    },
    { 
      id: 2, 
      title: "Technologie et Innovations", 
      creator: "Alice Smith", 
      description: "Découvrez les dernières innovations dans le monde tech.", 
      image: "/images/episode2.jpg", 
      category: "Technologie",
      duration: "38 min",
      rating: 4.8
    },
    { 
      id: 3, 
      title: "L'Éducation en 2025", 
      creator: "Marc Dupont", 
      description: "Comment l'éducation évolue avec la technologie.", 
      image: "/images/episode3.jpg", 
      category: "Éducation",
      duration: "52 min",
      rating: 4.7
    },
    { 
      id: 4, 
      title: "Histoire des Civilisations", 
      creator: "Marie Laurent", 
      description: "Un voyage à travers l'histoire des grandes civilisations.", 
      image: "/images/episode4.jpg", 
      category: "Histoire",
      duration: "60 min",
      rating: 4.9
    },
    {
      id: 5,
      title: "L'Art de la Musique",
      creator: "Sophie Martin",
      description: "Une exploration approfondie des différents genres musicaux et leur évolution.",
      image: "/images/episode5.jpg",
      category: "Musique",
      duration: "55 min",
      rating: 4.8
    },
    {
      id: 6,
      title: "Business et Innovation",
      creator: "Thomas Dubois",
      description: "Stratégies et conseils pour réussir dans le monde des affaires moderne.",
      image: "/images/episode6.jpg",
      category: "Business",
      duration: "48 min",
      rating: 4.7
    }
  ];

  const featuredCreators = [
    {
      id: 1,
      name: "Sarah Martin",
      role: "Tech Expert",
      image: "/images/creator1.jpg",
      followers: "125K",
      featuredShows: ["Tech Talk Daily", "Future of AI"],
      rating: 4.9
    },
    {
      id: 2,
      name: "David Chen",
      role: "Music Producer",
      image: "/images/creator2.jpg",
      followers: "98K",
      featuredShows: ["Music Studio", "Artist Spotlight"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Business Coach",
      image: "/images/creator3.jpg",
      followers: "75K",
      featuredShows: ["Business Growth", "Startup Stories"],
      rating: 4.9
    },
    {
      id: 4,
      name: "James Brown",
      role: "History Professor",
      image: "/images/creator4.jpg",
      followers: "60K",
      featuredShows: ["History Today", "World Events"],
      rating: 4.7
    }
  ];

  const latestEpisodes = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      podcast: "Tech Talk Daily",
      creator: "Sarah Martin",
      image: "/images/episode-latest1.jpg",
      duration: "45 min",
      releaseDate: "2024-02-20",
      isNew: true
    },
    {
      id: 2,
      title: "Music Production Tips & Tricks",
      podcast: "Music Studio",
      creator: "David Chen",
      image: "/images/episode-latest2.jpg",
      duration: "38 min",
      releaseDate: "2024-02-19",
      isNew: true
    },
    {
      id: 3,
      title: "Startup Success Stories",
      podcast: "Business Growth",
      creator: "Emma Wilson",
      image: "/images/episode-latest3.jpg",
      duration: "52 min",
      releaseDate: "2024-02-18",
      isNew: false
    },
    {
      id: 4,
      title: "Ancient Civilizations",
      podcast: "History Today",
      creator: "James Brown",
      image: "/images/episode-latest4.jpg",
      duration: "60 min",
      releaseDate: "2024-02-17",
      isNew: false
    }
>>>>>>> ee9ef6798b5eccd9c2db69718f7c4f08c51c2992
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.page}>
<<<<<<< HEAD
<<<<<<< HEAD
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
            <h1 className={styles.brandName}>Podify</h1>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navItem}>Accueil</Link>
            <Link href="/about" className={styles.navItem}>A propos</Link>
            <Link href="/user" className={styles.navItem}>
              <FaUser className={styles.icon} />
            </Link>
          </div>
        </div>
      </nav>

=======
      
      <Navbar/>
      {/* Main Content */}
>>>>>>> 3f617241658c38bd5595819403574aa143bcc288
      <main className={styles.main}>
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
                className={`${styles.filterButton} ${
                  selectedCategory === category ? styles.selected : ""
                }`}
                onClick={() => setSelectedCategory(category)}
=======
      <Navbar/>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Découvrez le Meilleur du <span className={styles.highlight}>Podcasting</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Explorez des milliers de podcasts sur tous les sujets qui vous passionnent
            </p>
            <div className={styles.heroSearch}>
              <input
                type="text"
                className={styles.heroSearchInput}
                placeholder="Rechercher des podcasts..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className={styles.heroSearchButton}>
                <FaPlay className={styles.searchIcon} />
                <span>Rechercher</span>
              </button>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className={styles.categories}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explorez par Catégorie</h2>
            <p className={styles.sectionSubtitle}>Découvrez des podcasts par thème</p>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <button
                key={category.name}
                className={`${styles.categoryCard} ${selectedCategory === category.name ? styles.selected : ""}`}
                onClick={() => setSelectedCategory(category.name)}
                style={{ '--category-color': category.color }}
>>>>>>> ee9ef6798b5eccd9c2db69718f7c4f08c51c2992
              >
                <div className={styles.categoryIcon}>
                  <span className={styles.iconEmoji}>{category.icon}</span>
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <span className={styles.categoryCount}>{category.count}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

<<<<<<< HEAD
        <section className={styles.featured}>
          <h2 className={styles.sectionTitle}>Podcasts populaires</h2>
=======
        {/* Featured Creators Section */}
        <section className={styles.creators}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Créateurs Vedettes</h2>
            <p className={styles.sectionSubtitle}>Découvrez nos créateurs les plus populaires</p>
          </div>
          <div className={styles.creatorsGrid}>
            {featuredCreators.map((creator) => (
              <article key={creator.id} className={styles.creatorCard}>
                <div className={styles.creatorImageContainer}>
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    width={120}
                    height={120}
                    className={styles.creatorImage}
                  />
                  <div className={styles.creatorBadge}>
                    <FaStar className={styles.starIcon} />
                    <span>{creator.rating}</span>
                  </div>
                </div>
                <div className={styles.creatorContent}>
                  <h3 className={styles.creatorName}>{creator.name}</h3>
                  <p className={styles.creatorRole}>{creator.role}</p>
                  <div className={styles.creatorStats}>
                    <span className={styles.followersCount}>
                      <FaUsers className={styles.statsIcon} />
                      {creator.followers} abonnés
                    </span>
                  </div>
                  <div className={styles.featuredShows}>
                    {creator.featuredShows.map((show, index) => (
                      <span key={index} className={styles.showTag}>{show}</span>
                    ))}
                  </div>
                  <button className={styles.followButton}>
                    <FaUserPlus className={styles.followIcon} />
                    Suivre
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Latest Episodes Section */}
        <section className={styles.latestEpisodes}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Derniers Épisodes</h2>
            <p className={styles.sectionSubtitle}>Les épisodes les plus récents de vos podcasts préférés</p>
          </div>
          <div className={styles.episodesGrid}>
            {latestEpisodes.map((episode) => (
              <article key={episode.id} className={styles.episodeCard}>
                <div className={styles.episodeImageContainer}>
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    width={300}
                    height={200}
                    className={styles.episodeImage}
                  />
                  {episode.isNew && (
                    <div className={styles.newBadge}>Nouveau</div>
                  )}
                  <div className={styles.playOverlay}>
                    <button className={styles.playButton}>
                      <FaPlay className={styles.playIcon} />
                    </button>
                  </div>
                </div>
                <div className={styles.episodeContent}>
                  <div className={styles.episodeHeader}>
                    <h3 className={styles.episodeTitle}>{episode.title}</h3>
                    <span className={styles.episodeDuration}>{episode.duration}</span>
                  </div>
                  <div className={styles.episodeInfo}>
                    <p className={styles.podcastName}>{episode.podcast}</p>
                    <p className={styles.creatorName}>Par {episode.creator}</p>
                  </div>
                  <div className={styles.episodeFooter}>
                    <span className={styles.releaseDate}>
                      <FaCalendar className={styles.dateIcon} />
                      {new Date(episode.releaseDate).toLocaleDateString('fr-FR')}
                    </span>
                    <button className={styles.listenButton}>
                      <FaHeadphones className={styles.listenIcon} />
                      Écouter
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trending Podcasts Section */}
        <section className={styles.trending}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Podcasts Tendance</h2>
            <p className={styles.sectionSubtitle}>Les podcasts les plus populaires cette semaine</p>
          </div>
>>>>>>> ee9ef6798b5eccd9c2db69718f7c4f08c51c2992
          <div className={styles.podcastGrid}>
            {trendingPodcasts.map((podcast) => (
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
                    <button className={styles.playButton}>
                      <FaPlay className={styles.playIcon} />
                    </button>
                  </div>
                  <div className={styles.categoryTag}>{podcast.category}</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                    <div className={styles.rating}>
                      <FaStar className={styles.starIcon} />
                      <span>{podcast.rating}</span>
                    </div>
                  </div>
                  <p className={styles.podcastDescription}>{podcast.description}</p>
<<<<<<< HEAD
                  <p className={styles.podcastCreator}>
                    Créé par {podcast.creator}
                  </p>
                  <Link
                    href={`/podcast/${podcast.id}`}
                    className={styles.cardLink}
                  >
                    Voir le podcast
                  </Link>
=======
                  <div className={styles.cardFooter}>
                    <div className={styles.creatorInfo}>
                      <p className={styles.podcastCreator}>Par {podcast.creator}</p>
                      <span className={styles.duration}>{podcast.duration}</span>
                    </div>
                    <Link href={`/podcast/${podcast.id}`} className={styles.cardLink}>
                      Écouter
                    </Link>
                  </div>
>>>>>>> ee9ef6798b5eccd9c2db69718f7c4f08c51c2992
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>© 2025 Podify. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
