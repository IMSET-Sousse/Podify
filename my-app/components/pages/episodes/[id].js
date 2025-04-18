"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/Layout"
import CommentSection from "../../components/CommentSection"
import ShareButtons from "../../components/ShareButtons"
import AudioPlayer from "../../components/AudioPlayer"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Separator } from "../../components/ui/separator"
import { Heart, MessageSquare, Clock, Calendar } from "lucide-react"
import { getEpisodeById, getAllEpisodes } from "../../lib/data"

export default function EpisodeDetail({ episode }) {
  const router = useRouter()
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(episode?.likes || 0)

  // Gérer le cas où l'épisode est en cours de chargement ou n'existe pas
  if (router.isFallback || !episode) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <p>Chargement de l'épisode...</p>
        </div>
      </Layout>
    )
  }

  const handleLike = async () => {
    try {
      // Simuler une requête API
      const response = await fetch(`/api/likes?episodeId=${episode.id}`, {
        method: "POST",
      })

      if (response.ok) {
        setLiked(!liked)
        setLikeCount(liked ? likeCount - 1 : likeCount + 1)
      }
    } catch (error) {
      console.error("Erreur lors du like:", error)
    }
  }

  return (
    <Layout>
      <Head>
        <title>{episode.title} - Podify</title>
        <meta name="description" content={episode.description.substring(0, 160)} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de l'épisode */}
          <div className="mb-8">
            <Badge className="mb-4">{episode.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{episode.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{episode.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{episode.duration}</span>
              </div>
            </div>
          </div>

          {/* Image et lecteur audio */}
          <div className="mb-8">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden mb-6">
              <Image src={episode.image || "/placeholder.svg"} alt={episode.title} fill className="object-cover" />
            </div>
            <AudioPlayer />
          </div>

          {/* Actions sociales */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                className="flex gap-2 items-center"
                onClick={handleLike}
              >
                <Heart size={16} className={liked ? "fill-white" : ""} />
                <span>{likeCount}</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2 items-center">
                <MessageSquare size={16} />
                <span>{episode.comments.length}</span>
              </Button>
            </div>
            <ShareButtons episodeId={episode.id} title={episode.title} />
          </div>

          <Separator className="my-8" />

          {/* Description de l'épisode */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">À propos de cet épisode</h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground whitespace-pre-line">{episode.description}</p>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Section commentaires */}
          <CommentSection episodeId={episode.id} comments={episode.comments} />
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const episodes = getAllEpisodes()

  const paths = episodes.map((episode) => ({
    params: { id: episode.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const episode = getEpisodeById(Number.parseInt(params.id))

  if (!episode) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episode,
    },
    // Revalidate every hour
    revalidate: 3600,
  }
}
