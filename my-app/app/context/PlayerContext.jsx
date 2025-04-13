import { createContext, useState } from 'react';

// Création du contexte du lecteur audio
export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false); // État pour savoir si un épisode est en lecture
  const [currentTrack, setCurrentTrack] = useState(null); // État pour suivre la piste en cours

  const play = (track) => {
    setCurrentTrack(track); // Définir la nouvelle piste
    setIsPlaying(true); // Lancer la lecture
  };

  const pause = () => {
    setIsPlaying(false); // Mettre la lecture en pause
  };

  const stop = () => {
    setIsPlaying(false); // Arrêter la lecture
    setCurrentTrack(null); // Réinitialiser la piste
  };

  // Retourne le provider avec les méthodes de contrôle du lecteur et l'état du lecteur
  return (
    <PlayerContext.Provider value={{ isPlaying, currentTrack, play, pause, stop }}>
      {children}
    </PlayerContext.Provider>
  );
}
