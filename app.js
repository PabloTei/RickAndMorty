//Dado los siguientes datos: tendréis que mapear los personajes para obtener el nombre, el status, el nombre del origen, el nombre de la localizacion y la imagen
const characters = {
    info: {
      count: 826,
      pages: 42,
      next: "https://rickandmortyapi.com/api/character?page=2",
      prev: null,
    },
    results: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z",
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/3",
        created: "2017-11-04T19:09:56.428Z",
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/4",
        created: "2017-11-04T19:22:43.665Z",
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/5",
        created: "2017-11-04T19:26:56.301Z",
      },
      {
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        type: "",
        gender: "Female",
        origin: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        location: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/27"],
        url: "https://rickandmortyapi.com/api/character/6",
        created: "2017-11-04T19:50:28.250Z",
      },
      {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        type: "Genetic experiment",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Testicle Monster Dimension",
          url: "https://rickandmortyapi.com/api/location/21",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
        ],
        url: "https://rickandmortyapi.com/api/character/7",
        created: "2017-11-04T19:59:20.523Z",
      },
      {
        id: 8,
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/28"],
        url: "https://rickandmortyapi.com/api/character/8",
        created: "2017-11-04T20:03:34.737Z",
      },
      {
        id: 9,
        name: "Agency Director",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/24"],
        url: "https://rickandmortyapi.com/api/character/9",
        created: "2017-11-04T20:06:54.976Z",
      },
      {
        id: 10,
        name: "Alan Rails",
        status: "Dead",
        species: "Human",
        type: "Superhuman (Ghost trains summoner)",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Worldender's lair",
          url: "https://rickandmortyapi.com/api/location/4",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/25"],
        url: "https://rickandmortyapi.com/api/character/10",
        created: "2017-11-04T20:19:09.017Z",
      },
      {
        id: 11,
        name: "Albert Einstein",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/12"],
        url: "https://rickandmortyapi.com/api/character/11",
        created: "2017-11-04T20:20:20.965Z",
      },
      {
        id: 12,
        name: "Alexander",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Anatomy Park",
          url: "https://rickandmortyapi.com/api/location/5",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/3"],
        url: "https://rickandmortyapi.com/api/character/12",
        created: "2017-11-04T20:32:33.144Z",
      },
      {
        id: 13,
        name: "Alien Googah",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "unknown",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/31"],
        url: "https://rickandmortyapi.com/api/character/13",
        created: "2017-11-04T20:33:30.779Z",
      },
      {
        id: 14,
        name: "Alien Morty",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/10"],
        url: "https://rickandmortyapi.com/api/character/14",
        created: "2017-11-04T20:51:31.373Z",
      },
      {
        id: 15,
        name: "Alien Rick",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/10"],
        url: "https://rickandmortyapi.com/api/character/15",
        created: "2017-11-04T20:56:13.215Z",
      },
      {
        id: 16,
        name: "Amish Cyborg",
        status: "Dead",
        species: "Alien",
        type: "Parasite",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/15"],
        url: "https://rickandmortyapi.com/api/character/16",
        created: "2017-11-04T21:12:45.235Z",
      },
      {
        id: 17,
        name: "Annie",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Anatomy Park",
          url: "https://rickandmortyapi.com/api/location/5",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/3"],
        url: "https://rickandmortyapi.com/api/character/17",
        created: "2017-11-04T22:21:24.481Z",
      },
      {
        id: 18,
        name: "Antenna Morty",
        status: "Alive",
        species: "Human",
        type: "Human with antennae",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/28",
        ],
        url: "https://rickandmortyapi.com/api/character/18",
        created: "2017-11-04T22:25:29.008Z",
      },
      {
        id: 19,
        name: "Antenna Rick",
        status: "unknown",
        species: "Human",
        type: "Human with antennae",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "unknown",
          url: "",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/10"],
        url: "https://rickandmortyapi.com/api/character/19",
        created: "2017-11-04T22:28:13.756Z",
      },
      {
        id: 20,
        name: "Ants in my Eyes Johnson",
        status: "unknown",
        species: "Human",
        type: "Human with ants in his eyes",
        gender: "Male",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Interdimensional Cable",
          url: "https://rickandmortyapi.com/api/location/6",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/8"],
        url: "https://rickandmortyapi.com/api/character/20",
        created: "2017-11-04T22:34:53.659Z",
      },
    ],
  };
  
  //COMENTAR TODO LO DE ABAJO Y HACEDLO ANTES DE ESTA LINEA
  //Ejemplo:
  const swCharacters = {
    info: {
      totalCharacters: 714,
      page: 1,
      limit: 10,
      next: "/characters?page=2&limit=10",
      prev: null,
    },
    characters: [
      {
        _id: "6373b9847d52cbf2f752d9a9",
        name: "2BR-NTB",
        description:
          "Loyal to Norath Kev, the droid 2BR-NTB has a distinct green-and-red paint scheme and sensors attuned to impending danger.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/2br-ntb-main_081ce1aa.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.375Z",
        updatedAt: "2022-11-15T16:08:36.375Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9aa",
        name: "4-LOM",
        description:
          "A rusty droid with insectile features, 4-LOM was originally a protocol droid, but logic glitches allowed him to escape his programming and become a bounty hunter. That proved a perfect occupation for the cold, calculating mechanical.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/curve_4lom_a7640432.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9ab",
        name: "4D-M1N",
        description:
          "When Captain Doza needs guests escorted into Doza Tower or messages relayed to citizens of the Colossus platform, he calls upon his loyal droid 4D-M1N to act as liaison, rarely leaving the gleaming corridors surrounding his private office and living quarters. ",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/resistance-db-4d-m1n-main-image_2a163064.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9ac",
        name: "5-L",
        description:
          "A mouse droid serving aboard a First Order Star Destroyer, 5-L is briefly reprogrammed to serve Tam Ryvora on a covert mission to return to her friends aboard the Colossus.",
        image: "https://lumiere-a.akamaihd.net/v1/images/5-l-main_c6302f4f.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9ad",
        name: "8D8",
        description:
          "A lanky smelter droid, during the time of the Empire 8D8 assisted EV-9D9 in terrorizing Jabba the Hutt's droid operatives. But after the fall of the Empire, under Boba Fett's employ 8D8 was reassigned to assist with strategy and diplomacy.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/astromech-jabba-s-palace-main_cdc9691a.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9ae",
        name: "AAYLA SECURA",
        description:
          "With an athletic build, an exotic beauty, and blue skin, Aayla Secura stood out among the many faces of the Jedi ranks. A cunning warrior and Jedi Knight during the rise of the Clone Wars, Aayla fought alongside Clone Commander Bly on many exotic battlefields. Having mastered the emotional detachment necessary in the Jedi Order, she always tried to pass on what she had learned to others. Aayla was killed, along with many other Jedi Generals, when her troops turned on her in reaction to Supreme Chancellor Palpatine’s broadcast of Order 66.    ",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9af",
        name: "ADI GALLIA",
        description:
          "Jedi Master Adi Gallia was a member of the Order's High Council during the Clone Wars. She and the other members of that ruling body would convene in a temple high above the Coruscant landscape, deciding important matters of the Jedi. Stern and focused, she would remark upon the more outrageous tactics carried out by Anakin Skywalker or Obi-Wan Kenobi in the course of the war, but would rarely condemn their effective actions. Though not as brash as Anakin, Adi Gallia was known to be an aggressive warrior who had no problem bringing the fight to the enemy.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9b0",
        name: "ADMIRAL ACKBAR",
        description:
          "A veteran commander, Ackbar led the defense of his homeworld, Mon Cala, during the Clone Wars and then masterminded the rebel attack on the second Death Star at the Battle of Endor. Ackbar realized the rebels had been drawn into a trap at Endor, but adjusted, with his fleet buying valuable time for the attack to succeed. After the Battle of Endor, Ackbar became a Grand Admiral in the New Republic, winning many victories including the pivotal Battle of Jakku. He retired to Mon Cala, but was coaxed back into service with the Resistance by Leia Organa.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/databank_ackbar_01_169_55137220.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9b1",
        name: "ADMIRAL COBURN",
        description:
          "With a stern face, steely glare and unmistakable command presence, Admiral Coburn served at the side of General Plo Koon during the Clone Wars. The taciturn fleet officer measured his words precisely, offering clear commands in a clipped accent. Coburn's rigid military discipline served him well in executing some of the more daring missions under Jedi leadership. He commanded  a four-cruiser task force into the thick of a Separatist fleet cordon over Lola Sayu to facilitate the rescue of a strike team that invaded the Citadel installation. Coburn also led a Jedi light cruiser in extracting prisoners from the Zygerrian slave processing facility on Kadavo, steering the vessel dangerously close to the facility.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
      {
        _id: "6373b9847d52cbf2f752d9b2",
        name: "ADMIRAL GARRICK VERSIO",
        description:
          "An accomplished naval officer who brought his home world of Vardos under Imperial control, Garrick Versio was reassigned and promoted to Admiral following the destruction of the Death Star over Yavin 4. Garrick formed Inferno Squad to ensure nothing of the sort would happen again. Loyalty to the Empire is Admiral Versio’s first priority.",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/admiral-versio_b06dd6c5.jpeg",
        type: "character",
        __v: 0,
        createdAt: "2022-11-15T16:08:36.376Z",
        updatedAt: "2022-11-15T16:08:36.376Z",
      },
    ],
  };
  
  //Recuperamos el contenedor de HTML -> NODO
  const container = document.querySelector("#container");
  console.log(container);
  
  //Declaramos la función que, recorriendo una lista, nos pinta templates de html en el documento
  const printInDocument = (list) => {
    //Y ahora iteramos en la lista y por cada uno de los item...
    for (const item of list) {
      container.innerHTML += `
            <div class='card'>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <img src=${item.image} alt=${item.name} />
            </div>
            `;
    }
  };
  
  //Vamos a mapear los personajes para quedarnos con la información que se nos solicita
  const mapCharacters = () => {
    const res = swCharacters.characters.map((character) => ({
      name: character.name,
      description: character.description,
      image: character.image,
    }));
    //Ya ha terminado de generar res
    printInDocument(res);
  };
  
  mapCharacters();