"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CommentSection({ episodeId, initialComments = [] }) {
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [comments, setComments] = useState(initialComments)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!newComment.trim() || !userName.trim()) {
      setError("Veuillez remplir tous les champs")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/comments/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          episodeId,
          name: userName,
          content: newComment,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setComments([...comments, data.comment])
        setNewComment("")
        toast({
          title: "Commentaire ajouté",
          description: "Votre commentaire a été publié avec succès.",
        })
      } else {
        const error = await response.json()
        setError(error.message || "Une erreur est survenue")
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible d'ajouter votre commentaire.",
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du commentaire:", error)
      setError("Une erreur est survenue lors de l'envoi du commentaire")
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur réseau s'est produite.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`/comments/delete?id=${commentId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setComments(comments.filter((comment) => comment.id !== commentId))
        toast({
          title: "Commentaire supprimé",
          description: "Le commentaire a été supprimé avec succès.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de supprimer le commentaire.",
        })
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du commentaire:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur réseau s'est produite.",
      })
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
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare size={24} />
        Commentaires ({comments.length})
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
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 group">
              <Avatar>
                <AvatarFallback>{getInitials(comment.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{comment.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{formatDate(comment.date)}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleDelete(comment.id)}
                    >
                      <Trash2 size={16} className="text-muted-foreground hover:text-destructive" />
                    </Button>
                  </div>
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
