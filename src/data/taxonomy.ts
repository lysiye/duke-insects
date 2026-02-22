export interface Species {
  scientificName: string;
  commonName: string;
  id: string;
  images?: string[];
  description?: string;
  credit?: string;
}

export interface Family {
  name: string;
  species: Species[];
  id: string;
}

export interface Order {
  name: string;
  suborder?: string;
  families: Family[];
  id: string;
}

export interface Superorder {
  name: string;
  orders: Order[];
}

export const taxonomy: Superorder[] = [
  {
    name: "NEOPTERA (EXOPTERYGOTA)",
    orders: [
      {
        name: "Orthoptera",
        id: "orthoptera",
        families: [
          {
            name: "Tettigoniidae",
            id: "tettigoniidae",
            species: [
              {
                scientificName: "Orchelimum pulchellum",
                commonName: "Handsome Meadow Katydid",
                id: "orchelimum-pulchellum",
                images: ["O.pulchellum_1.jpg", "O.pulchellum_2.jpg", "O.pulchellum_3.jpg", "O.pulchellum_4.jpg", "O.pulchellum_5.jpg", "O.pulchellum_6.jpg"],
                description: "A slender green katydid commonly found in meadows and grassy areas. Distinguished by its bright green coloration and long antennae."
              },
              {
                scientificName: "Orchelimum concinnum",
                commonName: "Stripe-faced Meadow Katydid",
                id: "orchelimum-concinnum",
                images: ["O.concinnum_1.jpg", "O.concinnum_2.jpg", "O.concinnum_3.jpg"],
                description: "Recognized by the distinctive stripes on its face, this katydid is a common inhabitant of wet meadows and marshes."
              }
            ]
          },
          {
            name: "Mantidae",
            id: "mantidae",
            species: [
              {
                scientificName: "Tenodera aridifolia",
                commonName: "Chinese Mantis",
                id: "tenodera-aridifolia",
                images: ["T.aridifolia_1.jpg", "T.aridifolia_2.jpg", "T.aridifolia_3.jpg", "T.aridifolia_4.jpg"],
                description: "A large praying mantis species introduced to North America. Known for its hunting prowess and distinctive prayer-like posture."
              }
            ]
          }
        ]
      },
      {
        name: "Hemiptera",
        id: "hemiptera",
        families: [
          {
            name: "Alydidae",
            id: "alydidae",
            species: [
              {
                scientificName: "Alydus eurinus",
                commonName: "Broad-headed Bug",
                id: "alydus-eurinus",
                images: ["A.eurinus_1.jpg", "A.eurinus_2.jpg", "A.eurinus_3.jpg"],
                description: "A true bug with a characteristically broad head. Often found on various plants where it feeds on plant juices."
              }
            ]
          },
          {
            name: "Coreidae",
            id: "coreidae",
            species: [
              {
                scientificName: "Leptoglossus phyllopus",
                commonName: "Eastern Leaf-footed Bug",
                id: "leptoglossus-phyllopus",
                images: ["L.phyllopus_1.jpg", "L.phyllopus_2.jpg", "L.phyllopus_3.jpg", "L.phyllopus_4.jpg"],
                description: "Named for the leaf-like expansions on its hind legs. A common plant feeder that can sometimes be a minor agricultural pest."
              }
            ]
          },
          {
            name: "Lygaeidae",
            id: "lygaeidae",
            species: [
              {
                scientificName: "Oncopeltus fasciatus",
                commonName: "Large Milkweed Bug",
                id: "oncopeltus-fasciatus",
                images: ["O.fasciatus_1.jpg", "O.fasciatus_2.jpg", "O.fasciatus_3.jpg"],
                description: "Bright orange and black coloration warns predators of its toxicity from feeding on milkweed plants. An important subject in genetics research."
              }
            ]
          },
          {
            name: "Pentatomidae",
            id: "pentatomidae",
            species: [
              {
                scientificName: "Euthyrhynchus floridanus",
                commonName: "Florida Predatory Stink Bug",
                id: "euthyrhynchus-floridanus",
                images: ["E.floridanus_1.jpg"],
                description: "A beneficial predator that feeds on other insects, particularly caterpillars and beetle larvae. Common in gardens and agricultural areas."
              }
            ]
          },
          {
            name: "Reduviidae",
            id: "reduviidae",
            species: [
              {
                scientificName: "Pselliopus barberi",
                commonName: "Orange Assassin Bug",
                id: "pselliopus-barberi",
                images: ["P.barberi_1.jpg", "P.barberi_2.jpg", "P.barberi_3.jpg"],
                description: "A striking orange assassin bug that hunts other insects. Known for its potent bite if handled, so observe from a distance."
              }
            ]
          },
          {
            name: "Cicadellidae",
            id: "cicadellidae",
            species: [
              {
                scientificName: "Oncometopia orbona",
                commonName: "Broad-headed Sharpshooter",
                id: "oncometopia-orbona",
                images: ["O.orbona_1.jpg", "O.orbona_2.jpg", "O.orbona_3.jpg", "O.orbona_4.jpg", "O.orbona_5.jpg"],
                description: "A leafhopper with distinctive broad head and intricate wing patterns. Feeds on plant sap and can transmit plant diseases."
              }
            ]
          },
          {
            name: "Cicadidae",
            id: "cicadidae",
            species: [
              {
                scientificName: "Neotibicen lyricen",
                commonName: "Lyric Cicada",
                id: "neotibicen-lyricen",
                images: ["N.lyricen_1.jpg", "N.lyricen_2.jpg", "N.lyricen_3.jpg"],
                description: "Named for its lyrical song heard on summer days. Spends years underground before emerging to sing and mate."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "NEOPTERA (ENDOPTERYGOTA)",
    orders: [
      {
        name: "Neuroptera",
        id: "neuroptera",
        families: [
          {
            name: "Chrysopidae",
            id: "chrysopidae",
            species: [
              {
                scientificName: "Chrysopa rufilabris",
                commonName: "Green Lacewing",
                id: "chrysopa-rufilabris",
                images: ["C.rufilabris_1.jpg", "C.rufilabris_2.jpg", "C.rufilabris_3.jpg", "C.rufilabris_4.jpg"],
                description: "Delicate green insects with intricate lacy wings. The larvae are voracious predators of aphids and other soft-bodied insects."
              }
            ]
          }
        ]
      },
      {
        name: "Coleoptera",
        id: "coleoptera",
        families: [
          {
            name: "Passalidae",
            id: "passalidae",
            species: [
              {
                scientificName: "Odontotaenius disjunctus",
                commonName: "Horned Passalus",
                id: "odontotaenius-disjunctus",
                images: ["o-disjunctus-1.jpg", "o-disjunctus-2.jpg", "o-disjunctus-3.jpg"],
                description: "A large beetle that lives in rotting logs. Known for its unusual social behavior and ability to communicate through squeaking sounds."
              }
            ]
          },
          {
            name: "Scarabaeidae",
            id: "scarabaeidae",
            species: [
              {
                scientificName: "Xyloryctes jamaicensis",
                commonName: "Rhinoceros Beetle",
                id: "xyloryctes-jamaicensis",
                images: ["x-jamaicensis-1.jpg", "x-jamaicensis-2.jpg", "x-jamaicensis-3.jpg"],
                description: "Named for the horn on its head, this large beetle is found in decaying wood. Males use their horns for fighting over mates."
              },
              {
                scientificName: "Dynastes hercules",
                commonName: "Hercules Beetle",
                id: "dynastes-hercules",
                images: ["d-hercules-1.jpg"],
                description: "One of the largest beetles in the world, capable of growing over 7 inches long. The male's impressive horns can be longer than its body."
              },
              {
                scientificName: "Euphoria inda",
                commonName: "Bumble Flower Beetle",
                id: "euphoria-inda",
                images: ["e-inda-1.jpg"],
                description: "A fuzzy beetle that resembles a bumblebee. Often found on flowers feeding on pollen and nectar."
              }
            ]
          },
          {
            name: "Cicindelidae",
            id: "cicindelidae",
            species: [
              {
                scientificName: "Cicindela sexguttata",
                commonName: "Six-spotted Tiger Beetle",
                id: "cicindela-sexguttata",
                images: ["c-sexguttata-1.jpg", "c-sexguttata-2.jpg"],
                description: "A brilliant metallic green beetle known for its incredible speed and predatory behavior. Active hunters with excellent vision."
              }
            ]
          },
          {
            name: "Cerambycidae",
            id: "cerambycidae",
            species: [
              {
                scientificName: "Leiopus nebulosus",
                commonName: "Black-clouded Longhorn Beetle",
                id: "leiopus-nebulosus",
                images: ["l-nebulosus-1.jpg"],
                description: "A longhorn beetle with characteristic long antennae. The larvae develop in dead wood, playing an important role in decomposition."
              }
            ]
          }
        ]
      },
      {
        name: "Dermaptera",
        id: "dermaptera",
        families: [
          {
            name: "Forficulidae",
            id: "forficulidae",
            species: [
              {
                scientificName: "Forficula auricularia",
                commonName: "European Earwig",
                id: "forficula-auricularia",
                images: ["f-auricularia-1.jpg", "f-auricularia-2.jpg", "f-auricularia-3.jpg"],
                description: "Recognized by the forceps-like pincers at the end of its abdomen. Despite myths, earwigs don't crawl into ears but are beneficial garden insects."
              }
            ]
          }
        ]
      },
      {
        name: "Hymenoptera",
        id: "hymenoptera",
        families: [
          {
            name: "Vespidae",
            id: "vespidae",
            species: [
              {
                scientificName: "Vespula maculifrons",
                commonName: "Eastern Yellowjacket",
                id: "vespula-maculifrons",
                images: ["V.maculifrons_1.jpg", "V.maculifrons_2.jpg", "V.maculifrons_3.jpg"],
                description: "A social wasp that builds paper nests. While they can sting, yellowjackets are important predators of pest insects."
              }
            ]
          },
          {
            name: "Formicidae",
            id: "formicidae",
            species: [
              {
                scientificName: "Solenopsis invicta",
                commonName: "Red Imported Fire Ant",
                id: "solenopsis-invicta",
                images: ["S.invicta_1.jpg", "S.invicta_2.jpg"],
                description: "An invasive species known for its aggressive behavior and painful sting. Forms large colonies with complex social structures."
              }
            ]
          }
        ]
      },
      {
        name: "Lepidoptera",
        id: "lepidoptera",
        families: [
          {
            name: "Attevidae",
            id: "attevidae",
            species: [
              {
                scientificName: "Atteva aurea",
                commonName: "Ailanthus Webworm Moth",
                id: "atteva-aurea",
                images: ["A.aurea_1.jpg"],
                description: "A colorful day-flying moth with orange and white spotted wings. The larvae feed on the invasive Tree of Heaven plant."
              }
            ]
          },
          {
            name: "Erebidae",
            id: "erebidae",
            species: [
              {
                scientificName: "Zale lunata",
                commonName: "Lunate Zale Moth",
                id: "zale-lunata",
                images: ["Z.lunata_1.jpg", "Z.lunata_2.jpg", "Z.lunata_3.jpg"],
                description: "A nocturnal moth with intricate wing patterns that provide excellent camouflage against tree bark."
              }
            ]
          },
          {
            name: "Pieridae",
            id: "pieridae",
            species: [
              {
                scientificName: "Phoebis sennae",
                commonName: "Cloudless Sulphur",
                id: "phoebis-sennae",
                images: ["P.sennae_1.jpg", "P.sennae_2.jpg", "P.sennae_3.jpg", "P.sennae_4.jpg", "P.sennae_5.jpg"],
                description: "A large, bright yellow butterfly commonly seen flying strongly and directly. Males are bright lemon yellow, females are more pale."
              }
            ]
          },
          {
            name: "Limacodidae",
            id: "limacodidae",
            species: [
              {
                scientificName: "Acharia stimulea",
                commonName: "Saddleback Caterpillar Moth",
                id: "acharia-stimulea",
                images: ["A.stimulea_1.jpg", "A.stimulea_2.jpg", "A.stimulea_3.jpg", "A.stimulea_4.jpg"],
                description: "The caterpillar stage is distinctive with a bright green 'saddle' on its back. The venomous spines can cause painful stings."
              }
            ]
          },
          {
            name: "Lycaenidae",
            id: "lycaenidae",
            species: [
              {
                scientificName: "Calycopis cecrops",
                commonName: "Red-banded Hairstreak",
                id: "calycopis-cecrops",
                images: ["C.cecrops_1.jpg", "C.cecrops_2.jpg", "C.cecrops_3.jpg"],
                description: "A small butterfly with delicate hairlike tail projections. The underside features a distinctive red band across the wings."
              }
            ]
          },
          {
            name: "Nymphalidae",
            id: "nymphalidae",
            species: [
              {
                scientificName: "Junonia coenia",
                commonName: "Common Buckeye",
                id: "junonia-coenia",
                images: ["J.coenia_1.jpg", "J.coenia_2.jpg", "J.coenia_3.jpg", "J.coenia_4.jpg", "J.coenia_5.jpg"],
                description: "Easily recognized by the large eyespots on its wings. These eyespots may help deter predators by resembling the face of a larger animal."
              },
              {
                scientificName: "Vanessa virginiensis",
                commonName: "American Painted Lady",
                id: "vanessa-virginiensis",
                images: ["V.virginiensis_1.jpg"],
                description: "Distinguished from other painted ladies by two large eyespots on the underside of its hindwings. A strong migrator found across North America."
              },
              {
                scientificName: "Danaus plexippus",
                commonName: "Monarch Butterfly",
                id: "danaus-plexippus",
                images: ["D.plexippus_1.jpg", "D.plexippus_2.jpg", "D.plexippus_3.jpg"],
                description: "Perhaps the most famous butterfly, known for its incredible migration. The bright orange color warns predators of toxins from milkweed."
              }
            ]
          }
        ]
      },
      {
        name: "Diptera",
        id: "diptera",
        families: [
          {
            name: "Asilidae",
            id: "asilidae",
            species: [
              {
                scientificName: "Promachus species",
                commonName: "Giant Robber Fly",
                id: "promachus-species",
                images: ["P.species_1.jpg", "P.species_2.jpg", "P.species_3.jpg", "P.species_4.jpg"],
                description: "Formidable aerial predators that catch other insects mid-flight. Their hairy appearance and hunting prowess have earned them the nickname 'bee killers'."
              }
            ]
          },
          {
            name: "Micropezidae",
            id: "micropezidae",
            species: [
              {
                scientificName: "Taeniaptera trivittata",
                commonName: "Stilt-legged Fly",
                id: "taeniaptera-trivittata",
                images: ["T.trivittata_1.jpg", "T.trivittata_2.jpg", "T.trivittata_3.jpg"],
                description: "Named for their extremely long, stilt-like legs. Often wave their front legs in a distinctive manner, possibly for communication."
              }
            ]
          },
          {
            name: "Psychodidae",
            id: "psychodidae",
            species: [
              {
                scientificName: "Clogmia albipunctata",
                commonName: "Filter Fly",
                id: "clogmia-albipunctata",
                images: ["c-albipunctata-1.jpg", "c-albipunctata-2.jpg", "c-albipunctata-3.jpg", "c-albipunctata-4.jpg"],
                description: "Tiny fuzzy flies often found near drains and sewage systems. Despite their association with unsanitary conditions, they're harmless to humans."
              }
            ]
          }
        ]
      }
    ]
  }
];
