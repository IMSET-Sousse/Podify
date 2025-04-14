import React from 'react';
import { AuthProvider } from '@/app/context/AuthContext';
import { PlayerProvider } from '@/app/context/PlayerContext';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer'; // Assuming you have a Footer component
import '../styles/globals.css';



export default function Layout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen p-4">
        <AuthProvider>
          <PlayerProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </PlayerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

