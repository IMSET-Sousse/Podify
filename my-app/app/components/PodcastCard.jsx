import Link from 'next/link';

export default function PodcastCard({ podcast }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:scale-105 transition transform duration-200">
      <img src={podcast.image} alt={podcast.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{podcast.title}</h3>
        <p className="text-gray-600 text-sm mt-1 truncate">{podcast.publisher}</p>
        <Link
          href={`/podcast/${podcast.id}`}
          className="block mt-3 text-blue-600 hover:underline"
        >
          Écouter
        </Link>
      </div>
    </div>
  );
}
