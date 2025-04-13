import { createContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase'; // Import de la configuration Firebase pour l'authentification
import { onAuthStateChanged } from 'firebase/auth';

// Création du contexte d'authentification
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur actuel
  const [loading, setLoading] = useState(true); // État pour gérer le chargement de l'authentification

  useEffect(() => {
    // Suivi de l'état de l'utilisateur en temps réel
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Met à jour l'utilisateur quand l'état change
      setLoading(false); // Lorsque l'état est chargé, met fin au chargement
    });

    return () => unsubscribe(); // Nettoyage lors du démontage du composant
  }, []);

  // Retourne le provider avec la valeur du contexte
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
