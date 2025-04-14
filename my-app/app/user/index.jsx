import Link from 'next/link'; // Import du composant Link pour la navigation entre les pages

export default function UserDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Mon Espace</h2>
      <ul className="mt-4 space-y-2">
        <li>• <Link href="/user/playlists"><a>Mes Playlists</a></Link></li>
        <li>• <Link href="/user/favorites"><a>Mes Favoris</a></Link></li>
        <li>• <Link href="/user/settings"><a>Paramètres du compte</a></Link></li>
        <li>• <Link href="/user/subscriptions"><a>Mes Abonnements</a></Link></li>
      </ul>
    </div>
  );
}
