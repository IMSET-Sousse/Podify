import { toggleLike, getEpisodeById } from "../../lib/data"

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
    case "POST":
      try {
        // Dans une vraie application, on utiliserait l'ID de l'utilisateur
        // Pour simplifier, on incrémente/décrémente simplement le compteur
        const updatedLikes = toggleLike(Number.parseInt(episodeId))

        return res.status(200).json({ success: true, likes: updatedLikes })
      } catch (error) {
        console.error("Erreur lors du like:", error)
        return res.status(500).json({ error: "Erreur serveur" })
      }

    default:
      return res.status(405).json({ error: "Méthode non autorisée" })
  }
}
