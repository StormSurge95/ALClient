import { Game } from "./Game"
import { Character } from "./Character"
import { GData2 } from "./definitions/adventureland-data"
import { ServerData } from "./definitions/adventureland-server"
import { IPosition } from "./definitions/adventureland"

let G: GData2
let priest: Character
let warrior: Character
const serverData: ServerData = { region: "ASIA", name: "I", addr: "test", port: 0, players: 0, key: "ASIAI" }
beforeAll(async () => {
    G = await Game.getGData()
    priest = new Character(undefined, undefined, undefined, G, serverData)
    priest.updateCharacter({
        id: "earthPri",
        party: "earthMer",
        owner: "12345",
        abs: false,
        afk: "code",
        age: 404,
        angle: -85.76360520094116,
        apiercing: 9,
        armor: 162,
        attack: 4149,
        blast: 0,
        c: {},
        cash: 3036,
        cc: 6.5,
        cid: 60164,
        controller: "",
        courage: 2,
        crit: 0.75,
        critdamage: 0,
        ctype: "priest",
        cx: {},
        dex: 48,
        dreturn: 1,
        emx: { drop_egg: 1 },
        esize: 28,
        evasion: 3.5,
        explosion: 0,
        fear: 0,
        firesistance: 0,
        for: 30.25,
        frequency: 1.1786382113821139,
        fzresistance: 1,
        going_x: 671,
        going_y: -225,
        gold: 1000793,
        goldm: 1.2,
        hp: 11262,
        in: "mtunnel",
        int: 399,
        isize: 42,
        items: [{ name: "computer" }, { name: "tracker" }, { q: 999, name: "mpot1" }, { q: 1000, name: "hpot1" }],
        level: 86,
        lifesteal: 2.5,
        luckm: 1.4849999999999999,
        m: 451,
        manasteal: 0,
        map: "mtunnel",
        max_hp: 11262,
        max_mp: 7525,
        max_xp: 6200000000,
        mcourage: 19,
        miss: 0,
        move_num: 18588709,
        moving: true,
        mp: 7125,
        mp_cost: 56,
        mp_reduction: 0,
        name: "earthPri",
        pcourage: 2,
        pdps: 181472.0016944313,
        pnresistance: 0,
        q: {},
        range: 214,
        reflection: 5,
        resistance: 363,
        rip: false,
        rpiercing: 91,
        s: { mlifesteal: { ms: 3521515 }, mluck: { ms: 3567460, f: "earthMer", strong: true } },
        skin: "fpriest",
        slots: {
            amulet: { level: 5, name: "intamulet" },
            belt: { level: 4, name: "intbelt" },
            cape: { acc: 35946, ps: ["festive"], name: "angelwings", level: 8, ach: "festive", p: "festive" },
            chest: { name: "wattire", level: 9, p: "shiny", stat_type: "int" },
            earring1: { level: 5, name: "intearring" },
            earring2: { level: 5, name: "intearring" },
            elixir: { expires: "2021-01-10T00:58:46.062Z", name: "elixirluck", ex: true },
            gloves: { stat_type: "int", name: "wgloves", level: 9 },
            helmet: { name: "wcap", level: 9, stat_type: "int" },
            mainhand: { acc: 1, name: "firestaff", level: 9 },
            offhand: { name: "wbook1", level: 3 },
            orb: { name: "jacko", level: 4 },
            pants: { acc: 3076803, name: "wbreeches", level: 9, ach: "gooped", stat_type: "int" },
            ring1: { name: "intring", level: 4 },
            ring2: { level: 4, name: "intring" },
            shoes: { level: 9, stat_type: "int", name: "wshoes" }
        },
        speed: 69,
        str: 52,
        stun: 0,
        target: "2067865",
        targets: 0,
        tax: 0.01,
        vit: 111,
        x: 667.4007558893662,
        xp: 2890596969.9000006,
        xpm: 1.19,
        xrange: 25,
        y: -176.41020450644513,
    })

    warrior = new Character(undefined, undefined, undefined, G, serverData)
    warrior.updateCharacter({
        "hp": 8021,
        "max_hp": 17379,
        "mp": 1603,
        "max_mp": 2015,
        "xp": 358723304.59999967,
        "attack": 2500,
        "frequency": 1.2302949574138597,
        "speed": 80,
        "range": 43,
        "armor": 541,
        "resistance": 369,
        "level": 87,
        "party": "earthMer",
        "rip": false,
        "afk": "code",
        "target": "1376991",
        "s": {
            "mlifesteal": {
                "ms": 3421915
            },
            "mluck": {
                "ms": 3027636,
                "f": "earthMer",
                "strong": true
            },
            "monsterhunt": {
                "sn": "US II",
                "id": "bbpompom",
                "c": 148,
                "ms": 1429212,
                "dl": true
            }
        },
        "c": {
            "town": {
                "ms": 2583
            }
        },
        "q": {},
        "age": 566,
        "pdps": 387649.7774099083,
        "id": "earthWar",
        "x": 600,
        "y": -1275,
        "moving": false,
        "going_x": 0,
        "going_y": 11,
        "abs": false,
        "move_num": 15980872,
        "angle": 113.52706394742098,
        "cid": 8380,
        "controller": "",
        "skin": "fwarrior",
        "cx": {},
        "slots": {
            "ring1": {
                "level": 4,
                "name": "strring"
            },
            "ring2": {
                "name": "strring",
                "level": 5
            },
            "earring1": {
                "level": 5,
                "name": "strearring"
            },
            "earring2": {
                "name": "strearring",
                "level": 5
            },
            "belt": {
                "level": 5,
                "name": "strbelt"
            },
            "mainhand": {
                "acc": 5,
                "ps": [
                    "firehazard"
                ],
                "name": "fireblade",
                "level": 9,
                "p": "firehazard"
            },
            "offhand": {
                "name": "candycanesword",
                "level": 9
            },
            "helmet": {
                "acc": 1,
                "level": 9,
                "stat_type": "str",
                "name": "helmet1"
            },
            "chest": {
                "stat_type": "str",
                "name": "coat1",
                "level": 9
            },
            "pants": {
                "acc": 315748,
                "name": "pants1",
                "level": 9,
                "ach": "gooped",
                "stat_type": "str"
            },
            "shoes": {
                "level": 9,
                "stat_type": "str",
                "name": "wingedboots"
            },
            "gloves": {
                "stat_type": "str",
                "name": "gloves1",
                "level": 9
            },
            "amulet": {
                "name": "stramulet",
                "level": 5
            },
            "orb": {
                "level": 0,
                "name": "jacko"
            },
            "elixir": {
                "expires": "2021-04-11T03:16:29.795Z",
                "name": "elixirluck",
                "ex": true
            },
            "cape": {
                "acc": 343382,
                "ps": [
                    "festive"
                ],
                "name": "cape",
                "level": 8,
                "ach": "festive",
                "p": "festive",
                "stat_type": "str"
            }
        },
        "ctype": "warrior",
        "owner": "12345",
        "int": 62,
        "str": 378,
        "dex": 58,
        "vit": 103,
        "for": 42.75,
        "mp_cost": 14,
        "mp_reduction": 0,
        "max_xp": 7900000000,
        "goldm": 1.1,
        "xpm": 1.1400000000000001,
        "luckm": 1.35,
        "map": "winterland",
        "in": "winterland",
        "isize": 42,
        "esize": 20,
        "gold": 5046945,
        "cash": 4336,
        "targets": 0,
        "m": 48,
        "evasion": 1.25,
        "miss": 0,
        "reflection": 0.5,
        "lifesteal": 2.5,
        "manasteal": 0,
        "rpiercing": 31,
        "apiercing": 9,
        "crit": 0.75,
        "critdamage": 4,
        "dreturn": 1,
        "tax": 0.01,
        "xrange": 25,
        "pnresistance": 0,
        "firesistance": 0,
        "fzresistance": 1,
        "stun": 0,
        "blast": 0,
        "explosion": 0,
        "courage": 18,
        "mcourage": 2,
        "pcourage": 2,
        "fear": 0,
        "items": [
            {
                "name": "computer"
            },
            {
                "name": "tracker"
            },
            {
                "q": 1000,
                "name": "mpot1"
            },
            {
                "q": 1000,
                "name": "hpot1"
            },
            {
                "level": 4,
                "name": "orbg"
            },
            {
                "acc": 1,
                "level": 8,
                "name": "bataxe"
            },
            {
                "name": "carrotsword",
                "level": 8
            },
            {
                "name": "shield",
                "level": 8
            },
            {
                "acc": 1,
                "name": "basher",
                "level": 8
            },
            {
                "name": "swordofthedead",
                "level": 9
            },
            {
                "name": "woodensword",
                "level": 8
            },
            {
                "name": "test_orb",
                "level": 1
            },
            {
                "name": "vitring",
                "level": 0
            },
            {
                "name": "sshield",
                "level": 8
            },
            {
                "name": "lantern",
                "level": 3
            },
            {
                "name": "orbofstr",
                "level": 2
            },
            {
                "name": "heartwood",
                "level": 3,
                "p": "glitched"
            },
            {
                "name": "strring",
                "level": 0
            },
            {
                "q": 1,
                "name": "xptome"
            },
            {
                "name": "ringsj",
                "level": 0
            },
            {
                "name": "bfur",
                "q": 1
            },
            {
                "name": "seashell",
                "q": 1
            },
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
        ],
        "cc": 16,
        "name": "earthWar"
    })
}, 30000)

