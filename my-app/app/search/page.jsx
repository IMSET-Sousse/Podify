import { useState } from 'react'; // Utilisation du hook useState pour gérer l'état de la recherche
import { usePlayer } from '@app/hooks/usePlayer';
import api from '@app/lib/listenNotesApi'; // Utilisation de l'API ListenNotes pour récupérer les podcasts
import '@/styles/globals.css'; // Correct path for index.jsx in the pages folder

export default function Search() {
  const [query, setQuery] = useState(''); // État pour la recherche de podcast
  const [results, setResults] = useState([]); // État pour stocker les résultats de la recherche
  const { playPodcast } = usePlayer(); // Utilisation du hook usePlayer pour contrôler la lecture des podcasts

  // Fonction pour effectuer la recherche de podcasts
  const handleSearch = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page à l'envoi du formulaire
    try {
      // Envoie une requête à l'API ListenNotes avec la requête de recherche
      const response = await api.get('/search', {
        params: { q: query, type: 'podcast' },
      });
      setResults(response.data.results); // Met à jour les résultats avec les podcasts reçus
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Recherche de Podcasts</h2>
      <form onSubmit={handleSearch} className="mt-4">
        <input
          type="text"
          placeholder="Rechercher un podcast"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Met à jour l'état de la requête
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Rechercher
        </button>
      </form>

      {/* Affichage des résultats de recherche */}
      <div className="mt-6">
        {results.length > 0 ? (
          <ul>
            {results.map((podcast) => (
              <li key={podcast.id} className="mb-4">
                <div className="flex items-center">
                  <img src={podcast.image} alt={podcast.title} className="w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">{podcast.title}</h3>
                    <p>{podcast.publisher}</p>
                    {/* Bouton pour écouter le podcast */}
                    <button
                      onClick={() => playPodcast(podcast.id)} // Démarre la lecture du podcast
                      className="text-blue-500 mt-2"
                    >
                      Écouter
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </div>
    </div>
  );
}
