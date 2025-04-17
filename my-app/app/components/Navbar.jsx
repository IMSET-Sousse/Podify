import { FaUser, FaHome, FaBookmark, FaHeadphones, FaInfoCircle } from "react-icons/fa";
import styles from "@/styles/page.module.css";
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? styles.active : '';
  };

  return (
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
          <Link href="/" className={`${styles.navItem} ${isActive('/')}`}>
            <FaHome className={styles.navIcon} />
            <span>Accueil</span>
          </Link>
          <Link href="/subscriptions" className={`${styles.navItem} ${isActive('/subscriptions')}`}>
            <FaBookmark className={styles.navIcon} />
            <span>Abonnements</span>
          </Link>
          <Link href="/episodes" className={`${styles.navItem} ${isActive('/episodes')}`}>
            <FaHeadphones className={styles.navIcon} />
            <span>Épisodes</span>
          </Link>
          <Link href="/about" className={`${styles.navItem} ${isActive('/about')}`}>
            <FaInfoCircle className={styles.navIcon} />
            <span>À propos</span>
          </Link>
          <Link href="/user" className={`${styles.navItem} ${isActive('/user')}`}>
            <FaUser className={styles.navIcon} />
            <span>Profil</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}