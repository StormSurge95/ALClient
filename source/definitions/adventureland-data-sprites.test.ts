/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 692 (2021-10-10)
 * It is used to confirm type correctness
 */

test("G.sprites type validation", async () => {
    const G_sprites: Pick<GData, "sprites"> = {
        "sprites": {
            "burningeyes1": {
                "rows": 1,
                "type": "a_makeup",
                "columns": 1,
                "file": "/images/cosmetics/beardo/burningeyes1_anim.png",
                "matrix": [
                    [
                        "breyes"
                    ]
                ]
            },
            "snowman": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/snowman.png",
                "matrix": [
                    [
                        "snowman"
                    ]
                ]
            },
            "burningeyes2": {
                "rows": 1,
                "type": "a_makeup",
                "columns": 1,
                "file": "/images/cosmetics/beardo/burningeyes2_anim.png",
                "matrix": [
                    [
                        "bbeyes"
                    ]
                ]
            },
            "vampires": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/vampire2d.png",
                "matrix": [
                    [
                        "mvampire",
                        "fvampire",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        "vbat",
                        null
                    ]
                ]
            },
            "tail3": {
                "rows": 1,
                "type": "tail",
                "columns": 1,
                "file": "/images/cosmetics/tails/wolftail3.png",
                "matrix": [
                    [
                        "tail300"
                    ]
                ]
            },
            "tail2": {
                "rows": 1,
                "type": "tail",
                "columns": 1,
                "file": "/images/cosmetics/tails/wolftail2.png",
                "matrix": [
                    [
                        "tail200"
                    ]
                ]
            },
            "tail1": {
                "rows": 1,
                "type": "tail",
                "columns": 1,
                "file": "/images/cosmetics/tails/wolftail.png",
                "matrix": [
                    [
                        "tail100"
                    ]
                ]
            },
            "icegolem": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/iceGolem.png",
                "matrix": [
                    [
                        "icegolem"
                    ]
                ]
            },
            "automatron": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/automatron2.png",
                "matrix": [
                    [
                        "target_a500",
                        "target_a750",
                        "target_r500",
                        "target_r750"
                    ],
                    [
                        "target_ar900",
                        "target_ar500red",
                        null,
                        "target"
                    ]
                ]
            },
            "mystics": {
                "rows": 1,
                "columns": 4,
                "file": "/images/tiles/characters/mystics.png",
                "matrix": [
                    [
                        "mm_blue",
                        "mf_blue",
                        "mm_yellow",
                        "mf_yellow"
                    ]
                ]
            },
            "xschar2": {
                "rows": 2,
                "matrix": [
                    [
                        "xschar2a",
                        "xschar2b",
                        "xschar2c",
                        "xschar2d"
                    ],
                    [
                        "xschar2e",
                        "xschar2f",
                        "xschar2g",
                        "xschar2h"
                    ]
                ],
                "file": "/images/all_characters/xschar2.png",
                "type": "character",
                "columns": 4,
                "size": "xsmall"
            },
            "smakeup": {
                "rows": 1,
                "type": "head",
                "columns": 1,
                "file": "/images/cosmetics/makeup/smakeup.png",
                "matrix": [
                    [
                        "smakeup00"
                    ]
                ]
            },
            "elk": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_elk.png",
                "matrix": [
                    [
                        "elk"
                    ]
                ]
            },
            "mrpumpkin": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/mr_pumpkin.png",
                "matrix": [
                    [
                        "mrpumpkin"
                    ]
                ]
            },
            "emblems": {
                "rows": 2,
                "type": "emblem",
                "columns": 10,
                "file": "/images/sprites/emblems/emblems.png?v=6",
                "matrix": [
                    [
                        "c1",
                        "c2",
                        "c3",
                        "c4",
                        "b1",
                        "r1",
                        "rr1",
                        "dp1",
                        null,
                        null
                    ],
                    [
                        "m1",
                        "m2",
                        "m3",
                        "m4",
                        "b2",
                        "br1",
                        "o1",
                        "j1",
                        null,
                        null
                    ]
                ]
            },
            "angel_wingless": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/angel_wingless.png",
                "matrix": [
                    [
                        null,
                        "bangel",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "collectionx": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/collectionx.png",
                "matrix": [
                    [
                        null,
                        "snow_angel",
                        null,
                        null
                    ],
                    [
                        "creator",
                        null,
                        null,
                        null
                    ]
                ]
            },
            "deepsea": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/deep_sea_king.png",
                "matrix": [
                    [
                        "deepsea"
                    ]
                ]
            },
            "xxschar2": {
                "rows": 2,
                "matrix": [
                    [
                        "xxschar2a",
                        "xxschar2b",
                        "xxschar2c",
                        "xxschar2d"
                    ],
                    [
                        "xxschar2e",
                        "xxschar2f",
                        "xxschar2g",
                        "xxschar2h"
                    ]
                ],
                "file": "/images/all_characters/xxschar2.png",
                "type": "character",
                "columns": 4,
                "size": "xxsmall"
            },
            "hairdo1": {
                "rows": 1,
                "type": "hair",
                "columns": 25,
                "file": "/images/cosmetics/hairdo/hairdo1.png?v=7",
                "matrix": [
                    [
                        "hairdo100",
                        "hairdo101",
                        "hairdo102",
                        "hairdo103",
                        "hairdo104",
                        "hairdo105",
                        "hairdo106",
                        "hairdo107",
                        "hairdo108",
                        "hairdo109",
                        "hairdo110",
                        "hairdo111",
                        "hairdo112",
                        "hairdo113",
                        "hairdo114",
                        "hairdo115",
                        "hairdo116",
                        "hairdo117",
                        "hairdo118",
                        "hairdo119",
                        "hairdo120",
                        "hairdo121",
                        "hairdo122",
                        "hairdo123",
                        "hairdo124"
                    ]
                ]
            },
            "hairdo6": {
                "rows": 1,
                "type": "hair",
                "columns": 25,
                "file": "/images/cosmetics/hairdo/hairdo6.png?v=3",
                "matrix": [
                    [
                        "hairdo600",
                        "hairdo601",
                        "hairdo602",
                        "hairdo603",
                        "hairdo604",
                        "hairdo605",
                        "hairdo606",
                        "hairdo607",
                        "hairdo608",
                        "hairdo609",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "adversaries": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/adversaries.png",
                "matrix": [
                    [
                        "a1",
                        "a2",
                        "a3",
                        "a4"
                    ],
                    [
                        "a5",
                        "a6",
                        "a7",
                        "a8"
                    ]
                ]
            },
            "hairdo5": {
                "rows": 1,
                "type": "hair",
                "columns": 25,
                "file": "/images/cosmetics/hairdo/hairdo5.png?v=7",
                "matrix": [
                    [
                        "hairdo500",
                        "hairdo501",
                        "hairdo502",
                        "hairdo503",
                        "hairdo504",
                        "hairdo505",
                        "hairdo506",
                        "hairdo507",
                        "hairdo508",
                        "hairdo509",
                        "hairdo510",
                        "hairdo511",
                        "hairdo512",
                        "hairdo513",
                        "hairdo514",
                        "hairdo515",
                        "hairdo516",
                        "hairdo517",
                        "hairdo518",
                        "hairdo519",
                        "hairdo520",
                        "hairdo521",
                        "hairdo522",
                        null,
                        null
                    ]
                ]
            },
            "fairies": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/fairies.png",
                "matrix": [
                    [
                        "greenfairy",
                        "redfairy",
                        "bluefairy",
                        "darkfairy"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "slenderman": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/slenderman.png",
                "matrix": [
                    [
                        "slenderman"
                    ]
                ]
            },
            "kglasses": {
                "rows": 1,
                "type": "face",
                "columns": 4,
                "file": "/images/cosmetics/accessories/kglasses.png?v=3",
                "matrix": [
                    [
                        "bwglasses",
                        "tortoise_g",
                        "catbatg",
                        "coolblueg"
                    ]
                ]
            },
            "sarmor1": {
                "rows": 2,
                "matrix": [
                    [
                        "sarmor1a",
                        "sarmor1b",
                        "sarmor1c",
                        "sarmor1d"
                    ],
                    [
                        "sarmor1e",
                        "sarmor1f",
                        "sarmor1g",
                        "sarmor1h"
                    ]
                ],
                "file": "/images/cosmetics/armors/sarmor1.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "small"
            },
            "halo": {
                "rows": 1,
                "type": "a_hat",
                "columns": 1,
                "file": "/images/cosmetics/hats/halo_anim.png",
                "matrix": [
                    [
                        "halo"
                    ]
                ]
            },
            "bwhair": {
                "rows": 1,
                "type": "hair",
                "columns": 1,
                "file": "/images/cosmetics/hairdo/bwhair.png?v=2",
                "matrix": [
                    [
                        "bwhair"
                    ]
                ]
            },
            "facemakeup": {
                "rows": 1,
                "type": "makeup",
                "columns": 25,
                "file": "/images/cosmetics/beardo/facemakeup.png?v=2",
                "matrix": [
                    [
                        "facemakeup00",
                        "facemakeup01",
                        "facemakeup02",
                        "facemakeup03",
                        "facemakeup04",
                        "facemakeup05",
                        "facemakeup06",
                        "facemakeup07",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "ship1": {
                "rows": 1,
                "type": "animation",
                "columns": 1,
                "file": "/images/tiles/characters/others/ship2.png",
                "matrix": [
                    [
                        "ship"
                    ]
                ]
            },
            "tinyfairies": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/tinyfairies.png",
                "matrix": [
                    [
                        "tinyp",
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "dwarf2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/dwarf2.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        "fancyd",
                        null,
                        null,
                        null
                    ]
                ]
            },
            "collection2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/collection2.png",
                "matrix": [
                    [
                        "sir",
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        "naked",
                        null
                    ]
                ]
            },
            "collection1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/collection1.png",
                "matrix": [
                    [
                        "daisy",
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        "robbie"
                    ]
                ]
            },
            "mskin1": {
                "rows": 2,
                "matrix": [
                    [
                        "mskin1a",
                        "mskin1b",
                        "mskin1c",
                        "mskin1d"
                    ],
                    [
                        "mskin1e",
                        "mskin1f",
                        "mskin1g",
                        "mskin1h"
                    ]
                ],
                "file": "/images/cosmetics/skins/mskin1.png",
                "type": "skin",
                "columns": 4,
                "size": "normal"
            },
            "mchar16": {
                "rows": 2,
                "matrix": [
                    [
                        "mchar16a",
                        "mchar16b",
                        "mchar16c",
                        "mchar16d"
                    ],
                    [
                        "mchar16e",
                        "mchar16f",
                        "mchar16g",
                        "mchar16h"
                    ]
                ],
                "file": "/images/all_characters/mchar16.png",
                "type": "character",
                "columns": 4,
                "size": "normal"
            },
            "sbody1": {
                "rows": 2,
                "matrix": [
                    [
                        "sbody1a",
                        "sbody1b",
                        "sbody1c",
                        "sbody1d"
                    ],
                    [
                        "sbody1e",
                        null,
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/armors/sbody1.png?v=4",
                "type": "body",
                "columns": 4,
                "size": "small"
            },
            "birds1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/birds1_modded.png",
                "matrix": [
                    [
                        "hen",
                        "rooster",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "marmor1": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor1a",
                        "marmor1b",
                        "marmor1c",
                        "marmor1d"
                    ],
                    [
                        "marmor1e",
                        "marmor1f",
                        "marmor1g",
                        "marmor1h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor1.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "jrpumpkins": {
                "rows": 1,
                "columns": 2,
                "file": "/images/tiles/monsters/jrpumpkins.png",
                "matrix": [
                    [
                        "jr",
                        "greenjr"
                    ]
                ]
            },
            "gking": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/goblinkingb.png",
                "matrix": [
                    [
                        "gking"
                    ]
                ]
            },
            "bonus1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/bonus1.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        "mranger",
                        "holo"
                    ]
                ]
            },
            "cobold": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/coboldProto.png",
                "matrix": [
                    [
                        "cobold"
                    ]
                ]
            },
            "npc1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/npc1.png",
                "matrix": [
                    [
                        "gcitizen",
                        "oldcitizen",
                        null,
                        null
                    ],
                    [
                        "fisherman",
                        null,
                        "gemmerchant",
                        null
                    ]
                ]
            },
            "beard1": {
                "rows": 1,
                "type": "beard",
                "columns": 41,
                "file": "/images/cosmetics/beardo/beard1.png?v=3",
                "matrix": [
                    [
                        "beard100",
                        "beard101",
                        "beard102",
                        "beard103",
                        "beard104",
                        "beard105",
                        "beard106",
                        "beard107",
                        "beard108",
                        "beard109",
                        "beard110",
                        "beard111",
                        "beard112",
                        "beard113",
                        "beard114",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "npc6": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/npc6.png",
                "matrix": [
                    [
                        "showoff",
                        "fmerchant",
                        "npc63",
                        "llady"
                    ],
                    [
                        "renaldo",
                        null,
                        "lucy",
                        null
                    ]
                ]
            },
            "npc5": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/npc5.png",
                "matrix": [
                    [
                        "npcc",
                        "lmerchant",
                        "mmerchant",
                        "purplelady"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "npc4": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/npc4.png",
                "matrix": [
                    [
                        "lady1",
                        "lady2",
                        "gabrielle",
                        "gabriella"
                    ],
                    [
                        "lady3",
                        null,
                        "lady4",
                        null
                    ]
                ]
            },
            "backpacks": {
                "rows": 1,
                "type": "s_wings",
                "columns": 5,
                "file": "/images/cosmetics/wings/backpacks.png",
                "matrix": [
                    [
                        "backpacks00",
                        "backpacks01",
                        "backpacks02",
                        "backpacks03",
                        "backpacks04"
                    ]
                ]
            },
            "franky": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/frankenstein.png",
                "matrix": [
                    [
                        "franky"
                    ]
                ]
            },
            "monsterbird3": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_bird3.png",
                "matrix": [
                    [
                        "turkeybird"
                    ]
                ]
            },
            "gravestones": {
                "rows": 2,
                "matrix": [
                    [
                        "gravestonea",
                        "gravestone",
                        "xgravestone0",
                        "xgravestone1",
                        "xgravestone2",
                        "xgravestone3",
                        "xgravestone4",
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/gravestones/gravestone.png",
                "rskip": true,
                "type": "gravestone",
                "columns": 10
            },
            "dknight1": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_dknight1.png",
                "matrix": [
                    [
                        "dknight1"
                    ]
                ]
            },
            "dknight2": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_dknight2.png",
                "matrix": [
                    [
                        "dknight2"
                    ]
                ]
            },
            "face1": {
                "rows": 1,
                "type": "face",
                "columns": 41,
                "file": "/images/cosmetics/accessories/eyeglasses.png?v=3",
                "matrix": [
                    [
                        "face100",
                        "face101",
                        "face102",
                        "face103",
                        "face104",
                        "face105",
                        "face106",
                        "face107",
                        "face108",
                        "face109",
                        "face110",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "raptor2": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_raptor2.png",
                "matrix": [
                    [
                        "redlizard"
                    ]
                ]
            },
            "raptor1": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_raptor1.png",
                "matrix": [
                    [
                        "greenlizard"
                    ]
                ]
            },
            "lskin1": {
                "rows": 2,
                "matrix": [
                    [
                        "lskin1a",
                        "lskin1b",
                        "lskin1c",
                        "lskin1d"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/skins/lskin1.png",
                "type": "skin",
                "columns": 4,
                "size": "large"
            },
            "lchar1": {
                "rows": 2,
                "matrix": [
                    [
                        "lchar1a",
                        "lchar1b",
                        "lchar1c",
                        "lchar1d"
                    ],
                    [
                        "lchar1e",
                        "lchar1f",
                        "lchar1g",
                        "lchar1h"
                    ]
                ],
                "file": "/images/all_characters/lchar1.png",
                "type": "character",
                "columns": 4,
                "size": "large"
            },
            "elementals": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/elemental.png",
                "matrix": [
                    [
                        "welemental",
                        "felemental",
                        "nelemental",
                        "eelemental"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "animals1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/animals1.png",
                "matrix": [
                    [
                        "puppy1",
                        "puppy2",
                        "puppy3",
                        "puppy4"
                    ],
                    [
                        "kitty1",
                        "kitty2",
                        "kitty3",
                        "kitty4"
                    ]
                ]
            },
            "stompy": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/stompy3.png",
                "matrix": [
                    [
                        "stompy"
                    ]
                ]
            },
            "animals2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/animals2.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        "porcupine",
                        null,
                        null,
                        null
                    ]
                ]
            },
            "knights": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/knights.png",
                "matrix": [
                    [
                        "pknight",
                        null,
                        "baron",
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "golem2": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_golem2.png",
                "matrix": [
                    [
                        "tree_golem"
                    ]
                ]
            },
            "golem1": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_golem1.png",
                "matrix": [
                    [
                        "stone_golem"
                    ]
                ]
            },
            "mage": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/mage.png",
                "matrix": [
                    [
                        "xmagefz",
                        "xmagefi",
                        "xmagen",
                        "xmagex"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "gcandle": {
                "rows": 1,
                "type": "a_hat",
                "columns": 1,
                "file": "/images/cosmetics/hats/gcandle_anim.png",
                "matrix": [
                    [
                        "gcandle"
                    ]
                ]
            },
            "dragold": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/Dragold.png?v=2",
                "matrix": [
                    [
                        "dragold"
                    ]
                ]
            },
            "chara2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara2.png",
                "matrix": [
                    [
                        null,
                        null,
                        "thief",
                        "fxrogue"
                    ],
                    [
                        null,
                        null,
                        "generalg",
                        "prince"
                    ]
                ]
            },
            "chara5": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara5.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        "thehelmet"
                    ],
                    [
                        null,
                        "mpriest",
                        "reaper",
                        "goblin"
                    ]
                ]
            },
            "chara4": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara4.png",
                "matrix": [
                    [
                        null,
                        "ftokener",
                        "grogue",
                        null
                    ],
                    [
                        "shadow",
                        "angel",
                        null,
                        null
                    ]
                ]
            },
            "chara7": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara7.png",
                "matrix": [
                    [
                        "frozenrogue",
                        null,
                        "fmage",
                        null
                    ],
                    [
                        "marven",
                        "fwarrior",
                        "blingbling",
                        "lionsuit"
                    ]
                ]
            },
            "chara6": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara6.png",
                "matrix": [
                    [
                        "mwarrior",
                        "mnwarrior",
                        "mwarrior_cool",
                        "fpaladin"
                    ],
                    [
                        "fkid",
                        "redhead",
                        "mrogue",
                        "mpaladin_kid"
                    ]
                ]
            },
            "chara8": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara8.png",
                "matrix": [
                    [
                        "pink",
                        "splithair",
                        "wizard",
                        "pwincess"
                    ],
                    [
                        "greencap",
                        null,
                        null,
                        null
                    ]
                ]
            },
            "military2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/military2.png",
                "matrix": [
                    [
                        null,
                        "nexus",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "bathat": {
                "rows": 1,
                "type": "a_hat",
                "columns": 1,
                "file": "/images/cosmetics/hats/bathat_anim.png",
                "matrix": [
                    [
                        "bathat"
                    ]
                ]
            },
            "goblinos": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/goblinos.png",
                "matrix": [
                    [
                        null,
                        null,
                        "gredpro",
                        "ggreenpro"
                    ],
                    [
                        null,
                        null,
                        "gpurplepro",
                        "gbluepro"
                    ]
                ]
            },
            "mmakeup": {
                "rows": 1,
                "type": "head",
                "columns": 14,
                "file": "/images/cosmetics/makeup/malemakeup.png?v=4",
                "matrix": [
                    [
                        "mmakeup00",
                        "mmakeup01",
                        "mmakeup02",
                        "mmakeup03",
                        "mmakeup04",
                        "mmakeup05",
                        "mmakeup06",
                        "mmakeup07",
                        "mmakeup08",
                        "mmakeup09",
                        "mmakeup10",
                        "mmakeup11",
                        "mmakeup12",
                        "mmakeup13"
                    ]
                ]
            },
            "newyear_tree": {
                "rows": 1,
                "type": "animation",
                "columns": 1,
                "file": "/images/tiles/characters/others/newyear_tree.png",
                "matrix": [
                    [
                        "newyear_tree"
                    ]
                ]
            },
            "mabw": {
                "rows": 1,
                "matrix": [
                    [
                        "mabw",
                        "nothing"
                    ]
                ],
                "file": "/images/cosmetics/armors/mabw.png?v=2",
                "type": "armor",
                "columns": 2,
                "size": "normal"
            },
            "mrgreen": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/green.png",
                "matrix": [
                    [
                        "mrgreen"
                    ]
                ]
            },
            "mbody1": {
                "rows": 2,
                "matrix": [
                    [
                        "mbody1a",
                        "mbody1b",
                        "mbody1c",
                        "mbody1d"
                    ],
                    [
                        "mbody1e",
                        "mbody1f",
                        "mbody1g",
                        "mbody1h"
                    ]
                ],
                "file": "/images/cosmetics/armors/mbody1.png?v=2",
                "type": "body",
                "columns": 4,
                "size": "normal"
            },
            "ligerx": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/liger_x.png",
                "matrix": [
                    [
                        "ligerx"
                    ]
                ]
            },
            "mbody3": {
                "rows": 2,
                "matrix": [
                    [
                        "mbody3a",
                        "mbody3b",
                        "mbody3c",
                        "mbody3d"
                    ],
                    [
                        "mbody3e",
                        "mbody3f",
                        "mbody3g",
                        "mbody3h"
                    ]
                ],
                "file": "/images/cosmetics/armors/mbody3.png?v=3",
                "type": "body",
                "columns": 4,
                "size": "normal"
            },
            "mbody2": {
                "rows": 2,
                "matrix": [
                    [
                        "mbody2a",
                        "mbody2b",
                        "mbody2c",
                        "mbody2d"
                    ],
                    [
                        "mbody2e",
                        "mbody2f",
                        "mbody2g",
                        "mbody2h"
                    ]
                ],
                "file": "/images/cosmetics/armors/mbody2.png?v=6",
                "type": "body",
                "columns": 4,
                "size": "normal"
            },
            "mbody5": {
                "rows": 2,
                "matrix": [
                    [
                        "mbody5a",
                        "mbody5b",
                        "mbody5c",
                        "mbody5d"
                    ],
                    [
                        "mbody5e",
                        "mbody5f",
                        "mbody5g",
                        "mbody5h"
                    ]
                ],
                "file": "/images/cosmetics/armors/mbody5.png?v=3",
                "type": "body",
                "columns": 4,
                "size": "normal"
            },
            "mbody4": {
                "rows": 2,
                "matrix": [
                    [
                        "mbody4a",
                        "mbody4b",
                        "mbody4c",
                        "mbody4d"
                    ],
                    [
                        "mbody4e",
                        "mbody4f",
                        "mbody4g",
                        "mbody4h"
                    ]
                ],
                "file": "/images/cosmetics/armors/mbody4.png?v=3",
                "type": "body",
                "columns": 4,
                "size": "normal"
            },
            "mbody6": {
                "rows": 2,
                "matrix": [
                    [
                        "mbody6a",
                        "mbody6b",
                        "mbody6c",
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/armors/mbody6.png",
                "type": "body",
                "columns": 4,
                "size": "normal"
            },
            "monsterc6": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/monsterc6.png",
                "matrix": [
                    [
                        "prat",
                        "pppompom",
                        "spompom",
                        "mighty"
                    ],
                    [
                        "slither",
                        "deadgob",
                        "pinkgoblin",
                        "red"
                    ]
                ]
            },
            "kunique": {
                "rows": 1,
                "type": "head",
                "columns": 4,
                "file": "/images/cosmetics/makeup/kunique.png?v=2",
                "matrix": [
                    [
                        "bwhead",
                        "blackhead",
                        "testm1",
                        "testm2"
                    ]
                ]
            },
            "monsterc2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/monsterc2.png",
                "matrix": [
                    [
                        null,
                        "ent",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "boar": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_boar.png",
                "matrix": [
                    [
                        "boar"
                    ]
                ]
            },
            "mbw": {
                "rows": 1,
                "matrix": [
                    [
                        "mbw"
                    ]
                ],
                "file": "/images/cosmetics/skins/mbw.png",
                "type": "skin",
                "columns": 1,
                "size": "normal"
            },
            "minotaur": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_minotaur.png",
                "matrix": [
                    [
                        "minotaur"
                    ]
                ]
            },
            "marmor9": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor9a",
                        "marmor9b",
                        "marmor9c",
                        "marmor9d"
                    ],
                    [
                        "marmor9e",
                        "marmor9f",
                        "marmor9g",
                        "marmor9h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor9.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "marmor8": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor8a",
                        "marmor8b",
                        "marmor8c",
                        "marmor8d"
                    ],
                    [
                        "marmor8e",
                        "marmor8f",
                        "marmor8g",
                        "marmor8h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor8.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "larmor1": {
                "rows": 2,
                "matrix": [
                    [
                        "larmor1a",
                        "larmor1b",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/armors/larmor1.png",
                "type": "armor",
                "columns": 4,
                "size": "large"
            },
            "swa": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/sheet_winnersa.png",
                "matrix": [
                    [
                        null,
                        "scarf",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        "proft",
                        "twig"
                    ]
                ]
            },
            "military3": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/military3.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        "asoldier",
                        null,
                        null
                    ]
                ]
            },
            "marmor3": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor3a",
                        "marmor3b",
                        "marmor3c",
                        "marmor3d"
                    ],
                    [
                        "marmor3e",
                        "marmor3f",
                        "marmor3g",
                        "marmor3h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor3.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "swb": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/sheet_winnersb.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        "bobo"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "marmor5": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor5a",
                        "marmor5b",
                        "marmor5c",
                        "marmor5d"
                    ],
                    [
                        "marmor5e",
                        "marmor5f",
                        "marmor5g",
                        "marmor5h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor5.png?v=4",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "marmor4": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor4a",
                        "marmor4b",
                        "marmor4c",
                        "marmor4d"
                    ],
                    [
                        "marmor4e",
                        "marmor4f",
                        "marmor4g",
                        "marmor4h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor4.png?v=4",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "marmor7": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor7a",
                        "marmor7b",
                        "marmor7c",
                        "marmor7d"
                    ],
                    [
                        "marmor7e",
                        "marmor7f",
                        "marmor7g",
                        "marmor7h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor7.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "marmor6": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor6a",
                        "marmor6b",
                        "marmor6c",
                        "marmor6d"
                    ],
                    [
                        "marmor6e",
                        "marmor6f",
                        "marmor6g",
                        "marmor6h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor6.png?v=3",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "json": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/json.png",
                "matrix": [
                    [
                        "json"
                    ]
                ]
            },
            "wings3": {
                "rows": 1,
                "type": "s_wings",
                "columns": 5,
                "file": "/images/cosmetics/wings/wings3.png?v=2",
                "matrix": [
                    [
                        "wings300",
                        "wings301",
                        "wings302",
                        "wings303",
                        "wings304"
                    ]
                ]
            },
            "wings1": {
                "rows": 1,
                "type": "s_wings",
                "columns": 5,
                "file": "/images/cosmetics/wings/wings1.png",
                "matrix": [
                    [
                        "wings100",
                        "wings101",
                        "wings102",
                        "wings103",
                        "wings104"
                    ]
                ]
            },
            "mask1": {
                "rows": 1,
                "type": "beard",
                "columns": 25,
                "file": "/images/cosmetics/beardo/mask1.png?v=2",
                "matrix": [
                    [
                        "mask100",
                        "mask101",
                        "mask102",
                        "mask103",
                        "mask104",
                        "mask105",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "chara3": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/chara3.png",
                "matrix": [
                    [
                        null,
                        null,
                        "franger",
                        "lilith"
                    ],
                    [
                        null,
                        null,
                        "frogue",
                        null
                    ]
                ]
            },
            "wolf1": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_wolf1.png",
                "matrix": [
                    [
                        "wolf"
                    ]
                ]
            },
            "bscorpion": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/blackscorpion.png",
                "matrix": [
                    [
                        "bscorpion"
                    ]
                ]
            },
            "jsonx": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/characters/others/jsonX.png",
                "matrix": [
                    [
                        "jsonx"
                    ]
                ]
            },
            "chests": {
                "rows": 2,
                "type": "v_animation",
                "columns": 12,
                "file": "/images/tiles/items/chests.png?v=2",
                "matrix": [
                    [
                        "chestp",
                        "chest1",
                        null,
                        null,
                        "chest2",
                        null,
                        null,
                        "chest3",
                        null,
                        null,
                        "chest4",
                        null
                    ],
                    [
                        null,
                        "chest5",
                        null,
                        null,
                        "chest6",
                        null,
                        null,
                        "chest7",
                        null,
                        null,
                        "chest8",
                        null
                    ]
                ]
            },
            "monsters4": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/monster4.png",
                "matrix": [
                    [
                        "ghost",
                        null,
                        null,
                        "skeletor"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "monsters2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/monster2.png?v=3",
                "matrix": [
                    [
                        "crab",
                        "tortoise",
                        "squig",
                        "croc"
                    ],
                    [
                        "frog",
                        "squigtoad",
                        "poisio",
                        "armadillo"
                    ]
                ]
            },
            "cacto": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_cacto.png",
                "matrix": [
                    [
                        "cactusman"
                    ]
                ]
            },
            "monsters1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/monster1.png",
                "matrix": [
                    [
                        "goo",
                        "rat",
                        "spider",
                        "scorpion"
                    ],
                    [
                        "bloodworm",
                        "snake",
                        "bee",
                        "bat"
                    ]
                ]
            },
            "grinch": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/grinch.png",
                "matrix": [
                    [
                        "grinch"
                    ]
                ]
            },
            "wolf2": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_wolf2.png",
                "matrix": [
                    [
                        "wolfie"
                    ]
                ]
            },
            "marmor11": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor11a",
                        "marmor11b",
                        "marmor11c",
                        "marmor11d"
                    ],
                    [
                        "marmor11e",
                        "marmor11f",
                        "marmor11g",
                        "marmor11h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor11.png",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "marmor10": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor10a",
                        "marmor10b",
                        "marmor10c",
                        "marmor10d"
                    ],
                    [
                        "marmor10e",
                        "marmor10f",
                        "marmor10g",
                        "marmor10h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor10.png",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "marmor12": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor12a",
                        "marmor12b",
                        "marmor12c",
                        "marmor12d"
                    ],
                    [
                        "marmor12e",
                        "marmor12f",
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor12.png",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "creatures1": {
                "rows": 1,
                "columns": 4,
                "file": "/images/tiles/monsters/creatures1.png",
                "matrix": [
                    [
                        null,
                        null,
                        "mummy",
                        "booboo"
                    ]
                ]
            },
            "creatures2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/creatures2.png",
                "matrix": [
                    [
                        "oneeye",
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "hairdo2": {
                "rows": 1,
                "type": "hair",
                "columns": 25,
                "file": "/images/cosmetics/hairdo/hairdo2.png?v=7",
                "matrix": [
                    [
                        "hairdo200",
                        "hairdo201",
                        "hairdo202",
                        "hairdo203",
                        "hairdo204",
                        "hairdo205",
                        "hairdo206",
                        "hairdo207",
                        "hairdo208",
                        "hairdo209",
                        "hairdo210",
                        "hairdo211",
                        "hairdo212",
                        "hairdo213",
                        "hairdo214",
                        "hairdo215",
                        "hairdo216",
                        "hairdo217",
                        "hairdo218",
                        "hairdo219",
                        "hairdo220",
                        "hairdo221",
                        "hairdo222",
                        "hairdo223",
                        "hairdo224"
                    ]
                ]
            },
            "hairdo3": {
                "rows": 1,
                "type": "hair",
                "columns": 25,
                "file": "/images/cosmetics/hairdo/hairdo3.png?v=7",
                "matrix": [
                    [
                        "hairdo300",
                        "hairdo301",
                        "hairdo302",
                        "hairdo303",
                        "hairdo304",
                        "hairdo305",
                        "hairdo306",
                        "hairdo307",
                        "hairdo308",
                        "hairdo309",
                        "hairdo310",
                        "hairdo311",
                        "hairdo312",
                        "hairdo313",
                        "hairdo314",
                        "hairdo315",
                        "hairdo316",
                        "hairdo317",
                        "hairdo318",
                        "hairdo319",
                        "hairdo320",
                        "hairdo321",
                        "hairdo322",
                        "hairdo323",
                        "hairdo324"
                    ]
                ]
            },
            "jpa": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/winners_jpa.png",
                "matrix": [
                    [
                        null,
                        "greengreen",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "jpb": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/winners_jpb.png",
                "matrix": [
                    [
                        null,
                        "pinkie",
                        null,
                        "purpo"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "treant": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_treant.png",
                "matrix": [
                    [
                        "treant"
                    ]
                ]
            },
            "custom1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/custom1.png?v=11",
                "matrix": [
                    [
                        "mwarrior2",
                        "mranger2",
                        "fpriest",
                        "trexw"
                    ],
                    [
                        "showoffi",
                        "bpri",
                        "mmage",
                        "enterrr"
                    ]
                ]
            },
            "custom2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/custom2.png?v=4",
                "matrix": [
                    [
                        "trexp",
                        null,
                        null,
                        null
                    ],
                    [
                        "konami",
                        "potiongirl",
                        "j2",
                        null
                    ]
                ]
            },
            "custom3": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/custom3.png?v=1",
                "matrix": [
                    [
                        "spkc",
                        "spkw",
                        "bunny",
                        "bouncer"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "makeup1": {
                "rows": 1,
                "type": "head",
                "columns": 42,
                "file": "/images/cosmetics/makeup/makeup1.png?v=6",
                "matrix": [
                    [
                        "makeup100",
                        "makeup101",
                        "makeup102",
                        "makeup103",
                        "makeup104",
                        "makeup105",
                        "makeup106",
                        "makeup107",
                        "makeup108",
                        "makeup109",
                        "makeup110",
                        "makeup111",
                        "makeup112",
                        "makeup113",
                        "makeup114",
                        "makeup115",
                        "makeup116",
                        "makeup117",
                        "makeup118",
                        "makeup119",
                        "makeup120",
                        "makeup121",
                        "makeup122",
                        "makeup123",
                        "makeup124",
                        "makeup125",
                        "makeup126",
                        "makeup127",
                        "makeup128",
                        "makeup129",
                        "makeup130",
                        "makeup131",
                        "makeup132",
                        "makeup133",
                        "makeup134",
                        "makeup135",
                        "makeup136",
                        "makeup137",
                        "makeup138",
                        "makeup139",
                        "makeup140",
                        "makeup141"
                    ]
                ]
            },
            "animation1": {
                "rows": 8,
                "type": "animation",
                "columns": 4,
                "file": "/images/tiles/characters/animation1i.png",
                "matrix": [
                    [
                        null,
                        "pflow",
                        "sidesword",
                        "flute"
                    ],
                    [
                        null,
                        "fancypots",
                        "pike",
                        "doublesword"
                    ],
                    [
                        null,
                        null,
                        "daggers",
                        "hammer"
                    ],
                    [
                        null,
                        null,
                        "swdagger",
                        "miniharp"
                    ],
                    [
                        "bow",
                        "spell",
                        "powerup",
                        "magic"
                    ],
                    [
                        "bow2",
                        "sth1",
                        "tricks",
                        "yellowlady"
                    ],
                    [
                        "praise",
                        "drunk",
                        "hairs",
                        "yellowwarrior"
                    ],
                    [
                        "femalesword",
                        "femalelongsword",
                        "scrolls",
                        "double-axe"
                    ]
                ]
            },
            "animation2": {
                "rows": 8,
                "type": "animation",
                "columns": 4,
                "file": "/images/tiles/characters/animation2.png",
                "matrix": [
                    [
                        "armorguy",
                        "zengirl",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        "goblin_a",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "animation3": {
                "rows": 8,
                "type": "animation",
                "columns": 4,
                "file": "/images/tiles/characters/animation3.png",
                "matrix": [
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        "geekgirl",
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        "exchanger",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        "newupgrade",
                        null,
                        null
                    ]
                ]
            },
            "hats4": {
                "rows": 1,
                "type": "hat",
                "columns": 25,
                "file": "/images/cosmetics/hats/hats4.png?v=4",
                "matrix": [
                    [
                        "hat400",
                        "hat401",
                        "hat402",
                        "hat403",
                        "hat404",
                        "hat405",
                        "hat406",
                        "hat407",
                        "hat408",
                        "hat409",
                        "hat410",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "hats3": {
                "rows": 1,
                "type": "hat",
                "columns": 25,
                "file": "/images/cosmetics/hats/hats3.png?v=2",
                "matrix": [
                    [
                        "hat300",
                        "hat301",
                        "hat302",
                        "hat303",
                        "hat304",
                        "hat305",
                        "hat306",
                        "hat307",
                        "hat308",
                        "hat309",
                        "hat310",
                        "hat311",
                        "hat312",
                        "hat313",
                        "hat314",
                        "hat315",
                        "hat316",
                        "hat317",
                        "hat318",
                        "hat319",
                        "hat320",
                        "hat321",
                        "hat322",
                        "hat323",
                        null
                    ]
                ]
            },
            "hats2": {
                "rows": 1,
                "type": "hat",
                "columns": 25,
                "file": "/images/cosmetics/hats/hats2.png?v=3",
                "matrix": [
                    [
                        "hat200",
                        "hat201",
                        "hat202",
                        "hat203",
                        "hat204",
                        "hat205",
                        "hat206",
                        "hat207",
                        "hat208",
                        "hat209",
                        "hat210",
                        "hat211",
                        "hat212",
                        "hat213",
                        "hat214",
                        "hat215",
                        "hat216",
                        "hat217",
                        "hat218",
                        "hat219",
                        "hat220",
                        "hat221",
                        "hat222",
                        "hat223",
                        "hat224"
                    ]
                ]
            },
            "hats1": {
                "rows": 1,
                "type": "hat",
                "columns": 25,
                "file": "/images/cosmetics/hats/hats1.png?v=2",
                "matrix": [
                    [
                        "hat100",
                        "hat101",
                        "hat102",
                        "hat103",
                        "hat104",
                        "hat105",
                        "hat106",
                        "hat107",
                        "hat108",
                        "hat109",
                        "hat110",
                        "hat111",
                        "hat112",
                        "hat113",
                        "hat114",
                        "hat115",
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "fmakeup": {
                "rows": 1,
                "type": "head",
                "columns": 13,
                "file": "/images/cosmetics/makeup/femalemakeupv2.png",
                "matrix": [
                    [
                        "fmakeup00",
                        "fmakeup01",
                        "fmakeup02",
                        "fmakeup03",
                        "fmakeup04",
                        "fmakeup05",
                        "fmakeup06",
                        "fmakeup07",
                        "fmakeup08",
                        "fmakeup09",
                        "fmakeup10",
                        "fmakeup11",
                        "fmakeup12"
                    ]
                ]
            },
            "hairdo4": {
                "rows": 1,
                "type": "hair",
                "columns": 25,
                "file": "/images/cosmetics/hairdo/hairdo4.png?v=7",
                "matrix": [
                    [
                        "hairdo400",
                        "hairdo401",
                        "hairdo402",
                        "hairdo403",
                        "hairdo404",
                        "hairdo405",
                        "hairdo406",
                        "hairdo407",
                        "hairdo408",
                        "hairdo409",
                        "hairdo410",
                        "hairdo411",
                        "hairdo412",
                        "hairdo413",
                        "hairdo414",
                        "hairdo415",
                        "hairdo416",
                        "hairdo417",
                        "hairdo418",
                        "hairdo419",
                        "hairdo420",
                        "hairdo421",
                        "hairdo422",
                        "hairdo423",
                        "hairdo424"
                    ]
                ]
            },
            "backpacks2": {
                "rows": 1,
                "type": "s_wings",
                "columns": 5,
                "file": "/images/cosmetics/wings/backpack2.png",
                "matrix": [
                    [
                        "backpacks200",
                        "backpacks201",
                        null,
                        null,
                        null
                    ]
                ]
            },
            "monsters3": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/monster3c.png",
                "matrix": [
                    [
                        "minimush",
                        "midimush",
                        "plantoid",
                        "uglyplant"
                    ],
                    [
                        "iceroamer",
                        "fireroamer",
                        "chestm",
                        "chestx"
                    ]
                ]
            },
            "rudolph": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/rudolphi.png",
                "matrix": [
                    [
                        "rudolph"
                    ]
                ]
            },
            "mcustom1": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/custom1.png?v=6",
                "matrix": [
                    [
                        "cgoo",
                        "crabx",
                        "bbpompom",
                        "gscorpion"
                    ],
                    [
                        "osnake",
                        "mole",
                        "xscorpion",
                        "arcticbee"
                    ]
                ]
            },
            "mcustom2": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/custom2.png?v=5",
                "matrix": [
                    [
                        "pinkgooi",
                        "pinkgoo",
                        null,
                        null
                    ],
                    [
                        "goldenbat",
                        "wabbit",
                        null,
                        "stoneworm"
                    ]
                ]
            },
            "schar7": {
                "rows": 2,
                "matrix": [
                    [
                        "schar7a",
                        "schar7b",
                        "schar7c",
                        "schar7d"
                    ],
                    [
                        "schar7e",
                        "schar7f",
                        "schar7g",
                        "schar7h"
                    ]
                ],
                "file": "/images/all_characters/schar7.png",
                "type": "character",
                "columns": 4,
                "size": "small"
            },
            "tristone_f": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/tristone_f.png",
                "matrix": [
                    [
                        "tf_pink",
                        "tf_blue",
                        "tf_green",
                        "tf_orange"
                    ],
                    [
                        "tf_purple",
                        null,
                        null,
                        null
                    ]
                ]
            },
            "test": {
                "rows": 1,
                "columns": 4,
                "file": "/images/tiles/characters/ninja_turtles.png",
                "matrix": [
                    [
                        "t1",
                        "test",
                        "t3",
                        "t4"
                    ]
                ]
            },
            "marmor2": {
                "rows": 2,
                "matrix": [
                    [
                        "marmor2a",
                        "marmor2b",
                        "marmor2c",
                        "marmor2d"
                    ],
                    [
                        "marmor2e",
                        "marmor2f",
                        "marmor2g",
                        "marmor2h"
                    ]
                ],
                "file": "/images/cosmetics/armors/marmor2.png?v=3",
                "type": "armor",
                "columns": 4,
                "size": "normal"
            },
            "npc3": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/npc3.png",
                "matrix": [
                    [
                        null,
                        "mailman",
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "mechagnome": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/mecha_gnome.png",
                "matrix": [
                    [
                        "mechagnome"
                    ]
                ]
            },
            "monsterbird1": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_bird1.png",
                "matrix": [
                    [
                        "bigbird"
                    ]
                ]
            },
            "phoenix": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_phoenix.png",
                "matrix": [
                    [
                        "phoenix"
                    ]
                ]
            },
            "animationc": {
                "rows": 8,
                "type": "animation",
                "columns": 4,
                "file": "/images/tiles/characters/animationc.png?v=4",
                "matrix": [
                    [
                        "santa",
                        "pvptokens",
                        null,
                        null
                    ],
                    [
                        "brewingwitch",
                        "funtokens",
                        null,
                        null
                    ],
                    [
                        "test_a",
                        null,
                        "test_b",
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ]
            },
            "tristone_m": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/characters/tristone_m.png",
                "matrix": [
                    [
                        "tm_red",
                        "tm_brown",
                        "tm_yellow",
                        "tm_green"
                    ],
                    [
                        "tm_gray",
                        "tm_blue",
                        "tm_purple",
                        "tm_white"
                    ]
                ]
            },
            "robots": {
                "rows": 2,
                "columns": 4,
                "file": "/images/tiles/monsters/robots.png",
                "matrix": [
                    [
                        null,
                        null,
                        "zapper0",
                        null
                    ],
                    [
                        null,
                        null,
                        null,
                        "fieldgen0"
                    ]
                ]
            },
            "lizardman2": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_lizardman2.png",
                "matrix": [
                    [
                        "redlizardman"
                    ]
                ]
            },
            "lizardman1": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_lizardman1.png",
                "matrix": [
                    [
                        "greenlizardman"
                    ]
                ]
            },
            "monsterbird2": {
                "skip": 1,
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/monster_bird2.png",
                "matrix": [
                    [
                        "blackbird"
                    ]
                ]
            },
            "cbee": {
                "rows": 1,
                "columns": 1,
                "file": "/images/tiles/monsters/cbee.png",
                "matrix": [
                    [
                        "cutebee"
                    ]
                ]
            },
            "sskin1": {
                "rows": 2,
                "matrix": [
                    [
                        "sskin1a",
                        "sskin1b",
                        "sskin1c",
                        "sskin1d"
                    ],
                    [
                        "sskin1e",
                        "sskin1f",
                        "sskin1g",
                        "sskin1h"
                    ]
                ],
                "file": "/images/cosmetics/skins/sskin1.png",
                "type": "skin",
                "columns": 4,
                "size": "small"
            },
            "sarmor2": {
                "rows": 2,
                "matrix": [
                    [
                        "sarmor2a",
                        "sarmor2b",
                        "sarmor2c",
                        "sarmor2d"
                    ],
                    [
                        null,
                        null,
                        null,
                        null
                    ]
                ],
                "file": "/images/cosmetics/armors/sarmor2.png?v=2",
                "type": "armor",
                "columns": 4,
                "size": "small"
            }
        }
    }
    expect(G_sprites).not.toBe(undefined)
})