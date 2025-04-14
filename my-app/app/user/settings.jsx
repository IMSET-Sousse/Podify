import { useState } from 'react'; // Import du hook useState

export default function UserSettings() {
  const [username, setUsername] = useState(''); // Champ pour le nom d'utilisateur
  const [email, setEmail] = useState(''); // Champ pour l'email
  const [password, setPassword] = useState(''); // Champ pour le mot de passe
  const [error, setError] = useState(''); // État pour afficher les erreurs

  // Fonction pour gérer la soumission des modifications
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simuler un appel API pour mettre à jour les informations de l'utilisateur
      // Remplacer par un appel réel à l'API
      alert('Informations mises à jour avec succès!');
    } catch (error) {
      setError('Erreur lors de la mise à jour.');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Paramètres du Compte</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Mise à jour du champ nom d'utilisateur
          className="border p-2 rounded mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Mise à jour du champ email
          className="border p-2 rounded mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Mise à jour du champ mot de passe
          className="border p-2 rounded mb-4 w-full"
        />
        {error && <p className="text-red-500">{error}</p>} {/* Affichage des erreurs */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Mettre à jour
        </button>
      </form>
    </div>
  );
}
