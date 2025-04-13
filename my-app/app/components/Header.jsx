'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg">
      <Link href="/" className="text-2xl font-bold animate-pulse">
        🎙️ Podify
      </Link>

      <nav className="space-x-4">
        <Link href="/search">Explorer</Link>
        <Link href="/playlists">Playlists</Link>
        <Link href="/user">Mon Compte</Link>

        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Déconnexion
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
          >
            Connexion
          </Link>
        )}
      </nav>
    </header>
  );
}
