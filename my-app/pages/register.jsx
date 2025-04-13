import { useState } from 'react'; // Utilisation du hook useState pour gérer les champs du formulaire

export default function Register() {
  const [email, setEmail] = useState(''); // Champ email
  const [password, setPassword] = useState(''); // Champ mot de passe
  const [confirmPassword, setConfirmPassword] = useState(''); // Champ confirmation du mot de passe
  const [error, setError] = useState(''); // État pour afficher les erreurs

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    try {
      // Simulation de l'appel d'une API pour l'enregistrement
      // Remplacer par l'appel réel à l'API
      window.location.href = '/login'; // Redirige vers la page de connexion après l'inscription
    } catch (error) {
      setError('Erreur lors de l\'inscription.');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Inscription</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Mise à jour du champ email
          className="border p-2 rounded mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Mise à jour du champ mot de passe
          className="border p-2 rounded mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Mise à jour du champ de confirmation
          className="border p-2 rounded mb-4 w-full"
        />
        {error && <p className="text-red-500">{error}</p>} {/* Affichage des erreurs */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
