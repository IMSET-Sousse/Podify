import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect
import usePlayer from '../../app/hooks/usePlayer'; // Import du hook pour gérer la lecture des épisodes
import api from '../../app/lib/listenNotesApi'; // Import de l'API ListenNotes pour récupérer les épisodes

export default function Episode({ episodeId }) {
  const [episode, setEpisode] = useState(null); // État pour stocker les informations de l'épisode
  const { playEpisode } = usePlayer(); // Utilisation du hook pour jouer l'épisode

  // Effet pour récupérer les informations de l'épisode dès le chargement de la page
  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await api.get(`/episode`, { params: { id: episodeId } });
        setEpisode(response.data); // Met à jour les informations de l'épisode
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'épisode :', error);
      }
    };

    fetchEpisode();
  }, [episodeId]); // Relance l'effet si l'épisodeId change

  return (
    <div className="p-10">
      {episode ? (
        <div>
          <h2 className="text-3xl font-semibold">{episode.title}</h2>
          <p className="mt-2">{episode.publishedAt}</p>
          <img src={episode.image} alt={episode.title} className="mt-4 w-full max-w-xs" />
          <p className="mt-4">{episode.description}</p>
          {/* Bouton pour écouter l'épisode */}
          <button
            onClick={() => playEpisode(episode.id)} // Démarre la lecture de l'épisode
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Écouter
          </button>
        </div>
      ) : (
        <p>Chargement des informations de l'épisode...</p>
      )}
    </div>
  );
}

// Cette fonction permet de récupérer l'ID de l'épisode depuis les paramètres d'URL.
export async function getServerSideProps({ params }) {
  const { id } = params;
  return {
    props: { episodeId: id }, // Passe l'ID de l'épisode comme prop à la page
  };
}
