import { useState } from 'react';

const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPodcast, setCurrentPodcast] = useState(null);

  const playPodcast = (podcast) => {
    setCurrentPodcast(podcast);
    setIsPlaying(true);
  };

  const stopPodcast = () => {
    setIsPlaying(false);
  };

  return { playPodcast, stopPodcast, isPlaying, currentPodcast };
};

export default usePlayer;
