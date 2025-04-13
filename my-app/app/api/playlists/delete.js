import { db } from '../../lib/firebase'; // Import de la base de données Firebase (Firestore)
import { doc, deleteDoc } from 'firebase/firestore'; // Import des fonctions Firestore

// Fonction pour supprimer une playlist
export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { playlistId } = req.body; // Récupère l'ID de la playlist à supprimer

    try {
      // Tentative de suppression de la playlist dans la base de données Firestore
      await deleteDoc(doc(db, 'playlists', playlistId));

      // Réponse indiquant que la suppression a réussi
      res.status(200).json({ message: 'Playlist supprimée avec succès' });
    } catch (error) {
      // En cas d'erreur, renvoie un message d'erreur
      res.status(400).json({ error: error.message });
    }
  } else {
    // Si la méthode HTTP n'est pas DELETE, renvoie une erreur
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
