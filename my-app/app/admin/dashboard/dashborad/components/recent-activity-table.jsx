import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentActivities = [
  {
    id: 1,
    user: {
      name: "Thomas Bernard",
      email: "thomas@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "a publié un nouveau podcast",
    target: "Science Expliquée #45",
    time: "Il y a 10 minutes",
    type: "podcast",
  },
  {
    id: 2,
    user: {
      name: "Émilie Rousseau",
      email: "emilie@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "a signalé un commentaire",
    target: "sur Tech Today #12",
    time: "Il y a 25 minutes",
    type: "report",
  },
  {
    id: 3,
    user: {
      name: "Lucas Petit",
      email: "lucas@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "s'est abonné au niveau Premium",
    target: "",
    time: "Il y a 1 heure",
    type: "subscription",
  },
  {
    id: 4,
    user: {
      name: "Camille Durand",
      email: "camille@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "a fait un don de €15",
    target: "à Histoire Secrète",
    time: "Il y a 2 heures",
    type: "donation",
  },
  {
    id: 5,
    user: {
      name: "Antoine Moreau",
      email: "antoine@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    action: "a créé une nouvelle playlist",
    target: "Mes favoris tech",
    time: "Il y a 3 heures",
    type: "playlist",
  },
]

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "podcast":
      return "default"
    case "report":
      return "destructive"
    case "subscription":
      return "purple"
    case "donation":
      return "green"
    case "playlist":
      return "blue"
    default:
      return "secondary"
  }
}

const getBadgeText = (type: string) => {
  switch (type) {
    case "podcast":
      return "Nouveau Podcast"
    case "report":
      return "Signalement"
    case "subscription":
      return "Abonnement"
    case "donation":
      return "Don"
    case "playlist":
      return "Playlist"
    default:
      return type
  }
}

export function RecentActivityTable() {
  return (
    <div className="space-y-4">
      {recentActivities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4 rounded-lg border p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{activity.user.name}</p>
              <Badge variant={getBadgeVariant(activity.type) as any}>{getBadgeText(activity.type)}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {activity.action} {activity.target}
            </p>
          </div>
          <div className="text-sm text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
