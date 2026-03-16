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
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    mouvement: "Post-impressionnisme",
    date: "1889",
    analyse: "Peinte depuis la chambre de l'asile de Saint-Rémy-de-Provence, cette toile exprime l'état intérieur tourmenté de Van Gogh à travers un ciel en spirale d'une puissance visionnaire. Les tourbillons lumineux évoquent à la fois angoisse et émerveillement cosmique. Le village endormi contraste avec l'énergie explosive du ciel nocturne. L'œuvre est aujourd'hui l'une des plus reproduites de l'histoire de l'art occidental."
  },
  {
    id: 2,
    nom: "Les Nénuphars",
    auteur: "Claude Monet",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    mouvement: "Baroque",
    date: "c. 1665",
    analyse: "Souvent surnommée « la Joconde du Nord », cette tronie hollandaise fascine par son mystère insaisissable. Vermeer maîtrise avec une virtuosité rare le rendu de la lumière sur les matières — la soie du turban, la peau nacrée, la perle pendant à l'oreille. Le fond sombre fait surgir le visage comme une apparition. L'identité du modèle reste inconnue, laissant libre cours à l'imaginaire du spectateur."
  },
  {
    id: 5,
    nom: "Le Déjeuner sur l'herbe",
    auteur: "Édouard Manet",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Edouard_Manet_-_Le_D%C3%A9jeuner_sur_l%27herbe_-_Google_Art_Project.jpg",
    mouvement: "Réalisme",
    date: "1863",
    analyse: "Refusé au Salon officiel et présenté au Salon des Refusés, ce tableau provoqua un scandale retentissant. La nudité frontale de la femme entourée d'hommes vêtus transgresse les conventions du nu académique en inscrivant la scène dans un contexte contemporain. Manet rompt avec la perspective en aplats de couleurs hardis, annonçant la modernité picturale. L'œuvre est aujourd'hui lue comme l'acte fondateur de la peinture moderne."
  },
  {
    id: 6,
    nom: "La Naissance de Vénus",
    auteur: "Sandro Botticelli",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    mouvement: "Renaissance",
    date: "c. 1485",
    analyse: "Commandée par la famille Médicis, cette tempera sur toile illustre le mythe de la naissance de Vénus émergente des flots. Botticelli conjugue idéal néoplatonicien et délicatesse linéaire pour créer l'image de la beauté parfaite. La déesse, dont la silhouette est inspirée de la Vénus de Médicis antique, est représentée avec une grâce mélancolique et irréelle. L'œuvre marque l'essor du nu féminin autonome dans la peinture occidentale."
  },
  {
    id: 7,
    nom: "Composition VIII",
    auteur: "Wassily Kandinsky",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg",
    mouvement: "Abstraction",
    date: "1923",
    analyse: "Réalisée au Bauhaus de Weimar, cette toile illustre la théorie de Kandinsky sur la correspondance entre formes, couleurs et émotions. Triangles, cercles et lignes s'organisent en une partition visuelle régie par des tensions et des équilibres. L'artiste conçoit la peinture comme une musique visuelle, cherchant à toucher l'âme directement, sans passer par la représentation. C'est l'une des œuvres fondatrices de l'art abstrait mondial."
  },
  {
    id: 8,
    nom: "Le Cri",
    auteur: "Edvard Munch",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
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

  // ── Œuvres ajoutées ───────────────────────────────────

  {
    id: 11,
    nom: "La Joconde",
    auteur: "Léonard de Vinci",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    mouvement: "Renaissance",
    date: "c. 1503–1519",
    analyse: "Portrait le plus célèbre du monde, La Joconde fascine depuis cinq siècles par son sourire énigmatique et la technique du sfumato — ce voile atmosphérique qui estompe les contours. Léonard de Vinci y déploie sa maîtrise du clair-obscur et de la perspective aérienne pour créer une présence troublante. L'identité du modèle, probablement Lisa Gherardini, reste sujette à débat. Conservée au Louvre, l'œuvre est aujourd'hui autant icône culturelle qu'objet d'étude scientifique."
  },
  {
    id: 12,
    nom: "Las Meninas",
    auteur: "Diego Vélasquez",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg",
    mouvement: "Baroque",
    date: "1656",
    analyse: "Chef-d'œuvre de la peinture baroque espagnole, Las Meninas interroge les fondements mêmes de la représentation. Vélasquez se peint lui-même au travail, entouré de la jeune infante Marguerite-Thérèse et de sa cour, tandis que le reflet du roi et de la reine apparaît dans un miroir au fond. Ce jeu de regards entre le peintre, le modèle et le spectateur constitue une réflexion philosophique sur la nature du tableau. Foucault en fera l'ouverture de son essai Les Mots et les Choses."
  },
  {
    id: 13,
    nom: "La Liberté guidant le peuple",
    auteur: "Eugène Delacroix",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
    mouvement: "Romantisme",
    date: "1830",
    analyse: "Peinte en réaction aux Trois Glorieuses de juillet 1830, cette toile érige la Liberté en allégorie triomphante brandissant le drapeau tricolore sur des barricades. Delacroix mêle le réalisme cru des corps morts au sol avec la grandeur idéale de la figure allégorique, créant une tension dramatique caractéristique du Romantisme. La palette ardente et la composition pyramidale renforcent l'élan révolutionnaire. L'œuvre, exposée au Louvre, est devenue le symbole universel de la lutte pour la liberté."
  },
  {
    id: 14,
    nom: "Un dimanche après-midi à l'Île de la Grande Jatte",
    auteur: "Georges Seurat",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg",
    mouvement: "Post-impressionnisme",
    date: "1886",
    analyse: "Monument du pointillisme, cette toile immense est composée de milliers de petites touches de couleur pure juxtaposées selon les théories de la vision simultanée des couleurs. Seurat y représente des bourgeois parisiens se reposant au bord de la Seine dans une atmosphère de quiétude étrange et figée. Chaque personnage semble isolé dans sa propre sphère, créant une atmosphère de solitude collective malgré la foule. L'œuvre constitue l'acte de naissance du néo-impressionnisme."
  },
  {
    id: 15,
    nom: "L'Origine du monde",
    auteur: "Gustave Courbet",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Courbet_Lorigin_du_monde.jpg",
    mouvement: "Réalisme",
    date: "1866",
    analyse: "Commandée par le diplomate ottoman Khalil Bey pour son usage privé, cette huile représente avec une franchise anatomique radicale le sexe féminin d'un nu allongé. Longtemps cachée ou censurée, elle ne fut exposée publiquement qu'en 1988 au musée d'Orsay. Courbet y pousse le réalisme jusqu'à son point de rupture, transformant l'objet du désir en sujet d'une violence picturale absolue. L'œuvre reste l'une des plus discutées de l'histoire de l'art."
  },
  {
    id: 16,
    nom: "La Trahison des images",
    auteur: "René Magritte",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg",
    mouvement: "Surréalisme",
    date: "1929",
    analyse: "Ce tableau représentant une pipe accompagnée de l'inscription « Ceci n'est pas une pipe » est devenu l'un des manifestes philosophiques de l'art moderne. Magritte y explore le rapport entre la représentation et la réalité : la pipe peinte n'est en effet qu'une image, non l'objet lui-même. Cette provocation visuelle ouvre un vertige sémiotique qui influencera profondément la philosophie du langage. Michel Foucault lui consacrera un essai entier, Les Mots et les images."
  },
  {
    id: 17,
    nom: "Impression, soleil levant",
    auteur: "Claude Monet",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
    mouvement: "Impressionnisme",
    date: "1872",
    analyse: "C'est cette toile qui donna son nom au mouvement impressionniste, suite à la critique railleuse du journaliste Louis Leroy. Peinte au Havre au petit matin, elle capture la lumière du soleil levant sur l'eau à travers quelques touches rapides et audacieuses. La tache orange vif du soleil vibre sur les tons froids du port industriel, créant une vibration lumineuse saisissante. L'œuvre, conservée au musée Marmottan à Paris, incarne à elle seule la rupture avec la peinture académique."
  },
  {
    id: 18,
    nom: "Le Radeau de la Méduse",
    auteur: "Théodore Géricault",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/G%C3%A9ricault_Raft_of_the_Medusa.jpg",
    mouvement: "Romantisme",
    date: "1819",
    analyse: "Inspiré du naufrage de la frégate Méduse en 1816 et du scandale politique qui s'ensuivit, ce tableau monumental met en scène les rescapés livrés à eux-mêmes sur un radeau de fortune. Géricault adopte une composition en vague montante vers la figure du survivant agitant un chiffon, alternant désespoir et espoir. La palette sombre et les corps enchevêtrés créent une violence dramatique sans précédent dans la peinture française. L'œuvre fut saluée comme le manifeste du Romantisme."
  },
  {
    id: 19,
    nom: "La Grande Vague de Kanagawa",
    auteur: "Katsushika Hokusai",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg",
    mouvement: "Ukiyo-e",
    date: "c. 1831",
    analyse: "Estampe la plus célèbre du Japon, cette image extraite de la série Trente-six vues du mont Fuji représente une vague gigantesque menaçant d'engloutir des embarcations, avec le Fuji enneigé en arrière-plan. Hokusai joue sur le contraste d'échelle et la tension entre le mouvement de l'eau et l'immobilité de la montagne sacrée. La précision décorative des écumes tranche avec la force tellurique de la composition. L'œuvre influencera profondément l'impressionnisme et l'Art nouveau européen."
  },
  {
    id: 20,
    nom: "Guernica",
    auteur: "Pablo Picasso",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    mouvement: "Cubisme",
    date: "1937",
    analyse: "Commandée par le gouvernement républicain espagnol, cette toile monumentale en noir et blanc est la réponse de Picasso au bombardement de la ville basque de Guernica par l'aviation nazie. Les figures fragmentées — un cheval agonisant, une mère tenant son enfant mort, des visages déchirés — composent un chaos expressif d'une puissance rare. L'absence de couleur renforce l'atmosphère de deuil et de tragédie universelle. Guernica est devenue le symbole pictural absolu de l'horreur de la guerre."
  },
  {
    id: 21,
    nom: "Les Tournesols",
    auteur: "Vincent van Gogh",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
    mouvement: "Post-impressionnisme",
    date: "1888",
    analyse: "Peinte à Arles en prévision de l'arrivée de Paul Gauguin, cette série de natures mortes flamboyantes témoigne de l'exaltation coloriste de Van Gogh au sommet de sa puissance créatrice. Les différents états de floraison et de flétrissure des tournesols évoquent le cycle de la vie et de la mort. La matière picturale, épaisse et dynamique, semble dotée d'une énergie propre. Ces toiles, vendues à des prix records, sont parmi les plus célèbres et les plus aimées du monde."
  },
  {
    id: 22,
    nom: "L'École d'Athènes",
    auteur: "Raphaël",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Raphael_School_of_Athens.jpg",
    mouvement: "Renaissance",
    date: "1509–1511",
    analyse: "Fresque monumentale ornant la chambre de la Signature au Vatican, L'École d'Athènes réunit dans un même espace architectural idéal tous les grands philosophes de l'Antiquité. Platon et Aristote occupent le centre de la composition, encadrés par Socrate, Pythagore, Euclide et d'autres penseurs. Raphaël donne à certains d'entre eux les traits de ses contemporains, dont Michel-Ange en Héraclite et Léonard de Vinci en Platon. L'œuvre incarne l'idéal humaniste de la Renaissance : l'harmonie entre sagesse antique et culture chrétienne."
  },
  {
    id: 23,
    nom: "Autoportrait au miroir",
    auteur: "Frida Kahlo",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Frida_Kahlo_%28self_portrait%2C_1926%29.jpg",
    mouvement: "Surréalisme",
    date: "1937",
    analyse: "Frida Kahlo est l'une des artistes les plus intenses du XXe siècle, dont l'œuvre entière est traversée par l'autobiographie, la douleur physique et l'identité mexicaine. Ses autoportraits, qui constituent le cœur de sa production, mettent en scène son corps comme lieu de souffrance, de résistance et de fierté culturelle. Les éléments symboliques — animaux, plantes, accessoires traditionnels — forment un langage pictural unique entre réalisme et onirisme. André Breton la rattacha au Surréalisme, qualification qu'elle contesta, préférant parler de sa propre réalité."
  },
  {
    id: 24,
    nom: "Bal du moulin de la Galette",
    auteur: "Pierre-Auguste Renoir",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg",
    mouvement: "Impressionnisme",
    date: "1876",
    analyse: "Cette grande toile représente une scène de plein air typique de la vie parisienne populaire : une fête dansante à Montmartre, baignée de lumière filtrée par les feuillages. Renoir joue avec les taches de lumière sur les visages et les vêtements pour créer une atmosphère de légèreté et de joie collective. Les personnages sont ses amis, posant dans leur environnement naturel. L'œuvre, conservée au musée d'Orsay, est considérée comme l'une des plus belles expressions du bonheur de vivre dans la peinture française."
  },
  {
    id: 25,
    nom: "La Chambre à Arles",
    auteur: "Vincent van Gogh",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    mouvement: "Post-impressionnisme",
    date: "1888",
    analyse: "Van Gogh réalisa trois versions de sa chambre à la Maison Jaune d'Arles, souhaitant y exprimer le repos absolu à travers la simplification des formes et la saturation des couleurs. Le mobilier modeste, le lit, les chaises, les portraits aux murs sont rendus avec une candeur presque naïve qui contraste avec la complexité psychologique de son auteur. La perspective délibérément faussée crée une légère désorientation spatiale. Van Gogh écrivit à son frère Théo que cette toile devait évoquer le calme — ce qu'il cherchait désespérément."
  },
  {
    id: 26,
    nom: "Olympia",
    auteur: "Édouard Manet",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_2.jpg",
    mouvement: "Réalisme",
    date: "1865",
    analyse: "Présenté au Salon de 1865, Olympia provoqua un scandale encore plus retentissant que Le Déjeuner sur l'herbe. La femme nue, visiblement une courtisane, regarde le spectateur avec une assurance froide et provocatrice, refusant toute idéalisation. L'absence de modelé, les à-plats de peinture et le fond neutre rompent avec la tradition du nu académique. La présence de la domestique noire tenant un bouquet renforce la dimension sociale et transgressive de la composition."
  },
  {
    id: 27,
    nom: "Le Verrou",
    auteur: "Jean-Honoré Fragonard",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Fragonard%2C_The_Bolt.jpg",
    mouvement: "Rococo",
    date: "c. 1777",
    analyse: "Considéré comme le chef-d'œuvre de Fragonard, Le Verrou représente un couple dans une scène d'intimité ambiguë — surprise ou consentement — au moment où l'homme pousse le verrou. La composition diagonale tendue, éclairée d'une lumière chaude et dramatique, crée une scène d'une sensualité et d'une tension remarquables. Les drapés froissés et le bouquet de roses renversé sur la table participent du vocabulaire érotique rococo. L'œuvre, conservée au Louvre, contraste avec la légèreté habituelle de ce style."
  },
  {
    id: 28,
    nom: "Broadway Boogie-Woogie",
    auteur: "Piet Mondrian",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg",
    mouvement: "Abstraction",
    date: "1943",
    analyse: "Peinte après l'exil de Mondrian à New York fuyant la guerre, cette toile marque une rupture joyeuse avec la rigueur austère de ses compositions en noir, rouge, bleu et jaune. La grille de lignes jaunes vibrantes évoque à la fois le quadrillage des rues de Manhattan et le rythme syncopé du boogie-woogie que Mondrian affectionnait. Les petits carrés colorés ponctuant le réseau créent une pulsation visuelle presque musicale. C'est l'une des œuvres les plus lumineuses et dansantes de l'abstraction géométrique."
  },
  {
    id: 29,
    nom: "La Baigneuse Valpinçon",
    auteur: "Jean-Auguste-Dominique Ingres",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Jean_Auguste_Dominique_Ingres_-_Baigneuse_de_Valpincon_1808.jpg",
    mouvement: "Néoclassicisme",
    date: "1808",
    analyse: "Présentée au Salon de 1808, cette figure de dos représente une baigneuse assise au bord d'un lit, enveloppée d'un turban blanc. Ingres y déploie sa maîtrise incomparable du dessin et du modelé : le dos nu, rendu avec une précision presque sculptée, devient une étude sur la perfection formelle. La sobriété de la composition — peu d'accessoires, fond neutre — concentre toute l'attention sur la qualité linéaire. Cette œuvre de jeunesse annonce déjà le raffinement qui caractérisera toute la carrière d'Ingres."
  },
  {
    id: 30,
    nom: "Judith décapitant Holopherne",
    auteur: "Artemisia Gentileschi",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg",
    mouvement: "Baroque",
    date: "c. 1614–1620",
    analyse: "Artemisia Gentileschi, l'une des rares femmes peintres reconnues de son époque, traite ce sujet biblique avec une violence et une détermination qui tranchent avec les représentations contemporaines. Judith et sa servante agissent avec une force physique et une résolution sans ambiguïté, transformant la scène en acte de justice. Le caravagisme de la composition — clair-obscur tranché, réalisme brutal — sert une narration d'une intensité psychologique rare. L'œuvre est souvent lue comme une réponse personnelle au viol qu'Artemisia subit à dix-sept ans."
  },

  // ── Ajoutez vos œuvres ici ─────────────────────────────
  // {
  //   id: 31,
  //   nom: "Titre de l'œuvre",
  //   auteur: "Prénom Nom",
  //   image: "https://URL-de-l-image.jpg",
  //   mouvement: "Nom du mouvement",
  //   date: "AAAA",
  //   analyse: "Votre analyse en 3 à 5 phrases."
  // },
];