afterAll(async () => {
    Game.disconnect()
})

test("Character.calculateItemCost", async () => {
    // The costs below assume these G costs, so check that they're still good
    expect(G.items.scroll0.g).toBe(1000)
    expect(G.items.scroll1.g).toBe(40000)
    expect(G.items.pants.g).toBe(7800)
    expect(G.items.dexring.g).toBe(24000)

    // Normal item
    expect(priest.calculateItemCost({ name: "scroll0" })).toBe(1000)
    expect(priest.calculateItemCost({ name: "scroll1" })).toBe(40000)

    // Upgradable items
    expect(priest.calculateItemCost({ name: "pants", level: 0 })).toBe(7800)
    expect(priest.calculateItemCost({ name: "pants", level: 1 })).toBe(8800)
    expect(priest.calculateItemCost({ name: "pants", level: 2 })).toBe(9800)
    expect(priest.calculateItemCost({ name: "pants", level: 3 })).toBe(10800)
    expect(priest.calculateItemCost({ name: "pants", level: 4 })).toBe(11800)
    expect(priest.calculateItemCost({ name: "pants", level: 5 })).toBe(12800)
    expect(priest.calculateItemCost({ name: "pants", level: 6 })).toBe(13800)
    expect(priest.calculateItemCost({ name: "pants", level: 7 })).toBe(53800)

    // Compoundable items
    expect(priest.calculateItemCost({ name: "dexring", level: 0 })).toBe(24000)
    expect(priest.calculateItemCost({ name: "dexring", level: 1 })).toBe(78400)
    expect(priest.calculateItemCost({ name: "dexring", level: 2 })).toBe(241600)
    expect(priest.calculateItemCost({ name: "dexring", level: 3 })).toBe(964800)
    expect(priest.calculateItemCost({ name: "dexring", level: 4 })).toBe(3134400)
    expect(priest.calculateItemCost({ name: "dexring", level: 5 })).toBe(18603200)
})

