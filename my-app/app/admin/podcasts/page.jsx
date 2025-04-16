"use client"

import { useState } from "react"
import { MoreHorizontal, ChevronDown, Search, Plus, Download, Filter, Play, Pause, ExternalLink } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const podcasts = [
  {
    id: "p1",
    title: "Tech Today",
    creator: "Marie Dupont",
    category: "Technologie",
    episodes: 45,
    status: "Publié",
    lastUpdate: "15/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "p2",
    title: "Histoire Secrète",
    creator: "Jean Martin",
    category: "Histoire",
    episodes: 32,
    status: "Publié",
    lastUpdate: "12/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "p3",
    title: "Science Expliquée",
    creator: "Sophie Leclerc",
    category: "Science",
    episodes: 28,
    status: "Publié",
    lastUpdate: "10/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "p4",
    title: "Business Insights",
    creator: "Pierre Dubois",
    category: "Business",
    episodes: 15,
    status: "En attente",
    lastUpdate: "08/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "p5",
    title: "Méditation Guidée",
    creator: "Claire Blanc",
    category: "Bien-être",
    episodes: 50,
    status: "Publié",
    lastUpdate: "05/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
]

const reportedPodcasts = [
  {
    id: "r1",
    title: "Débat Politique #12",
    creator: "Michel Fournier",
    reportCount: 5,
    reportReason: "Contenu inapproprié",
    reportDate: "14/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "r2",
    title: "Théories Alternatives #8",
    creator: "Julien Mercier",
    reportCount: 3,
    reportReason: "Désinformation",
    reportDate: "12/04/2025",
    thumbnail: "/placeholder.svg?height=80&width=80",
  },
]

export default function PodcastsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestion des Podcasts</h2>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un podcast
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tous les podcasts</TabsTrigger>
          <TabsTrigger value="reported">
            Signalés
            <Badge variant="destructive" className="ml-2">
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="pending">En attente</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full items-center gap-2 md:w-1/3">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher des podcasts..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtres
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="tech">Technologie</SelectItem>
                    <SelectItem value="history">Histoire</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="wellness">Bien-être</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="published">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les statuts</SelectItem>
                    <SelectItem value="published">Publié</SelectItem>
                    <SelectItem value="pending">En attente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Télécharger</span>
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Podcast</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Épisodes</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Dernière mise à jour</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {podcasts.map((podcast) => (
                  <TableRow key={podcast.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 rounded-md overflow-hidden">
                          <img
                            src={podcast.thumbnail || "/placeholder.svg"}
                            alt={podcast.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{podcast.title}</div>
                          <div className="text-sm text-muted-foreground">{podcast.creator}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{podcast.category}</Badge>
                    </TableCell>
                    <TableCell>{podcast.episodes}</TableCell>
                    <TableCell>
                      <Badge variant={podcast.status === "Publié" ? "default" : "secondary"}>{podcast.status}</Badge>
                    </TableCell>
                    <TableCell>{podcast.lastUpdate}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          <span className="sr-only">Lecture</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Gérer les épisodes</DropdownMenuItem>
                            <DropdownMenuItem>Voir les statistiques</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>

        <TabsContent value="reported" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {reportedPodcasts.map((podcast) => (
              <Card key={podcast.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>{podcast.title}</CardTitle>
                      <CardDescription>{podcast.creator}</CardDescription>
                    </div>
                    <Badge variant="destructive">{podcast.reportCount} signalements</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="h-20 w-20 rounded-md overflow-hidden">
                      <img
                        src={podcast.thumbnail || "/placeholder.svg"}
                        alt={podcast.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-sm font-medium">Motif du signalement:</div>
                        <div className="text-sm text-muted-foreground">{podcast.reportReason}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Date du signalement:</div>
                        <div className="text-sm text-muted-foreground">{podcast.reportDate}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Voir
                        </Button>
                        <Button size="sm" variant="destructive">
                          Supprimer
                        </Button>
                        <Button size="sm">Ignorer</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Podcast</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Épisodes</TableHead>
                  <TableHead>Date de soumission</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {podcasts
                  .filter((podcast) => podcast.status === "En attente")
                  .map((podcast) => (
                    <TableRow key={podcast.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-16 w-16 rounded-md overflow-hidden">
                            <img
                              src={podcast.thumbnail || "/placeholder.svg"}
                              alt={podcast.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{podcast.title}</div>
                            <div className="text-sm text-muted-foreground">{podcast.creator}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{podcast.category}</Badge>
                      </TableCell>
                      <TableCell>{podcast.episodes}</TableCell>
                      <TableCell>{podcast.lastUpdate}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline">
                            Voir
                          </Button>
                          <Button size="sm">Approuver</Button>
                          <Button size="sm" variant="destructive">
                            Rejeter
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
