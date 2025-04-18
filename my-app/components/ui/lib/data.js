// Données simulées pour les épisodes
const episodes = [
    {
      id: 1,
      title: "L'avenir de l'intelligence artificielle",
      description:
        "Une discussion approfondie sur les tendances actuelles et futures de l'IA avec des experts du domaine.\n\nDans cet épisode, nous explorons comment l'intelligence artificielle transforme notre quotidien et les industries. Nos invités partagent leurs perspectives sur les avancées récentes en matière d'IA générative, d'apprentissage automatique et de vision par ordinateur.\n\nNous abordons également les questions éthiques liées à l'IA et comment les entreprises et les gouvernements peuvent collaborer pour établir des cadres réglementaires appropriés.",
      duration: "45 min",
      date: "12 avril 2023",
      category: "Technologie",
      image: "/placeholder.svg?height=400&width=400",
      likes: 24,
      comments: [
        {
          id: 1,
          name: "Marie Dupont",
          content: "Excellente discussion ! J'ai beaucoup appris sur les dernières avancées en IA.",
          date: "2023-04-15T14:32:00Z",
        },
        {
          id: 2,
          name: "Jean Martin",
          content: "Je serais curieux d'en savoir plus sur les implications éthiques de l'IA dans le domaine médical.",
          date: "2023-04-16T09:15:00Z",
        },
      ],
    },
    {
      id: 2,
      title: "Méditation guidée pour débutants",
      description:
        "Une séance de méditation guidée pour les débutants, avec des techniques simples pour commencer votre pratique.\n\nCet épisode est conçu pour vous aider à débuter votre parcours de méditation avec des instructions claires et accessibles. Notre expert en pleine conscience vous guide à travers des exercices de respiration et de concentration qui peuvent être pratiqués quotidiennement.\n\nVous découvrirez comment la méditation peut réduire le stress, améliorer votre concentration et favoriser un meilleur sommeil.",
      duration: "20 min",
      date: "5 mai 2023",
      category: "Bien-être",
      image: "/placeholder.svg?height=400&width=400",
      likes: 42,
      comments: [
        {
          id: 3,
          name: "Sophie Legrand",
          content: "Cette méditation m'a vraiment aidée à me détendre après une journée stressante. Merci !",
          date: "2023-05-06T18:45:00Z",
        },
      ],
    },
    {
      id: 3,
      title: "Histoire des civilisations anciennes",
      description:
        "Exploration des mystères et des réalisations des civilisations anciennes qui ont façonné notre monde.\n\nDans cet épisode fascinant, nous voyageons à travers le temps pour découvrir les secrets des grandes civilisations comme l'Égypte ancienne, la Mésopotamie, et les Mayas. Notre historien invité partage des anecdotes captivantes sur leurs innovations technologiques, leurs systèmes sociaux et leurs croyances religieuses.\n\nNous examinons également comment ces civilisations ont influencé notre monde moderne et ce que nous pouvons encore apprendre d'elles aujourd'hui.",
      duration: "60 min",
      date: "18 juin 2023",
      category: "Histoire",
      image: "/placeholder.svg?height=400&width=400",
      likes: 18,
      comments: [
        {
          id: 4,
          name: "Pierre Durand",
          content: "Passionnant ! J'aimerais un épisode spécifique sur les technologies hydrauliques des Romains.",
          date: "2023-06-20T11:22:00Z",
        },
        {
          id: 5,
          name: "Amina Benali",
          content: "Très instructif. Je ne savais pas que les Mayas avaient un système mathématique aussi avancé.",
          date: "2023-06-21T15:30:00Z",
        },
      ],
    },
    {
      id: 4,
      title: "Conseils pour entrepreneurs débutants",
      description:
        "Des conseils pratiques pour les entrepreneurs qui débutent leur aventure dans le monde des affaires.\n\nQue vous ayez une idée brillante ou que vous cherchiez simplement à vous lancer, cet épisode vous fournit des conseils concrets pour démarrer votre entreprise. Nos experts entrepreneurs partagent leurs expériences, leurs échecs et leurs succès.\n\nNous couvrons des sujets essentiels comme la validation d'idée, la recherche de financement, la constitution d'une équipe et les aspects juridiques à considérer.",
      duration: "35 min",
      date: "2 juillet 2023",
      category: "Business",
      image: "/placeholder.svg?height=400&width=400",
      likes: 31,
      comments: [],
    },
    {
      id: 5,
      title: "Recettes végétariennes faciles",
      description:
        "Découvrez des recettes végétariennes simples et délicieuses que vous pouvez préparer en moins de 30 minutes.\n\nNotre chef invité partage ses meilleures recettes végétariennes qui sont non seulement savoureuses mais aussi rapides à préparer. Parfait pour les personnes occupées qui souhaitent manger sainement sans passer des heures en cuisine.\n\nChaque recette est accompagnée d'astuces pour varier les ingrédients selon les saisons et vos préférences personnelles.",
      duration: "25 min",
      date: "14 août 2023",
      category: "Cuisine",
      image: "/placeholder.svg?height=400&width=400",
      likes: 56,
      comments: [
        {
          id: 6,
          name: "Lucas Moreau",
          content: "J'ai essayé la recette de curry de légumes hier soir, c'était délicieux !",
          date: "2023-08-15T19:12:00Z",
        },
      ],
    },
    {
      id: 6,
      title: "Débat sur les cryptomonnaies",
      description:
        "Un débat animé sur l'avenir des cryptomonnaies et leur impact sur l'économie mondiale.\n\nDans cet épisode, nous réunissons des experts aux opinions diverses pour discuter de l'avenir des cryptomonnaies. Est-ce une révolution financière ou une bulle spéculative ?\n\nNous explorons les technologies sous-jacentes comme la blockchain, les implications réglementaires et les considérations environnementales liées au minage de cryptomonnaies.",
      duration: "50 min",
      date: "9 septembre 2023",
      category: "Finance",
      image: "/placeholder.svg?height=400&width=400",
      likes: 29,
      comments: [
        {
          id: 7,
          name: "Thomas Leroy",
          content: "Débat très équilibré, j'apprécie d'entendre différentes perspectives sur ce sujet controversé.",
          date: "2023-09-10T08:45:00Z",
        },
        {
          id: 8,
          name: "Emma Petit",
          content: "Pourriez-vous faire un épisode sur les NFT et leur impact sur le monde de l'art ?",
          date: "2023-09-11T14:20:00Z",
        },
      ],
    },
    {
      id: 7,
      title: "Techniques de productivité",
      description:
        "Apprenez des techniques éprouvées pour améliorer votre productivité et mieux gérer votre temps.\n\nCet épisode est rempli de conseils pratiques pour vous aider à accomplir davantage en moins de temps. Notre expert en productivité partage des méthodes comme la technique Pomodoro, le batching, et la matrice d'Eisenhower.\n\nVous découvrirez également comment créer un environnement de travail optimal et comment utiliser la technologie à votre avantage sans vous laisser distraire.",
      duration: "40 min",
      date: "22 octobre 2023",
      category: "Développement personnel",
      image: "/placeholder.svg?height=400&width=400",
      likes: 47,
      comments: [],
    },
    {
      id: 8,
      title: "Les tendances musicales de 2023",
      description:
        "Une analyse des tendances musicales qui ont marqué l'année 2023 et ce qu'elles nous disent sur notre société.\n\nDans cet épisode, nous explorons les genres, artistes et chansons qui ont dominé les charts cette année. Notre critique musical analyse pourquoi certains styles émergent tandis que d'autres déclinent.\n\nNous discutons également de l'influence des plateformes de streaming et des réseaux sociaux sur la consommation de musique et comment les artistes s'adaptent à ce paysage en constante évolution.",
      duration: "55 min",
      date: "5 novembre 2023",
      category: "Musique",
      image: "/placeholder.svg?height=400&width=400",
      likes: 33,
      comments: [
        {
          id: 9,
          name: "Chloé Dubois",
          content:
            "Super analyse ! Je suis d'accord que l'hyperpop est vraiment en train de redéfinir les limites des genres musicaux.",
          date: "2023-11-06T21:05:00Z",
        },
        {
          id: 10,
          name: "Julien Mercier",
          content:
            "J'aurais aimé plus de discussion sur l'influence des musiques africaines dans les hits internationaux cette année.",
          date: "2023-11-07T10:30:00Z",
        },
      ],
    },
  ]
  
  // Fonctions pour manipuler les données
  
  // Obtenir tous les épisodes
  export function getAllEpisodes() {
    return episodes
  }
  
  // Obtenir un épisode par son ID
  export function getEpisodeById(id) {
    return episodes.find((episode) => episode.id === id) || null
  }
  
  // Ajouter un commentaire à un épisode
  export function addComment(episodeId, comment) {
    const episode = getEpisodeById(episodeId)
    if (episode) {
      episode.comments.push(comment)
      return true
    }
    return false
  }
  
  // Basculer le like d'un épisode (incrémenter/décrémenter)
  export function toggleLike(episodeId) {
    const episode = getEpisodeById(episodeId)
    if (episode) {
      // Dans une vraie application, on vérifierait si l'utilisateur a déjà liké
      // Pour simplifier, on incrémente simplement le compteur
      episode.likes += 1
      return episode.likes
    }
    return 0
  }
  