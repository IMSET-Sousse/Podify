"use client"

import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/Layout"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Search, Clock, Calendar, MessageSquare, Heart } from "lucide-react"
import { getAllEpisodes } from "../../lib/data"

export default function Episodes() {
  // États pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("Toutes")

  // Obtenir toutes les catégories uniques
  const categories = ["Toutes", ...Array.from(new Set(getAllEpisodes().map((episode) => episode.category)))]

  // Filtrer les épisodes en fonction de la recherche et de la catégorie
  const filteredEpisodes = getAllEpisodes().filter((episode) => {
    const matchesSearch =
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "Toutes" || episode.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <Head>
        <title>Épisodes - Podify</title>
        <meta name="description" content="Découvrez notre collection de podcasts sur divers sujets passionnants" />
      </Head>

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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Rechercher un épisode..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
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
              <Card key={episode.id} className="flex flex-col h-full">
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
                <CardFooter className="flex flex-col gap-3 pt-0">
                  <div className="flex justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{episode.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{episode.date}</span>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{episode.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare size={14} />
                        <span>{episode.comments.length}</span>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/episodes/${episode.id}`}>Écouter</Link>
                    </Button>
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
    </Layout>
  )
}