test("Character.canBuy", async () => {
    expect(priest.canBuy("mpot1")).toBe(true) // We have a computer and enough gold
    expect(priest.canBuy("hpot1")).toBe(true)
    expect(priest.canBuy("computer")).toBe(false)
})

test("Character.canUse", async () => {
    expect(priest.canUse("attack")).toBe(true)
    expect(priest.canUse("partyheal")).toBe(true)
    expect(priest.canUse("3shot")).toBe(false)

    // Make partyheal on cooldown
    const future = new Date()
    future.setFullYear(future.getFullYear() + 1)
    priest.nextSkill.set("partyheal", future)
    expect(priest.canUse("partyheal")).toBe(false)
    expect(priest.canUse("partyheal", { ignoreCooldown: true })).toBe(true)

    // Make character dead
    priest.rip = true
    expect(priest.canUse("attack")).toBe(false)
    priest.rip = false

    expect(warrior.canUse("cleave")).toBe(false)
    expect(warrior.canUse("cleave", { ignoreEquipped: true })).toBe(true)

    // Equip axe
    warrior.slots.mainhand = {
        "acc": 1,
        "level": 8,
        "name": "bataxe"
    }
    warrior.slots.offhand = null
    expect(warrior.canUse("cleave")).toBe(true)
})

test("Character.countItem", async () => {
    // Non-stackable items
    expect(priest.countItem("computer")).toBe(1)

    // Stackable items
    expect(priest.countItem("hpot0")).toBe(0)
    expect(priest.countItem("mpot0")).toBe(0)
    expect(priest.countItem("hpot1")).toBe(1000)
    expect(priest.countItem("mpot1")).toBe(999)
})

test("Character.hasPVPMarkedItem", async () => {
    expect(priest.hasPvPMarkedItem()).toBeFalsy()
})

