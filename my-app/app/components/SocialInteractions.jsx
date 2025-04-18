"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import LikeButton from "./LikeButton"
import ShareButtons from "./ShareButtons"
import CommentSection from "./CommentSection"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialInteractions({ episode }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="space-y-6">
      {/* Actions sociales */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <LikeButton episodeId={episode.id} initialLikes={episode.likes || 0} />
          <Button
            variant="outline"
            size="sm"
            className="flex gap-2 items-center"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare size={16} />
            <span>{episode.comments?.length || 0}</span>
          </Button>
        </div>
        <ShareButtons episodeId={episode.id} title={episode.title} />
      </div>

      <Separator />

      {/* Section commentaires (conditionnelle) */}
      {showComments && (
        <>
          <CommentSection episodeId={episode.id} initialComments={episode.comments || []} />
          <Separator />
        </>
      )}
    </div>
  )
}
