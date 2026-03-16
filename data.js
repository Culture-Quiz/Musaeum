// ══════════════════════════════════════════════════════════
//  MUSAEUM — Base de données des œuvres
//  Pour ajouter une œuvre : copier un bloc { ... } et
//  l'ajouter à la fin du tableau, en incrémentant l'id.
// ══════════════════════════════════════════════════════════

const ARTWORKS = [
  {
    id: 1,
    nom: "La Nuit étoilée",
    auteur: "Vincent van Gogh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    mouvement: "Post-impressionnisme",
    date: "1889",
    analyse: "Peinte depuis la chambre de l'asile de Saint-Rémy-de-Provence, cette toile exprime l'état intérieur tourmenté de Van Gogh à travers un ciel en spirale d'une puissance visionnaire. Les tourbillons lumineux évoquent à la fois angoisse et émerveillement cosmique. Le village endormi contraste avec l'énergie explosive du ciel nocturne. L'œuvre est aujourd'hui l'une des plus reproduites de l'histoire de l'art occidental."
  },
  {
    id: 2,
    nom: "Les Nénuphars",
    auteur: "Claude Monet",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    mouvement: "Impressionnisme",
    date: "1906",
    analyse: "Série emblématique réalisée dans le jardin de Giverny, Les Nénuphars dissout la frontière entre le réel et le reflet. Monet cherche à capturer la lumière changeante sur la surface de l'eau, abandonnant toute perspective traditionnelle au profit d'une immersion sensorielle. La répétition obsessionnelle du motif anticipe l'abstraction du XXe siècle. Ces toiles, exposées à l'Orangerie de Paris, constituent une expérience totale, presque méditative."
  },
  {
    id: 3,
    nom: "La Persistance de la mémoire",
    auteur: "Salvador Dalí",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    mouvement: "Surréalisme",
    date: "1931",
    analyse: "Tableau emblématique du Surréalisme, cette huile représente des montres molles se déformant dans un paysage côtier catalan figé. Dalí puise dans la psychanalyse freudienne pour interroger la nature du temps et de la conscience. La précision hyperréaliste du rendu contraste violemment avec l'absurdité de la scène, créant un malaise onirique caractéristique. L'œuvre est une méditation sur la relativité du temps, peinte selon la méthode paranoïaque-critique de l'artiste."
  },
  {
    id: 4,
    nom: "La Jeune Fille à la perle",
    auteur: "Johannes Vermeer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg",
    mouvement: "Baroque",
    date: "c. 1665",
    analyse: "Souvent surnommée « la Joconde du Nord », cette tronie hollandaise fascine par son mystère insaisissable. Vermeer maîtrise avec une virtuosité rare le rendu de la lumière sur les matières — la soie du turban, la peau nacrée, la perle pendant à l'oreille. Le fond sombre fait surgir le visage comme une apparition. L'identité du modèle reste inconnue, laissant libre cours à l'imaginaire du spectateur."
  },
  {
    id: 5,
    nom: "Le Déjeuner sur l'herbe",
    auteur: "Édouard Manet",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27herbe_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27herbe_-_Google_Art_Project.jpg",
    mouvement: "Réalisme",
    date: "1863",
    analyse: "Refusé au Salon officiel et présenté au Salon des Refusés, ce tableau provoqua un scandale retentissant. La nudité frontale de la femme entourée d'hommes vêtus transgresse les conventions du nu académique en inscrivant la scène dans un contexte contemporain. Manet rompt avec la perspective en aplats de couleurs hardis, annonçant la modernité picturale. L'œuvre est aujourd'hui lue comme l'acte fondateur de la peinture moderne."
  },
  {
    id: 6,
    nom: "La Naissance de Vénus",
    auteur: "Sandro Botticelli",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    mouvement: "Renaissance",
    date: "c. 1485",
    analyse: "Commandée par la famille Médicis, cette tempera sur toile illustre le mythe de la naissance de Vénus émergente des flots. Botticelli conjugue idéal néoplatonicien et délicatesse linéaire pour créer l'image de la beauté parfaite. La déesse, dont la silhouette est inspirée de la Vénus de Médicis antique, est représentée avec une grâce mélancolique et irréelle. L'œuvre marque l'essor du nu féminin autonome dans la peinture occidentale."
  },
  {
    id: 7,
    nom: "Composition VIII",
    auteur: "Wassily Kandinsky",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg/1280px-Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg",
    mouvement: "Abstraction",
    date: "1923",
    analyse: "Réalisée au Bauhaus de Weimar, cette toile illustre la théorie de Kandinsky sur la correspondance entre formes, couleurs et émotions. Triangles, cercles et lignes s'organisent en une partition visuelle régie par des tensions et des équilibres. L'artiste conçoit la peinture comme une musique visuelle, cherchant à toucher l'âme directement, sans passer par la représentation. C'est l'une des œuvres fondatrices de l'art abstrait mondial."
  },
  {
    id: 8,
    nom: "Le Cri",
    auteur: "Edvard Munch",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/640px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    mouvement: "Expressionnisme",
    date: "1893",
    analyse: "Figure emblématique de l'art moderne, cette œuvre exprime l'angoisse existentielle à travers une déformation expressive radicale. Le personnage central, dont le visage s'est vidé de toute individualité, incarne la terreur et l'aliénation de l'homme moderne. Les courbes ondulatoires du paysage semblent résonner avec le cri intérieur muet. Munch s'inspirait d'une vraie expérience de dissociation vécue sur un pont de Christiania, décrite dans son journal."
  },
  {
    id: 9,
    nom: "Les Demoiselles d'Avignon",
    auteur: "Pablo Picasso",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg",
    mouvement: "Cubisme",
    date: "1907",
    analyse: "Considérée comme l'œuvre fondatrice du Cubisme et de l'art moderne, cette toile représente cinq figures féminines dont la facture hétérogène traduit une révolution picturale. Picasso rompt avec la perspective renaissante et intègre des influences de l'art africain et ibérique, fragmentant les visages en plans géométriques simultanés. L'œuvre provoqua un choc même auprès des amis proches de l'artiste. Elle annonce un siècle de déconstruction formelle dans l'art occidental."
  },
  {
    id: 10,
    nom: "American Gothic",
    auteur: "Grant Wood",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    mouvement: "Réalisme",
    date: "1930",
    analyse: "Icône de la culture américaine, ce tableau représente un fermier et sa fille devant une maison de style gothique charpentier de l'Iowa. Wood s'inspire de la tradition flamande pour composer une image austère et ambivalente, oscillant entre fierté pionnière et solitude rurale. La fourche tenue par l'homme, les expressions figées et l'architecture rigide instaurent une tension latente. L'œuvre est devenue l'une des images les plus parodiées de l'histoire de l'art."
  },

  // ── Ajoutez vos œuvres ici ─────────────────────────────
  // {
  //   id: 11,
  //   nom: "Titre de l'œuvre",
  //   auteur: "Prénom Nom",
  //   image: "https://URL-de-l-image.jpg",
  //   mouvement: "Nom du mouvement",
  //   date: "AAAA",
  //   analyse: "Votre analyse en 3 à 5 phrases."
  // },
];