import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { episodeId } = body

    if (!episodeId) {
      return NextResponse.json({ error: "ID de l'épisode manquant" }, { status: 400 })
    }

    // Dans une vraie application, vous stockeriez ceci dans une base de données
    // Pour l'exemple, nous simulons une réponse réussie
    return NextResponse.json({ success: true, likes: Math.floor(Math.random() * 100) + 1 }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors du like:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
