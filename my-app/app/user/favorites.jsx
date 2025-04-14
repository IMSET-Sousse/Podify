import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect
import useAuth from '@app/hooks/useAuth'; // Import du hook personnalisé pour l'authentification

export default function UserFavorites() {
  const [favorites, setFavorites] = useState([]); // État pour stocker les podcasts favoris
  const { user } = useAuth(); // Accès aux informations de l'utilisateur authentifié

  // Effet pour récupérer les podcasts favoris de l'utilisateur
  useEffect(() => {
    if (user) {
      setFavorites([
        { id: 1, name: 'Podcast 1' },
        { id: 2, name: 'Podcast 2' },
      ]);
    }
  }, [user]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Mes Podcasts Favoris</h2>
      <ul className="mt-4">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li key={favorite.id} className="mb-4">
              <div className="flex items-center">
                <span className="text-xl">{favorite.name}</span>
              </div>
            </li>
          ))
        ) : (
          <p>Aucun podcast favori ajouté.</p>
        )}
      </ul>
    </div>
  );
}
