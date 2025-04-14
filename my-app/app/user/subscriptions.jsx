import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect
import useAuth from '@app/hooks/useAuth'; // Import du hook personnalisé pour l'authentification

export default function UserSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]); // État pour stocker les abonnements
  const { user } = useAuth(); // Accès aux informations de l'utilisateur authentifié

  // Effet pour récupérer les abonnements de l'utilisateur
  useEffect(() => {
    if (user) {
      setSubscriptions([
        { id: 1, name: 'Podcast A' },
        { id: 2, name: 'Podcast B' },
      ]);
    }
  }, [user]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Mes Abonnements</h2>
      <ul className="mt-4">
        {subscriptions.length > 0 ? (
          subscriptions.map((subscription) => (
            <li key={subscription.id} className="mb-4">
              <div className="flex items-center">
                <span className="text-xl">{subscription.name}</span>
              </div>
            </li>
          ))
        ) : (
          <p>Aucun abonnement trouvé.</p>
        )}
      </ul>
    </div>
  );
}
