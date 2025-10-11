export interface Species {
  scientificName: string;
  commonName: string;
  id: string;
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
                id: "orchelimum-pulchellum"
              },
              {
                scientificName: "Orchelimum concinnum",
                commonName: "Stripe-faced Meadow Katydid",
                id: "orchelimum-concinnum"
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
                id: "tenodera-aridifolia"
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
                id: "alydus-eurinus"
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
                id: "leptoglossus-phyllopus"
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
                id: "oncopeltus-fasciatus"
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
                id: "euthyrhynchus-floridanus"
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
                id: "pselliopus-barberi"
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
                id: "oncometopia-orbona"
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
                id: "neotibicen-lyricen"
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
                id: "chrysopa-rufilabris"
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
                id: "odontotaenius-disjunctus"
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
                id: "xyloryctes-jamaicensis"
              },
              {
                scientificName: "Dynastes hercules",
                commonName: "Hercules Beetle",
                id: "dynastes-hercules"
              },
              {
                scientificName: "Euphoria inda",
                commonName: "Bumble Flower Beetle",
                id: "euphoria-inda"
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
                id: "cicindela-sexguttata"
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
                id: "leiopus-nebulosus"
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
                id: "forficula-auricularia"
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
                id: "vespula-maculifrons"
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
                id: "solenopsis-invicta"
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
                id: "atteva-aurea"
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
                id: "zale-lunata"
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
                id: "phoebis-sennae"
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
                id: "acharia-stimulea"
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
                id: "calycopis-cecrops"
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
                id: "junonia-coenia"
              },
              {
                scientificName: "Morpho helenor",
                commonName: "Common Blue Morpho",
                id: "morpho-helenor"
              },
              {
                scientificName: "Vanessa virginiensis",
                commonName: "American Painted Lady",
                id: "vanessa-virginiensis"
              },
              {
                scientificName: "Danaus plexippus",
                commonName: "Monarch Butterfly",
                id: "danaus-plexippus"
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
                id: "chrysiridia-rhipheus"
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
                id: "promachus-species"
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
                id: "taeniaptera-trivittata"
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
                id: "clogmia-albipunctata"
              }
            ]
          }
        ]
      }
    ]
  }
];
