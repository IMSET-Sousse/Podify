import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect
import useAuth from '@app/hooks/useAuth'; // Import du hook personnalisé pour l'authentification

export default function UserPlaylists() {
  const [playlists, setPlaylists] = useState([]); // État pour stocker les playlists de l'utilisateur
  const { user } = useAuth(); // Accès aux informations de l'utilisateur authentifié

  // Effet pour récupérer les playlists de l'utilisateur
  useEffect(() => {
    if (user) {
      setPlaylists([
        { id: 1, name: 'Playlist A' },
        { id: 2, name: 'Playlist B' },
      ]);
    }
  }, [user]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Mes Playlists</h2>
      <ul className="mt-4">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="mb-4">
            <div className="flex items-center">
              <span className="text-xl">{playlist.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
