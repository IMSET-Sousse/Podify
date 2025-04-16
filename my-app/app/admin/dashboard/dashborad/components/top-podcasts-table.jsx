import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const topPodcasts = [
  {
    id: 1,
    title: "Tech Today",
    creator: "Marie Dupont",
    category: "Technologie",
    listens: 12453,
    growth: "+12%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Histoire Secrète",
    creator: "Jean Martin",
    category: "Histoire",
    listens: 9876,
    growth: "+8%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "Science Expliquée",
    creator: "Sophie Leclerc",
    category: "Science",
    listens: 8765,
    growth: "+15%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Business Insights",
    creator: "Pierre Dubois",
    category: "Business",
    listens: 7654,
    growth: "+5%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    title: "Méditation Guidée",
    creator: "Claire Blanc",
    category: "Bien-être",
    listens: 6543,
    growth: "+20%",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TopPodcastsTable() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 text-xs font-medium text-muted-foreground">
        <div>Podcast</div>
        <div>Catégorie</div>
        <div className="text-right">Écoutes</div>
        <div className="text-right">Croissance</div>
      </div>
      <div className="space-y-2">
        {topPodcasts.map((podcast) => (
          <div key={podcast.id} className="grid grid-cols-4 items-center gap-4 rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={podcast.avatar || "/placeholder.svg"} alt={podcast.title} />
                <AvatarFallback>{podcast.title.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{podcast.title}</div>
                <div className="text-xs text-muted-foreground">{podcast.creator}</div>
              </div>
            </div>
            <div>
              <Badge variant="outline">{podcast.category}</Badge>
            </div>
            <div className="text-right font-medium">{podcast.listens.toLocaleString()}</div>
            <div className="text-right text-green-500 font-medium">{podcast.growth}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
s