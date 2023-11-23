import { createServer, Model } from "miragejs";

createServer({
  models: {
    games: Model,
  },
  seeds(server) {
    server.create("game", {
      id: "1",
      name: "God of War Ragnarok",
      price: 80,
      description:
        "In Midgard, three years after Fimbulwinter began, as Kratos and Atreus were returning home after a hunt, they were attacked by Freya, who then failed to kill Kratos. When the duo reach their home, Fenrir, one of their wolves, is close to dying; Atreus recites a funerary chant before asking his father to let him grieve for and bury the wolf. Kratos accepts and falls asleep at the house.",
      imageUrl: "../public/images/god-of-war.png",
    });
    server.create("game", {
      id: "2",
      name: "Horizon Forbidden West",
      price: 80,
      description:
        "Horizon Forbidden West continues the story of Aloy half a year after the events of the Zero Dawn, a young huntress of the Nora tribe sent on a quest to a mysterious frontier spanning Utah to the Pacific coast to find the source of a mysterious plague that kills all it infects. On her journey across the uncharted lands of the Forbidden West, she encounters hostile regions filled with natural threats and ravaged by massive storms, dangerous enemies and deadly machines, both new and old. As Aloy attempts to explore the wider and deeper parts of the Forbidden West, she discovers a vast array of diverse environmental ecosystems, including lush valleys, dry deserts, snowy mountains, tropical beaches and ruined cities, both above and below the water.",
      imageUrl: "../public/images/horizon-forbidden-west.png",
    });
    server.create("game", {
      id: "3",
      name: "Uncharted 4: A Thief's End",
      price: 55,
      description:
        "The game begins in medias res with treasure hunter brothers Nathan 'Nate' Drake (Nolan North) and Samuel 'Sam' Drake (Troy Baker) driving toward an island in a storm while fighting off armed thugs in boats before their boat is scuttled. Years before, when Nate (Britain Dalton) is living in the St. Francis orphanage, he's visited by Sam (Chase Austin), who was kicked out for criminal activities. After helping him sneak out, Sam tells Nate he's leaving for a job that will keep him away for a few years, before cheering him up by telling him that he knows where their late mother's effects were sold.",
      imageUrl: "../public/images/uncharted-4.png",
    });
    server.create("game", {
      id: "4",
      name: "Spider-Man 2",
      price: 90,
      description:
        "The Spider-Men, Peter Parker and Miles Morales, enter a new chapter in their lives as they balance their responsibilities as protectors of Marvel's New York. As Harry Osborn, Peter's best friend, returns into his life and Miles looks to build his future beyond high school. The relationship between our heroes is tested and strained as the Symbiote appear to threaten them, the city and the ones close to them.",
      imageUrl: "../public/images/spiderman-2.png",
    });
  },
  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/games", (schema, request) => {
      return schema.vans.all();
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });
  },
});
