import Image from "next/image"
import { Card, CardContent } from "../../components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Hela Garnaoui",
      role: "Fondatrice & CEO",
      bio: "Passionnée de podcasts depuis 3 ans, Hela a créé Podify pour rendre les podcasts plus accessibles à tous.",
      image: "/images/me.jpg",
    },
    {
      id: 2,
      name: "Farah zayani",
      role: "Développeur Frontend",
      bio: "Expert en expérience utilisateur, Farah s'assure que Podify soit intuitif et agréable à utiliser.",
      image: "/images/1715286505946 (2).jpg",
    },
    {
      id: 3,
      name: "Ameni Ghorbel",
      role: "Designer UX/UI",
      bio: "Ameni apporte son œil créatif pour concevoir une interface élégante et fonctionnelle.",
      image: "/images/Screenshot_20241124_103324_com_hihonor_photos_SlotAlbumActivity.jpg",
    },
    {
      id: 4,
      name: "Mooteaz khathraoui",
      role: "Responsable Contenu",
      bio: "Grand amateur de podcasts, Mooteaz sélectionne et organise les contenus pour vous faire découvrir de nouvelles pépites.",
      image: "/images/IMG_2444.jpg",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Section Mission */}
      <section className="mb-16">
        {/* Section Présentation rapide */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Podify est la plateforme Tunisienne dédiée à la découverte, l'écoute et le partage de podcasts. Notre équipe passionnée travaille chaque jour pour rendre l'audio accessible à tous, soutenir les créateurs, et offrir la meilleure expérience utilisateur possible.
          </p>
        </div>
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
            <Image src="/images/creator1.jpg" alt="Podify mission" fill className="object-cover" />
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

      {/* Section Fonctionnalités */}
      <section className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Fonctionnalités Clés</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold text-lg mb-2">Découverte intelligente</h3>
            <p className="text-muted-foreground">Explorez des podcasts populaires ou confidentiels selon vos goûts, grâce à nos recommandations personnalisées.</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold text-lg mb-2">Interface intuitive</h3>
            <p className="text-muted-foreground">Naviguez facilement, créez vos playlists, et retrouvez vos épisodes favoris en un clic.</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <h3 className="font-bold text-lg mb-2">Soutien aux créateurs</h3>
            <p className="text-muted-foreground">Podify met en avant les créateurs et leur permet de toucher une audience plus large.</p>
          </div>
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

      {/* Section Histoire */}
      <section className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center text-muted-foreground">
          <p>
            Podify est né en 2023 de la volonté de démocratiser l’accès au podcast en Tunisie. Après avoir constaté le manque de plateformes centrées sur l’audio et la difficulté pour les créateurs de se faire connaître, notre équipe s’est lancée dans l’aventure. Grâce à vos retours et à notre passion, Podify évolue chaque jour !
          </p>
        </div>
      </section>

      {/* Section Contact & Réseaux sociaux */}
      <section className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact & Réseaux sociaux</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground">Une question ? Un partenariat ? Contactez-nous à <a href="mailto:contact@podify.fr" className="text-primary underline">contact@podify.fr</a></p>
          <div className="flex gap-6 mt-2">
            <a href="https://twitter.com/podify" target="_blank" rel="noopener" className="hover:text-primary">Twitter</a>
            <a href="https://facebook.com/podify" target="_blank" rel="noopener" className="hover:text-primary">Facebook</a>
            <a href="https://instagram.com/podify" target="_blank" rel="noopener" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="mt-20 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FAQ</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Podify est-il gratuit ?</h3>
            <p className="text-muted-foreground">Oui, l’accès à Podify est gratuit pour tous les auditeurs. Certaines fonctionnalités avancées pourront être proposées ultérieurement.</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Comment proposer mon podcast sur Podify ?</h3>
            <p className="text-muted-foreground">Contactez-nous à <a href="mailto:podcast@podify.fr" className="text-primary underline">podcast@podify.fr</a> avec le flux RSS de votre émission.</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Où puis-je écouter Podify ?</h3>
            <p className="text-muted-foreground">Podify est accessible sur le web, et bientôt via nos applications mobiles.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
