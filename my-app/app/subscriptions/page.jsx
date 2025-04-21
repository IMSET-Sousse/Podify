"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";

export default function Subscriptions() {
  const [subscriptions] = useState([
    { id: 2, name: "Éducation Premium", image: "/images/gratuit.png" },
    { id: 3, name: "Technologie Premium", image: "/images/duo.png" },
    { id: 4, name: "Culture Premium", image: "/images/prenium.png" }
  ]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.subscriptions}>
          <div className={styles.sectionHeader}><br/>
            <h1 className={styles.sectionTitle}>Des abonnements adorables<br/> pour chaque situation </h1>
            <p className={styles.sectionSubtitle}>Choisissez un abonnement Prenium, et écoutez à volonté, sans pub, sur votre téléphone, votre enceinte et d'autres appareils. Payez de différentes manières. Annulez à tout moment.</p>
          </div>

          {/* Boucle sur les images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {subscriptions.map((sub) => (
              <div key={sub.id} className="relative h-64 w-full overflow-hidden rounded-2xl shadow-md">
                <Image src={sub.image} alt={sub.name} fill className="contain" />
              </div>
            ))}
          </div>

        </section>
      </main>
    </div>
  );
}
