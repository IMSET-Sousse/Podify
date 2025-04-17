import { FaUser } from "react-icons/fa";
import styles from "@/styles/page.module.css";
import Link from "next/link"
import Image from "next/image"

export default function Navbar () {
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
          <h1 className={styles.brandName}>Podify</h1> {/* Le texte "Podify" */}
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navItem}>Accueil</Link>
          <Link href="/about" className={styles.navItem}>A propos</Link>
          {/* Ajout du lien Utilisateur avec l'icône */}
          <Link href="/user" className={styles.navItem}>
            <FaUser className={styles.icon} /> {/* Icône utilisateur */}
          </Link>
        </div>
      </div>
    </nav>
  )
}