import Link from 'next/link'; // Import Link to enable navigation within the app
import '../styles/globals.css';
import Footer from './components/Footer'; // Import Footer component

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center p-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Bienvenue sur Podify 🎙️</h1>
        <p className="mt-4 text-xl text-gray-700">
          Explorez, écoutez et gérez vos podcasts favoris sur notre plateforme.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Découvrez les podcasts les plus populaires, créez vos propres playlists et restez à jour avec vos podcasts favoris !
        </p>

        <div className="mt-8">
          <Link href="/search">
            <span className="text-blue-500 hover:underline text-lg">Chercher des podcasts</span>
          </Link>
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-gray-900">Podcasts en vedette</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Podcast 1</h3>
            <p className="text-gray-600 mt-2">
              Explorez ce podcast captivant qui parle de la culture moderne et de la technologie.
            </p>
            <Link href="/podcast/1" className="text-blue-500 hover:underline mt-2 inline-block">
              Voir le podcast
            </Link>
          </div>

          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Podcast 2</h3>
            <p className="text-gray-600 mt-2">
              Un podcast dédié aux interviews de personnalités influentes dans l'industrie musicale.
            </p>
            <Link href="/podcast/2" className="text-blue-500 hover:underline mt-2 inline-block">
              Voir le podcast
            </Link>
          </div>

          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Podcast 3</h3>
            <p className="text-gray-600 mt-2">
              Un podcast éducatif sur l'environnement et la durabilité.
            </p>
            <Link href="/podcast/3" className="text-blue-500 hover:underline mt-2 inline-block">
              Voir le podcast
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700">Rejoignez Podify dès maintenant et commencez à écouter vos podcasts préférés !</p>
          <div className="mt-4">
            <Link href="/login" className="text-blue-500 hover:underline mr-4">Se connecter</Link>
            <Link href="/register" className="text-blue-500 hover:underline">S'inscrire</Link>
          </div>
        </div>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
}
