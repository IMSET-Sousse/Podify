"use client"

import { useState } from "react"
import { Input } from "../../components/ui/input" // Corrected path
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Select, SelectContent, SelectItem } from "../../components/ui/select"
import { FaSearch, FaClock, FaCalendar } from "react-icons/fa"
import Image from "next/image"

// Types pour les épisodes
interface Episode {
  id: number
  title: string
  description: string
  duration: string
  date: string
  category: string
  image: string
}

export default function EpisodesPage() {
  // Données d'exemple pour les épisodes
  const allEpisodes: Episode[] = [
    {
      id: 1,
      title: "L'avenir de l'intelligence artificielle",
      description:
        "Une discussion approfondie sur les tendances actuelles et futures de l'IA avec des experts du domaine.",
      duration: "45 min",
      date: "20 avril 2025",
      category: "Technologie",
      image : "my-app/public/images/aia.png", // Correction ici
  },
    {
      id: 2,
      title: "Méditation guidée pour débutants",
      description:
        "Une séance de méditation guidée pour les débutants, avec des techniques simples pour commencer votre pratique.",
      duration: "20 min",
      date: "5 mai 2023",
      category: "Bien-être",
      image: "my-app/public/images/2m.png",
    },
    {
      id: 3,
      title: "Histoire des civilisations anciennes",
      description:
        "Exploration des mystères et des réalisations des civilisations anciennes qui ont façonné notre monde.",
      duration: "60 min",
      date: "18 juin 2023",
      category: "Histoire",
      image: "my-app/public/images/33.png",
    },
    {
      id: 4,
      title: "Conseils pour entrepreneurs débutants",
      description:
        "Des conseils pratiques pour les entrepreneurs qui débutent leur aventure dans le monde des affaires.",
      duration: "35 min",
      date: "2 juillet 2023",
      category: "Business",
      image: "my-app/public/images/images (1).png",
    },
    {
      id: 5,
      title: "Recettes végétariennes faciles",
      description:
        "Découvrez des recettes végétariennes simples et délicieuses que vous pouvez préparer en moins de 30 minutes.",
      duration: "25 min",
      date: "14 août 2023",
      category: "Cuisine",
      image: "my-app/public/images/Images-recette9.jpg",
    },
    {
      id: 6,
      title: "Débat sur les cryptomonnaies",
      description: "Un débat animé sur l'avenir des cryptomonnaies et leur impact sur l'économie mondiale.",
      duration: "50 min",
      date: "9 septembre 2023",
      category: "Finance",
      image: "my-app/public/images/Fond-fonce-1.png",
    },
    {
      id: 7,
      title: "Techniques de productivité",
      description: "Apprenez des techniques éprouvées pour améliorer votre productivité et mieux gérer votre temps.",
      duration: "40 min",
      date: "22 octobre 2023",
      category: "Développement personnel",
      image: "my-app/public/images/44.png",
    },
    {
      id: 8,
      title: "Les tendances musicales de 2023",
      description:
        "Une analyse des tendances musicales qui ont marqué l'année 2023 et ce qu'elles nous disent sur notre société.",
      duration: "55 min",
      date: "5 novembre 2023",
      category: "Musique",
      image: "my-app/public/images/png-clipart-guitar-musical-instruments-music-art-thumbnail.png",
    },
  ]

  // États pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("Toutes")

  // Obtenir toutes les catégories uniques
  const categories = ["Toutes", ...Array.from(new Set(allEpisodes.map((episode) => episode.category)))]

  // Filtrer les épisodes en fonction de la recherche et de la catégorie
  const filteredEpisodes = allEpisodes.filter((episode) => {
    const matchesSearch =
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "Toutes" || episode.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Épisodes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez notre collection de podcasts sur divers sujets passionnants. Utilisez les filtres ci-dessous pour
          trouver exactement ce que vous cherchez.
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="mb-10 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Rechercher un épisode..."
            className="pl-10"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <Select
            value={categoryFilter}
            onValueChange={setCategoryFilter}
          >
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grille d'épisodes */}
      {filteredEpisodes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEpisodes.map((episode) => (
            <Card key={episode.id}>
              <div className="relative h-48 w-full">
                <Image src={episode.image || "/placeholder.svg"} alt={episode.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <Badge className="w-fit mb-2">{episode.category}</Badge>
                <h3 className="font-bold text-lg line-clamp-2">{episode.title}</h3>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{episode.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-muted-foreground pt-0">
                <div className="flex items-center gap-1">
                  <FaClock size={14} />
                  <span>{episode.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendar size={14} />
                  <span>{episode.date}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">Aucun épisode trouvé</h3>
          <p className="text-muted-foreground">Essayez de modifier vos critères de recherche ou de filtrage.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("")
              setCategoryFilter("Toutes")
            }}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </main>
  )
}