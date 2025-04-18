"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { MessageSquare } from "lucide-react"

export default function CommentSection({ episodeId, comments = [] }) {
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [localComments, setLocalComments] = useState(comments)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!newComment.trim() || !userName.trim()) {
      setError("Veuillez remplir tous les champs")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch(`/api/comments?episodeId=${episodeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          content: newComment,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setLocalComments([...localComments, data.comment])
        setNewComment("")
        // On garde le nom d'utilisateur pour faciliter les commentaires multiples
      } else {
        const error = await response.json()
        setError(error.message || "Une erreur est survenue")
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du commentaire:", error)
      setError("Une erreur est survenue lors de l'envoi du commentaire")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fonction pour obtenir les initiales à partir du nom
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare size={24} />
        Commentaires ({localComments.length})
      </h2>

      {/* Formulaire de commentaire */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <Input
            placeholder="Votre nom"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mb-2"
          />
          <Textarea
            placeholder="Partagez vos pensées sur cet épisode..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Publier un commentaire"}
        </Button>
      </form>

      {/* Liste des commentaires */}
      <div className="space-y-6">
        {localComments.length > 0 ? (
          localComments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar>
                <AvatarFallback>{getInitials(comment.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{comment.name}</h4>
                  <span className="text-xs text-muted-foreground">{formatDate(comment.date)}</span>
                </div>
                <p className="text-muted-foreground">{comment.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground py-4">Soyez le premier à commenter cet épisode !</p>
        )}
      </div>
    </div>
  )
}
