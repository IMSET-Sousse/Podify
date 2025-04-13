import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import de la fonction Firebase pour l'inscription
import { auth } from '../../lib/firebase'; // Import de la configuration Firebase

// Fonction pour gérer l'inscription d'un utilisateur
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body; // Récupère l'email et le mot de passe du corps de la requête

    try {
      // Tentative de création de l'utilisateur avec les identifiants
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Récupère l'utilisateur créé

      // Réponse avec les informations de l'utilisateur (hors mot de passe)
      res.status(200).json({ uid: user.uid, email: user.email });
    } catch (error) {
      // En cas d'erreur, renvoie un message d'erreur
      res.status(400).json({ error: error.message });
    }
  } else {
    // Si la méthode HTTP n'est pas POST, renvoie une erreur
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
