import Link from 'next/link'; // Import Link to enable navigation within the app
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Bienvenue sur Podify 🎙️</h1>
      <p className="mt-4 text-xl">
        Explorez, écoutez et gérez vos podcasts favoris sur notre plateforme.
      </p>

      <p className="mt-4 text-lg">
        Découvrez les podcasts les plus populaires, créez vos propres playlists et restez à jour avec vos podcasts favoris !
      </p>

      <div className="mt-8">
      <Link href="/search">
  <span className="text-blue-500 hover:underline">Chercher des podcasts</span>
          </Link>

      </div>

      <h2 className="mt-12 text-2xl font-semibold">Podcasts en vedette</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-bold">Podcast 1</h3>
          <p>Explorez ce podcast captivant qui parle de la culture moderne et de la technologie.</p>
          <Link href="/podcast/1" className="text-blue-500 hover:underline">Voir le podcast</Link>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-bold">Podcast 2</h3>
          <p>Un podcast dédié aux interviews de personnalités influentes dans l'industrie musicale.</p>
          <Link href="/podcast/2" className="text-blue-500 hover:underline">Voir le podcast</Link>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-bold">Podcast 3</h3>
          <p>Un podcast éducatif sur l'environnement et la durabilité.</p>
          <Link href="/podcast/3" className="text-blue-500 hover:underline">Voir le podcast</Link>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg">Rejoignez Podify dès maintenant et commencez à écouter vos podcasts préférés !</p>
        <div className="mt-4">
          <Link href="/login" className="text-blue-500 hover:underline mr-4">Se connecter</Link>
          <Link href="/register" className="text-blue-500 hover:underline">S'inscrire</Link>
        </div>
      </div>
    </div>
  );
}
