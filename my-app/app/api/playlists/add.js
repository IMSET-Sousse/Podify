import { db } from '../../lib/firebase'; // Import de la base de données Firebase (Firestore)
import { collection, addDoc } from 'firebase/firestore'; // Import des fonctions Firestore

// Fonction pour ajouter une playlist
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, userId } = req.body; // Récupère le titre de la playlist et l'ID de l'utilisateur

    try {
      // Tentative d'ajout d'une nouvelle playlist dans la base de données Firestore
      const docRef = await addDoc(collection(db, 'playlists'), {
        title,
        userId,
        createdAt: new Date(),
      });

      // Réponse avec l'ID de la playlist nouvellement créée
      res.status(200).json({ id: docRef.id });
    } catch (error) {
      // En cas d'erreur, renvoie un message d'erreur
      res.status(400).json({ error: error.message });
    }
  } else {
    // Si la méthode HTTP n'est pas POST, renvoie une erreur
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