test("Character.isPVP", async () => {
    // False if the map and server are not PVP
    priest.server = {
        region: "ASIA",
        name: "I",
        in: "main",
        map: "main",
        gameplay: "test",
        info: "test",
        pvp: false,
        x: 0,
        y: 0
    }
    priest.map = "main"
    expect(priest.isPVP()).toBe(false)

    // True if the server is PVP
    priest.server.pvp = true
    expect(priest.isPVP()).toBe(true)

    // True if the map is PVP
    priest.map = "arena"
    expect(priest.isPVP()).toBe(true)

    // False if the map is safe
    priest.map = "hut"
    expect(priest.isPVP()).toBe(false)
})

test("Character.locateItem", async () => {
    // Create the character's inventory for testing
    priest.esize = 2
    const itemsBackup = [...priest.items]
    priest.items = [undefined, { name: "mpot0", q: 1 }, { name: "mpot0", q: 10 }, { name: "pants", level: 0 }, { name: "pants", level: 1 }, { name: "coat", level: 2 }, { name: "coat", level: 0 }, undefined]
    priest.isize = priest.items.length

    expect(priest.locateItem("pants")).toBeTruthy()
    expect(priest.locateItem("coat")).toBeTruthy()
    expect(priest.locateItem("pants", priest.items, { level: 0 })).toBe(3)
    expect(priest.locateItem("coat", priest.items, { level: 0 })).toBe(6)
    expect(priest.locateItem("pants", priest.items, { levelGreaterThan: 0 })).toBe(4)
    expect(priest.locateItem("coat", priest.items, { levelGreaterThan: 0 })).toBe(5)
    expect(priest.locateItem("pants", priest.items, { levelLessThan: 0 })).toBe(undefined)

    expect(priest.locateItem("mpot0")).toBeTruthy()
    expect(priest.locateItem("mpot0", priest.items, { quantityGreaterThan: 1 })).toBe(2)
    priest.items = itemsBackup
})

test("Character.locateItems", async () => {
    // Create the character's inventory for testing
    priest.esize = 2
    const itemsBackup = [...priest.items]
    priest.items = [{ name: "mpot0", q: 1 }, undefined, { name: "mpot0", q: 10 }, { name: "pants", level: 0 }, { name: "pants", level: 1 }, { name: "coat", level: 2 }, { name: "coat", level: 0 }, undefined, { name: "mpot0", q: 10 }]
    priest.isize = priest.items.length

    expect(priest.locateItems("pants").length).toBe(2)
    expect(priest.locateItems("pants", priest.items, { level: 0 }).length).toBe(1)
    expect(priest.locateItems("pants", priest.items, { levelLessThan: 0 }).length).toBe(0)
    expect(priest.locateItems("pants", priest.items, { levelLessThan: 1 }).length).toBe(1)
    expect(priest.locateItems("pants", priest.items, { levelLessThan: 2 }).length).toBe(2)
    expect(priest.locateItems("pants", priest.items, { levelGreaterThan: 0 }).length).toBe(1)
    expect(priest.locateItems("mpot0", priest.items, { quantityGreaterThan: 1 }).length).toBe(2)
    priest.items = itemsBackup
})

test("Character.locateCraftNPC", async () => {
    // craftsman location
    expect(priest.locateCraftNPC("pouchbow")).toStrictEqual<IPosition>({ map: "main", x: 92, y: 670 })
    // witch location
    expect(priest.locateCraftNPC("elixirpnres")).toStrictEqual<IPosition>({ map: "halloween", x: 858, y: -160 })
    // mcollector location
    expect(priest.locateCraftNPC("resistancering")).toStrictEqual<IPosition>({ map: "main", x: 81, y: -283 })
    // not craftable
    expect(() => { priest.locateCraftNPC("gem0") }).toThrowError()
})

test("Character.locateExchangeNPC", async () => {
    // general exchangable
    expect(priest.locateExchangeNPC("gem0")).toStrictEqual<IPosition>({ map: "main", x: -25, y: -478 })
    // token
    expect(priest.locateExchangeNPC("monstertoken")).toStrictEqual<IPosition>({ map: "main", x: 126, y: -413 })
    // quest
    expect(priest.locateExchangeNPC("leather")).toStrictEqual<IPosition>({ map: "winterland", x: 262, y: -48.5 })
    // not exchangable
    expect(() => { priest.locateExchangeNPC("mpot0") }).toThrowError()
})