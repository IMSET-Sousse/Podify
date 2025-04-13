'use client';
import { useState, useRef } from 'react';

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <button
        onClick={togglePlay}
        className="bg-blue-500 p-2 rounded-full hover:bg-blue-600"
      >
        {playing ? '⏸️' : '▶️'}
      </button>
      <audio ref={audioRef} src={src} />
      <p className="text-sm">Lecture en cours...</p>
    </div>
  );
}
