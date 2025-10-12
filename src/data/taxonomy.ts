export interface Species {
  scientificName: string;
  commonName: string;
  id: string;
  images?: string[];
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
                images: ["O.pulchellum_1.jpg", "O.pulchellum_2.jpg", "O.pulchellum_3.jpg", "O.pulchellum_4.jpg", "O.pulchellum_5.jpg", "O.pulchellum_6.jpg"]
              },
              {
                scientificName: "Orchelimum concinnum",
                commonName: "Stripe-faced Meadow Katydid",
                id: "orchelimum-concinnum",
                images: ["O.concinnum_1.jpg", "O.concinnum_2.jpg", "O.concinnum_3.jpg"]
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
                images: ["T.aridifolia_1.jpg", "T.aridifolia_2.jpg", "T.aridifolia_3.jpg", "T.aridifolia_4.jpg"]
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
                images: ["A.eurinus_1.jpg", "A.eurinus_2.jpg", "A.eurinus_3.jpg"]
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
                images: ["L.phyllopus_1.jpg", "L.phyllopus_2.jpg", "L.phyllopus_3.jpg", "L.phyllopus_4.jpg"]
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
                images: ["O.fasciatus_1.jpg", "O.fasciatus_2.jpg", "O.fasciatus_3.jpg"]
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
                images: ["E.floridanus_1.jpg"]
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
                images: ["P.barberi_1.jpg", "P.barberi_2.jpg", "P.barberi_3.jpg"]
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
                images: ["O.orbona_1.jpg", "O.orbona_2.jpg", "O.orbona_3.jpg", "O.orbona_4.jpg", "O.orbona_5.jpg"]
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
                images: ["N.lyricen_1.jpg", "N.lyricen_2.jpg", "N.lyricen_3.jpg"]
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
                images: ["C.rufilabris_1.jpg", "C.rufilabris_2.jpg", "C.rufilabris_3.jpg", "C.rufilabris_4.jpg"]
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
                images: ["o-disjunctus-1.jpg", "o-disjunctus-2.jpg", "o-disjunctus-3.jpg"]
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
                images: ["x-jamaicensis-1.jpg", "x-jamaicensis-2.jpg", "x-jamaicensis-3.jpg"]
              },
              {
                scientificName: "Dynastes hercules",
                commonName: "Hercules Beetle",
                id: "dynastes-hercules",
                images: ["d-hercules-1.jpg"]
              },
              {
                scientificName: "Euphoria inda",
                commonName: "Bumble Flower Beetle",
                id: "euphoria-inda",
                images: ["e-inda-1.jpg"]
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
                images: ["c-sexguttata-1.jpg", "c-sexguttata-2.jpg"]
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
                images: ["l-nebulosus-1.jpg"]
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
                images: ["f-auricularia-1.jpg", "f-auricularia-2.jpg", "f-auricularia-3.jpg"]
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
                images: ["V.maculifrons_1.jpg", "V.maculifrons_2.jpg", "V.maculifrons_3.jpg"]
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
                images: ["S.invicta_1.jpg", "S.invicta_2.jpg"]
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
                images: ["A.aurea_1.jpg"]
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
                images: ["Z.lunata_1.jpg", "Z.lunata_2.jpg", "Z.lunata_3.jpg"]
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
                images: ["P.sennae_1.jpg", "P.sennae_2.jpg", "P.sennae_3.jpg", "P.sennae_4.jpg", "P.sennae_5.jpg"]
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
                images: ["A.stimulea_1.jpg", "A.stimulea_2.jpg", "A.stimulea_3.jpg", "A.stimulea_4.jpg"]
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
                images: ["C.cecrops_1.jpg", "C.cecrops_2.jpg", "C.cecrops_3.jpg"]
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
                images: ["J.coenia_1.jpg", "J.coenia_2.jpg", "J.coenia_3.jpg", "J.coenia_4.jpg", "J.coenia_5.jpg"]
              },
              {
                scientificName: "Morpho helenor",
                commonName: "Common Blue Morpho",
                id: "morpho-helenor",
                images: ["M.helenor_1.jpg"]
              },
              {
                scientificName: "Vanessa virginiensis",
                commonName: "American Painted Lady",
                id: "vanessa-virginiensis",
                images: ["V.virginiensis_1.jpg"]
              },
              {
                scientificName: "Danaus plexippus",
                commonName: "Monarch Butterfly",
                id: "danaus-plexippus",
                images: ["D.plexippus_1.jpg", "D.plexippus_2.jpg", "D.plexippus_3.jpg"]
              }
            ]
          },
          {
            name: "Uraniidae",
            id: "uraniidae",
            species: [
              {
                scientificName: "Chrysiridia rhipheus",
                commonName: "Madagascan Sunset Moth",
                id: "chrysiridia-rhipheus",
                images: ["C.rhipheus_1.jpg"]
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
                images: ["P.species_1.jpg", "P.species_2.jpg", "P.species_3.jpg", "P.species_4.jpg"]
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
                images: ["T.trivittata_1.jpg", "T.trivittata_2.jpg", "T.trivittata_3.jpg"]
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
                images: ["c-albipunctata-1.jpg", "c-albipunctata-2.jpg", "c-albipunctata-3.jpg", "c-albipunctata-4.jpg"]
              }
            ]
          }
        ]
      }
    ]
  }
];
