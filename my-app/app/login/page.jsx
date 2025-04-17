import { useState } from 'react'; // Utilisation du hook useState pour gérer les champs du formulaire

export default function Login() {
  const [email, setEmail] = useState(''); // Champ email
  const [password, setPassword] = useState(''); // Champ mot de passe
  const [error, setError] = useState(''); // État pour afficher les erreurs

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    try {
      // Simulation de l'appel d'une API pour l'authentification
      // Remplacer par l'appel réel à l'API
      if (email === 'test@podify.com' && password === '123456') {
        // Redirection vers la page d'accueil après une connexion réussie
        window.location.href = '/';
      } else {
        setError('Email ou mot de passe incorrect.');
      }
    } catch (error) {
      setError('Erreur lors de la connexion.');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Connexion</h2>
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
        {error && <p className="text-red-500">{error}</p>} {/* Affichage des erreurs */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Se connecter
        </button>
      </form>
    </div>
  );
}
