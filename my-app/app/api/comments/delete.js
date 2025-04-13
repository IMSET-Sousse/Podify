import { db } from '../../lib/firebase'; // Import de la base de données Firebase (Firestore)
import { doc, deleteDoc } from 'firebase/firestore'; // Import des fonctions Firestore

// Fonction pour supprimer un commentaire
export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { commentId } = req.body; // Récupère l'ID du commentaire à supprimer

    try {
      // Tentative de suppression du commentaire dans la base de données Firestore
      await deleteDoc(doc(db, 'comments', commentId));

      // Réponse indiquant que la suppression a réussi
      res.status(200).json({ message: 'Commentaire supprimé avec succès' });
    } catch (error) {
      // En cas d'erreur, renvoie un message d'erreur
      res.status(400).json({ error: error.message });
    }
  } else {
    // Si la méthode HTTP n'est pas DELETE, renvoie une erreur
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
