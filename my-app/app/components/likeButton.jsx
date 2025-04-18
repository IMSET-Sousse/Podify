"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function LikeButton({ episodeId, initialLikes = 0 }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(initialLikes)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleLike = async () => {
    if (isLoading) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          episodeId,
        }),
      })

      if (response.ok) {
        const newLiked = !liked
        setLiked(newLiked)

        // Dans une vraie application, le serveur renverrait le nombre exact de likes
        // Ici, nous simulons simplement l'incrémentation/décrémentation
        setLikeCount((prevCount) => (newLiked ? prevCount + 1 : prevCount - 1))

        toast({
          title: newLiked ? "Épisode aimé" : "J'aime retiré",
          description: newLiked
            ? "Cet épisode a été ajouté à vos favoris."
            : "Cet épisode a été retiré de vos favoris.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de mettre à jour le statut de j'aime.",
        })
      }
    } catch (error) {
      console.error("Erreur lors du like:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur réseau s'est produite.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant={liked ? "default" : "outline"}
      size="sm"
      className="flex gap-2 items-center"
      onClick={handleLike}
      disabled={isLoading}
    >
      <Heart size={16} className={liked ? "fill-white" : ""} />
      <span>{likeCount}</span>
    </Button>
  )
}
