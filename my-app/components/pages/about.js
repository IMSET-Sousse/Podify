import Head from "next/head"
import Image from "next/image"
import Layout from "../components/Layout"
import { Card, CardContent } from "../components/ui/card"

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Fondatrice & CEO",
      bio: "Passionnée de podcasts depuis 10 ans, Sophie a créé Podify pour rendre les podcasts plus accessibles à tous.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Développeur Frontend",
      bio: "Expert en expérience utilisateur, Thomas s'assure que Podify soit intuitif et agréable à utiliser.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Léa Bernard",
      role: "Designer UX/UI",
      bio: "Léa apporte son œil créatif pour concevoir une interface élégante et fonctionnelle.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Karim Benali",
      role: "Responsable Contenu",
      bio: "Grand amateur de podcasts, Karim sélectionne et organise les contenus pour vous faire découvrir de nouvelles pépites.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <Layout>
      <Head>
        <title>À Propos - Podify</title>
        <meta name="description" content="Découvrez l'histoire et l'équipe derrière Podify" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Section Mission */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">À Propos de Podify</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
              <p className="text-muted-foreground mb-4">
                Podify est né d'une passion pour les podcasts et d'une vision simple : créer une plateforme dédiée
                exclusivement aux podcasts, où les auditeurs peuvent facilement découvrir, écouter et partager leur
                contenu audio préféré.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre objectif est de connecter les créateurs de podcasts avec leur audience, tout en offrant une
                expérience d'écoute fluide et personnalisée. Nous croyons au pouvoir des histoires audio et à leur
                capacité à éduquer, divertir et inspirer.
              </p>
              <p className="text-muted-foreground">
                Avec Podify, nous voulons démocratiser l'accès aux podcasts et soutenir les créateurs de contenu audio
                dans leur développement.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Podify mission" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Derrière Podify se trouve une équipe passionnée, dédiée à créer la meilleure expérience possible pour les
              amateurs de podcasts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section Valeurs */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4" />
                  <path d="M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4" />
                  <path d="M21 15H3" />
                  <path d="M9 15v-4" />
                  <path d="M15 15v-4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Accessibilité</h3>
              <p className="text-muted-foreground">
                Nous croyons que les podcasts devraient être accessibles à tous, peu importe où et quand vous souhaitez
                les écouter.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m7 10 2 2 6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Qualité</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à offrir une expérience d'écoute de haute qualité et à mettre en avant des contenus
                pertinents.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 6.1H3" />
                  <path d="M21 12.1H3" />
                  <path d="M15.1 18H3" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Simplicité</h3>
              <p className="text-muted-foreground">
                Nous privilégions une interface simple et intuitive pour que vous puissiez vous concentrer sur ce qui
                compte : le contenu.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
