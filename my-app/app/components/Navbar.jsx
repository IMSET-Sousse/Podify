"use client"

import { FaUser, FaHome, FaBookmark, FaHeadphones, FaInfoCircle, FaSearch } from "react-icons/fa";
import styles from "../../styles/page.module.css";
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour l'effet de transparence
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path ? styles.active : '';
    }
    return pathname.startsWith(path) ? styles.active : '';
  };

  const navItems = [
    { path: '/', icon: FaHome, label: 'Accueil' },
    { path: '/subscriptions', icon: FaBookmark, label: 'Abonnements' },
    { path: '/episodes', icon: FaHeadphones, label: 'Épisodes' },
    { path: '/search', icon: FaSearch, label: 'Rechercher' },
    { path: '/about', icon: FaInfoCircle, label: 'À propos' },
    { path: '/user', icon: FaUser, label: 'Profil' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/poditfy-logo.png"
            alt="Podify Logo"
            width={120}
            height={60}
            priority
            className={styles.logo}
          />
          <h1 className={styles.brandName}>Podify</h1>
        </Link>
        
        <div className={styles.navLinks}>
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              href={path}
              className={`${styles.navItem} ${isActive(path)}`}
            >
              <Icon className={styles.navIcon} />
              <span className={styles.navLabel}>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}