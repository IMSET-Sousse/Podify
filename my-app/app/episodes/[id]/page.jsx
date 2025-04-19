"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Badge } from "../../../components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import AudioPlayer from "../../components/AudioPlayer"
import SocialInteractions from "../../components/SocialInteractions"

// Simuler la récupération des données d'un épisode
// Dans une vraie application, vous feriez un appel API ou utilisiez une base de données
const getEpisodeData = async (id) => {
  // Simuler un délai de chargement
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    id: Number.parseInt(id),
    title: "L'avenir de l'intelligence artificielle",
    description: `Une discussion approfondie sur les tendances actuelles et futures de l'IA avec des experts du domaine.

Dans cet épisode, nous explorons comment l'intelligence artificielle transforme notre quotidien et les industries. Nos invités partagent leurs perspectives sur les avancées récentes en matière d'IA générative, d'apprentissage automatique et de vision par ordinateur.

Nous abordons également les questions éthiques liées à l'IA et comment les entreprises et les gouvernements peuvent collaborer pour établir des cadres réglementaires appropriés.`,
    duration: "45 min",
    date: "12 avril 2023",
    category: "Technologie",
    image: "/placeholder.svg?height=400&width=400",
    audioUrl: "/placeholder-audio.mp3",
    likes: 24,
    comments: [
      {
        id: 1,
        name: "Marie Dupont",
        content: "Excellente discussion ! J'ai beaucoup appris sur les dernières avancées en IA.",
        date: "2023-04-15T14:32:00Z",
      },
      {
        id: 2,
        name: "Jean Martin",
        content: "Je serais curieux d'en savoir plus sur les implications éthiques de l'IA dans le domaine médical.",
        date: "2023-04-16T09:15:00Z",
      },
    ],
  }
}

export default function EpisodeDetail() {
  const params = useParams()
  const [episode, setEpisode] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const data = await getEpisodeData(params.id)
        setEpisode(data)
      } catch (err) {
        console.error("Erreur lors du chargement de l'épisode:", err)
        setError("Impossible de charger les détails de l'épisode")
      } finally {
        setIsLoading(false)
      }
    }

    fetchEpisode()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Chargement de l'épisode...</p>
      </div>
    )
  }

  if (error || !episode) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error || "Épisode non trouvé"}</p>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* En-tête de l'épisode */}
        <div className="mb-8">
          <Badge className="mb-4">{episode.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{episode.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{episode.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>

        {/* Image et lecteur audio */}
        <div className="mb-8">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden mb-6">
            <Image src={episode.image || "/placeholder.svg"} alt={episode.title} fill className="object-cover" />
          </div>
          <AudioPlayer audioUrl={episode.audioUrl} />
        </div>

        {/* Interactions sociales */}
        <SocialInteractions episode={episode} />

        {/* Description de l'épisode */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">À propos de cet épisode</h2>
          <div className="prose max-w-none">
            <p className="text-muted-foreground whitespace-pre-line">{episode.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
