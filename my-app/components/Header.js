"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          Podify
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="/episodes" className="hover:text-primary transition-colors">
            Épisodes
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            À propos
          </Link>
        </nav>

        {/* Boutons de connexion desktop */}
        <div className="hidden md:flex gap-2">
          <Button variant="outline" size="sm">
            Se connecter
          </Button>
          <Button size="sm">S'inscrire</Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/episodes"
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Épisodes
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm">
                Se connecter
              </Button>
              <Button size="sm">S'inscrire</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
