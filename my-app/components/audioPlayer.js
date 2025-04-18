"use client"

import { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from "lucide-react"

export default function AudioPlayer() {
  // États pour le lecteur audio
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  // Référence à l'élément audio
  const audioRef = useRef(null)

  // Fonction pour formater le temps en mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Gérer le play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Gérer le changement de position dans l'audio
  const handleTimeChange = (value) => {
    const newTime = value[0]
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Gérer le changement de volume
  const handleVolumeChange = (value) => {
    const newVolume = value[0]
    audioRef.current.volume = newVolume
    setVolume(newVolume)

    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  // Gérer le mute/unmute
  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  // Mettre à jour le temps actuel pendant la lecture
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  // Définir la durée une fois les métadonnées chargées
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  // Avancer de 10 secondes
  const skipForward = () => {
    audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration)
  }

  // Reculer de 10 secondes
  const skipBackward = () => {
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0)
  }

  // Icône de volume en fonction du niveau
  const VolumeIcon = isMuted ? VolumeX : volume > 0.5 ? Volume2 : Volume1

  return (
    <div className="bg-card border rounded-lg p-4">
      {/* Élément audio caché */}
      <audio
        ref={audioRef}
        src="/placeholder-audio.mp3" // Remplacer par l'URL réelle de l'audio
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Contrôles principaux */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <Button variant="ghost" size="icon" onClick={skipBackward} aria-label="Reculer de 10 secondes">
          <SkipBack size={20} />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Lecture"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={skipForward} aria-label="Avancer de 10 secondes">
          <SkipForward size={20} />
        </Button>
      </div>

      {/* Barre de progression */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground w-12 text-right">{formatTime(currentTime)}</span>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={handleTimeChange}
          className="flex-1"
          aria-label="Progression de la lecture"
        />
        <span className="text-sm text-muted-foreground w-12">{formatTime(duration)}</span>
      </div>

      {/* Contrôle du volume */}
      <div className="flex items-center gap-2 mt-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
        >
          <VolumeIcon size={18} />
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          max={1}
          step={0.01}
          onValueChange={handleVolumeChange}
          className="w-24"
          aria-label="Volume"
        />
      </div>
    </div>
  )
}
