"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"

export default function ShareButtons({ episodeId, title }) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  // Construire l'URL complète de l'épisode
  const episodeUrl =
    typeof window !== "undefined" ? `${window.location.origin}/episodes/${episodeId}` : `/episodes/${episodeId}`

  // Fonction pour copier l'URL dans le presse-papier
  const copyToClipboard = () => {
    navigator.clipboard.writeText(episodeUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast({
        title: "Lien copié",
        description: "L'URL a été copiée dans le presse-papier.",
      })
    })
  }

  // Fonction pour enregistrer le partage
  const logShare = async (platform) => {
    try {
      await fetch("/api/shares", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          episodeId,
          platform,
        }),
      })
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du partage:", error)
    }
  }

  // Préparer le texte de partage
  const shareText = `Écoutez "${title}" sur Podify`

  // URLs de partage pour les réseaux sociaux
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(episodeUrl)}`
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(episodeUrl)}`
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(episodeUrl)}`

  // Fonction pour ouvrir la fenêtre de partage
  const shareOnSocial = (url, platform) => {
    window.open(url, "_blank", "width=600,height=400")
    logShare(platform)
    toast({
      title: "Contenu partagé",
      description: `Vous avez partagé cet épisode sur ${platform}.`,
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2 items-center">
          <Share2 size={16} />
          <span>Partager</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => shareOnSocial(facebookShareUrl, "Facebook")}
            aria-label="Partager sur Facebook"
          >
            <Facebook size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => shareOnSocial(twitterShareUrl, "Twitter")}
            aria-label="Partager sur Twitter"
          >
            <Twitter size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => shareOnSocial(linkedinShareUrl, "LinkedIn")}
            aria-label="Partager sur LinkedIn"
          >
            <Linkedin size={18} />
          </Button>
          <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copier le lien">
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
