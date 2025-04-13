import Link from 'next/link'; // Import du composant Link pour la navigation entre les pages

export default function AdminDashboard() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold">Tableau de bord Admin</h2>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Gestion des utilisateurs</h3>
        {/* Lien vers la gestion des utilisateurs */}
        <Link href="/admin/users">
          <a className="text-blue-500 mt-2 inline-block">Voir tous les utilisateurs</a>
        </Link>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Gestion des podcasts</h3>
        {/* Lien vers la gestion des podcasts */}
        <Link href="/admin/podcasts">
          <a className="text-blue-500 mt-2 inline-block">Voir tous les podcasts</a>
        </Link>
      </div>
    </div>
  );
}
