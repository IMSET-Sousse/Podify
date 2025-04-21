"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Subscriptions() {
  const [subscriptions] = useState([
    { id: 2, name: "Éducation Premium", image: "/images/gratuit.png" },
    { id: 3, name: "Technologie Premium", image: "/images/duo.png" },
    { id: 4, name: "Culture Premium", image: "/images/prenium.png" }
  ]);

  return (
    <div className="p-8">
      <main>
        {/* Titre et description */}
        <section>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold mb-4"> <br /> <br />
              Des abonnements adorables<br /> pour chaque situation
            </h1>
            <p className="text-gray-600 text-lg">
              Choisissez un abonnement Premium et écoutez à volonté, sans pub, sur votre téléphone, votre enceinte et d'autres appareils.
            </p>
          </div>

          {/* Cartes abonnements */}
          <div className="flex flex-wrap gap-6 mt-8 justify-center">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 bg-white"
              >
                <Image
                  src={sub.image}
                  alt={sub.name}
                  width={400}
                  height={500}
                  className="w-auto max-w-full h-[500px]"
                  priority
                />
              </div>
            ))}
          </div>
          <br /> <br /> <br />

          {/* Card : Titre + Liste des avantages en 2 colonnes */}
          <div className="rounded-2xl shadow-md p-6 mt-12 bg-white max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h2 className="text-2xl font-bold">
                Avantages inclus dans tous<br /> les abonnements Premium
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Écoutez sans publicité",
                  "Écoutez hors ligne",
                  "Écoutez sur tous vos appareils",
                  "Accédez à des contenus exclusifs"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card : Astuce écoute */}
          <div className="rounded-2xl shadow-md p-6 mt-12 bg-white max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Écoutez partout</h2>
            <p className="text-gray-700 text-lg">
              Écoutez sur votre téléphone, votre enceinte et d'autres appareils. Changez de musique sans interruption.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
