import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { episodeId, name, content } = body

    // Validation des données
    if (!episodeId || !name || !content) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 })
    }

    // Dans une vraie application, vous stockeriez ceci dans une base de données
    // Pour l'exemple, nous simulons une réponse réussie
    const newComment = {
      id: Date.now(),
      episodeId,
      name,
      content,
      date: new Date().toISOString(),
    }

    return NextResponse.json({ success: true, comment: newComment }, { status: 201 })
  } catch (error) {
    console.error("Erreur lors de l'ajout du commentaire:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
