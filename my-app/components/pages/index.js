import Head from "next/head"
import Link from "next/link"
import { Button } from "../components/ui/button"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Podify - Votre plateforme de podcasts</title>
        <meta name="description" content="Découvrez, écoutez et partagez vos podcasts préférés sur Podify" />
      </Head>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Découvrez le monde des podcasts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Podify est votre plateforme dédiée aux podcasts. Écoutez, découvrez et partagez vos contenus audio préférés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/episodes">Découvrir les épisodes</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Épisodes populaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularEpisodes.map((episode) => (
              <div key={episode.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🎙️</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{episode.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{episode.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{episode.duration}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/episodes/${episode.id}`}>Écouter</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/episodes">Voir tous les épisodes</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// Données d'exemple pour la page d'accueil
const popularEpisodes = [
  {
    id: 1,
    title: "L'avenir de l'intelligence artificielle",
    description:
      "Une discussion approfondie sur les tendances actuelles et futures de l'IA avec des experts du domaine.",
    duration: "45 min",
  },
  {
    id: 2,
    title: "Méditation guidée pour débutants",
    description:
      "Une séance de méditation guidée pour les débutants, avec des techniques simples pour commencer votre pratique.",
    duration: "20 min",
  },
  {
    id: 3,
    title: "Histoire des civilisations anciennes",
    description:
      "Exploration des mystères et des réalisations des civilisations anciennes qui ont façonné notre monde.",
    duration: "60 min",
  },
]
