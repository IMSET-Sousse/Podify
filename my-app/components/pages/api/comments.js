import { addComment, getEpisodeById } from "../../lib/data"

export default function handler(req, res) {
  const { episodeId } = req.query

  if (!episodeId) {
    return res.status(400).json({ error: "ID de l'épisode manquant" })
  }

  // Vérifier si l'épisode existe
  const episode = getEpisodeById(Number.parseInt(episodeId))
  if (!episode) {
    return res.status(404).json({ error: "Épisode non trouvé" })
  }

  // Traiter les différentes méthodes HTTP
  switch (req.method) {
    case "GET":
      // Renvoyer les commentaires de l'épisode
      return res.status(200).json({ comments: episode.comments })

    case "POST":
      try {
        const { name, content } = req.body

        // Validation des données
        if (!name || !content) {
          return res.status(400).json({ error: "Nom et contenu requis" })
        }

        // Ajouter le commentaire
        const newComment = {
          id: Date.now(),
          name,
          content,
          date: new Date().toISOString(),
        }

        addComment(Number.parseInt(episodeId), newComment)

        return res.status(201).json({ success: true, comment: newComment })
      } catch (error) {
        console.error("Erreur lors de l'ajout du commentaire:", error)
        return res.status(500).json({ error: "Erreur serveur" })
      }

    default:
      return res.status(405).json({ error: "Méthode non autorisée" })
  }
}
