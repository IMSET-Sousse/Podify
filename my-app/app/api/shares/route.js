import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { episodeId, platform } = body

    if (!episodeId || !platform) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 })
    }

    // Dans une vraie application, vous pourriez enregistrer les statistiques de partage
    // Pour l'exemple, nous simulons une réponse réussie
    return NextResponse.json(
      {
        success: true,
        message: `Épisode partagé avec succès sur ${platform}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erreur lors du partage:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
