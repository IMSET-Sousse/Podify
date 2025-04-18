import { NextResponse } from "next/server"

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const commentId = searchParams.get("id")

    if (!commentId) {
      return NextResponse.json({ error: "ID du commentaire manquant" }, { status: 400 })
    }

    // Dans une vraie application, vous supprimeriez le commentaire de la base de données
    // Pour l'exemple, nous simulons une réponse réussie
    return NextResponse.json({ success: true, message: "Commentaire supprimé avec succès" }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de la suppression du commentaire:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
