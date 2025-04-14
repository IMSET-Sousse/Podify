import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect
import useAuth from '@app/hooks/useAuth'; // Import du hook personnalisé pour gérer l'authentification
import '../styles/globals.css';  // Make sure this points to the correct path

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]); // État pour stocker les playlists de l'utilisateur
  const { user } = useAuth(); // Accès aux informations de l'utilisateur authentifié

  // Effet pour récupérer les playlists de l'utilisateur lorsqu'il est authentifié
  useEffect(() => {
    if (user) {
      // Simulation d'une API pour récupérer les playlists de l'utilisateur
      setPlaylists([
        { id: 1, name: 'Playlist 1' },
        { id: 2, name: 'Playlist 2' },
      ]);
    }
  }, [user]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Mes Playlists</h2>
      <ul className="mt-4">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <li key={playlist.id} className="mb-4">
              <div className="flex items-center">
                <span className="text-xl">{playlist.name}</span>
              </div>
            </li>
          ))
        ) : (
          <p>Aucune playlist disponible.</p>
        )}
      </ul>
    </div>
  );
}
