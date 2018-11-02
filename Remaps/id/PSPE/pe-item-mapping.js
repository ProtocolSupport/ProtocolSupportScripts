var initial = getInitialMapping();

var remapped = {};

function registerItemRemap() {
	var fromId = 0, fromData = 0, toId = 0, toData = 0;

	if(arguments.length == 2) {
		fromId = arguments[0];
		toId = arguments[1];
	} else if(arguments.length == 4) {
		fromId = arguments[0];
		fromData = arguments[1];
		toId = arguments[2];
		toData = arguments[3];
	} else if(arguments.length == 3) {
		fromId = arguments[0];
		toId = arguments[1];
		toData = arguments[2];
	}

	for(var i in initial) {
		if(remapped[i]) continue;

		var item = initial[i];

		if(item.peid === fromId && item.pedata === fromData) {
			remapped[i] = true;
			print("updating " + item.itemkey);

			item.peid = toId;
			item.pedata = toData;
		}
	}
}

runRemap();
doExtras();

print(JSON.stringify(initial));

function doExtras() {
	var extras = {
		"TRIDENT": 455,
    	"BEETROOT": 457,
    	"BEETROOT_SEEDS": 458,
    	"BEETROOT_SOUP": 459,
    	"RAW_SALMON": 460,
    	"SALMON": 460,
    	"CLOWNFISH": 461,
    	"PUFFERFISH": 462,
    	"COOKED_SALMON": 463,
    	"DRIED_KELP": 464,
    	"NAUTILUS_SHELL": 465,
    	"APPLEENCHANTED": 466,
    	"APPLE_ENCHANTED": 466,
    	"ENCHANTED_GOLDEN_APPLE": 466,
    	"HEART_OF_THE_SEA": 467,
    	"TURTLE_SHELL_PIECE": 468,
    	"TURTLE_HELMET": 469,
    };

    for(var key in extras) {
    	var id = extras[key]|0;

    	initial.push({
		 "itemkey": key.toLowerCase(),
		 "peid": id,
		 "pedata": 0
	   });
    }
}

function runRemap() {
	// Concrete Powder
	registerItemRemap(252, 237);
	// Chain Command Block
	registerItemRemap(211, 189);
	// Repeating Command Block
	registerItemRemap(210, 188);
	// Grass Path
	registerItemRemap(208, 198);
	// Double Wooden Slab
	registerItemRemap(125, 157);
	registerItemRemap(126, 158);
	registerItemRemap(95, 241); // STAINED_GLASS
	registerItemRemap(157, 126); // ACTIVATOR_RAIL
	registerItemRemap(158, 125); // DROPPER
	registerItemRemap(198, 208); // END_ROD
	registerItemRemap(199, 240); // CHORUS_PLANT
	registerItemRemap(207, 244); // BEETROOT_BLOCK
	registerItemRemap(208, 198); // GRASS_PATH
	registerItemRemap(212, 207); // FROSTED_ICE
	registerItemRemap(218, 251); // OBSERVER
	registerItemRemap(235, 220); // WHITE_GLAZED_TERRACOTTA
	registerItemRemap(236, 221); // ORANGE_GLAZED_TERRACOTTA
	registerItemRemap(237, 222); // MAGENTA_GLAZED_TERRACOTTA
	registerItemRemap(238, 223); // LIGHT_BLUE_GLAZED_TERRACOTTA
	registerItemRemap(239, 224); // YELLOW_GLAZED_TERRACOTTA
	registerItemRemap(240, 225); // LIME_GLAZED_TERRACOTTA
	registerItemRemap(241, 226); // PINK_GLAZED_TERRACOTTA
	registerItemRemap(242, 227); // GRAY_GLAZED_TERRACOTTA
	registerItemRemap(243, 228); // SILVER_GLAZED_TERRACOTTA
	registerItemRemap(244, 229); // CYAN_GLAZED_TERRACOTTA
	registerItemRemap(245, 219); // PURPLE_GLAZED_TERRACOTTA
	registerItemRemap(246, 231); // BLUE_GLAZED_TERRACOTTA
	registerItemRemap(247, 232); // BROWN_GLAZED_TERRACOTTA
	registerItemRemap(248, 233); // GREEN_GLAZED_TERRACOTTA
	registerItemRemap(249, 234); // RED_GLAZED_TERRACOTTA
	registerItemRemap(250, 235); // BLACK_GLAZED_TERRACOTTA
	registerItemRemap(251, 236); // CONCRETE
	registerItemRemap(255, 252); // STRUCTURE_BLOCK
	registerItemRemap(166, 95);  // BARRIER
	registerItemRemap(154, 410);  // HOPPER
	registerItemRemap(36, 250);  // Block Being Moved By Piston
	registerItemRemap(205, 203);  // Purpur slab
	registerItemRemap(204, 201);  // Purpur double slab TODO: replace to real double slab
	registerItemRemap(202, 201, 2);  // Purpur pillar
	// Nether slab -> Quartz slab
	registerItemRemap(44, 7, 44, 6);
	registerItemRemap(44, 14, 44, 15);
	registerItemRemap(43, 7, 43, 6);
	// And vice-versa
	registerItemRemap(44, 6, 44, 7);
	registerItemRemap(44, 15, 44, 14);
	registerItemRemap(43, 6, 43, 7);
	// Prismarine data ID mismatch
	registerItemRemap(168, 1, 168, 2);
	registerItemRemap(168, 2, 168, 1);
	// Podzol
	registerItemRemap(3, 2, 243, 0);
	// Colored Fences
	registerItemRemap(188, 0, 85, 1);
	registerItemRemap(189, 0, 85, 2);
	registerItemRemap(190, 0, 85, 3);
	registerItemRemap(192, 0, 85, 4);
	registerItemRemap(191, 0, 85, 5);
	// Shulker Boxes
	registerItemRemap(219, 218, 0); // WHITE_SHULKER_BOX
	registerItemRemap(220, 218, 1); // ORANGE_SHULKER_BOX
	registerItemRemap(221, 218, 2); // MAGENTA_SHULKER_BOX
	registerItemRemap(222, 218, 3); // LIGHT_BLUE_SHULKER_BOX
	registerItemRemap(223, 218, 4); // YELLOW_SHULKER_BOX
	registerItemRemap(224, 218, 5); // LIME_SHULKER_BOX
	registerItemRemap(225, 218, 6); // PINK_SHULKER_BOX
	registerItemRemap(226, 218, 7); // GRAY_SHULKER_BOX
	registerItemRemap(227, 218, 8); // SILVER_SHULKER_BOX
	registerItemRemap(228, 218, 9); // CYAN_SHULKER_BOX
	registerItemRemap(229, 218, 10); // PURPLE_SHULKER_BOX
	registerItemRemap(230, 218, 11); // BLUE_SHULKER_BOX
	registerItemRemap(231, 218, 12); // BROWN_SHULKER_BOX
	registerItemRemap(232, 218, 13); // GREEN_SHULKER_BOX
	registerItemRemap(233, 218, 14); // RED_SHULKER_BOX
	registerItemRemap(234, 218, 15); // BLACK_SHULKER_BOX

	// ===[ ITEMS ]===
	registerItemRemap(410, 422); // PRISMARINE_CRYSTALS
	registerItemRemap(416, 425); // ARMOR_STAND
	registerItemRemap(425, 446); // BANNER
	registerItemRemap(434, 457); // BEETROOT
	registerItemRemap(435, 458); // BEETROOT_SEEDS
	registerItemRemap(436, 459); // BEETROOT_SOUP
	registerItemRemap(443, 444); // ELYTRA
	registerItemRemap(449, 450); // TOTEM
	registerItemRemap(450, 445); // SHULKER_SHELL
	registerItemRemap(322, 1, 466, 0); // Enchanted Golden Apple
	registerItemRemap(444, 333, 1); // Spruce Boat
	registerItemRemap(445, 333, 2); // Birch Boat
	registerItemRemap(446, 333, 3); // Jungle Boat
	registerItemRemap(447, 333, 4); // Acacia Boat
	registerItemRemap(448, 333, 5); // Dark Oak Boat
	registerItemRemap(422, 443); // Minecart with a Command Block
	registerItemRemap(335, 325, 1); // Milk Bucket
	registerItemRemap(326, 325, 8); // Water Bucket
	registerItemRemap(327, 325, 10); // Lava Bucket
	// Records
	registerItemRemap(2256, 500);
	registerItemRemap(2257, 501);
	registerItemRemap(2258, 502);
	registerItemRemap(2259, 503);
	registerItemRemap(2260, 504);
	registerItemRemap(2261, 505);
	registerItemRemap(2262, 506);
	registerItemRemap(2263, 507);
	registerItemRemap(2264, 508);
	registerItemRemap(2265, 509);
	registerItemRemap(2266, 510);
	registerItemRemap(2267, 511);

	// Not implemented (yet) in PE
	registerItemRemap(453, 340); // KNOWLEDGE BOOK -> BOOK
	registerItemRemap(442, 268); // SHIELD -> WOODEN SWORD
	registerItemRemap(439, 262); // SPECTRAL ARROW -> ARROW
	registerItemRemap(343, 408); // POWERED MINECART -> MINECART WITH A HOPPER
}

function getInitialMapping() {
	return [
             {
               "itemkey": "air",
               "peid": 0,
               "pedata": 0
             },
             {
               "itemkey": "stone",
               "peid": 1,
               "pedata": 0
             },
             {
               "itemkey": "granite",
               "peid": 1,
               "pedata": 1
             },
             {
               "itemkey": "polished_granite",
               "peid": 1,
               "pedata": 2
             },
             {
               "itemkey": "diorite",
               "peid": 1,
               "pedata": 3
             },
             {
               "itemkey": "polished_diorite",
               "peid": 1,
               "pedata": 4
             },
             {
               "itemkey": "andesite",
               "peid": 1,
               "pedata": 5
             },
             {
               "itemkey": "polished_andesite",
               "peid": 1,
               "pedata": 6
             },
             {
               "itemkey": "grass_block",
               "peid": 2,
               "pedata": 0
             },
             {
               "itemkey": "dirt",
               "peid": 3,
               "pedata": 0
             },
             {
               "itemkey": "coarse_dirt",
               "peid": 3,
               "pedata": 1
             },
             {
               "itemkey": "podzol",
               "peid": 3,
               "pedata": 2
             },
             {
               "itemkey": "cobblestone",
               "peid": 4,
               "pedata": 0
             },
             {
               "itemkey": "oak_planks",
               "peid": 5,
               "pedata": 0
             },
             {
               "itemkey": "spruce_planks",
               "peid": 5,
               "pedata": 1
             },
             {
               "itemkey": "birch_planks",
               "peid": 5,
               "pedata": 2
             },
             {
               "itemkey": "jungle_planks",
               "peid": 5,
               "pedata": 3
             },
             {
               "itemkey": "acacia_planks",
               "peid": 5,
               "pedata": 4
             },
             {
               "itemkey": "dark_oak_planks",
               "peid": 5,
               "pedata": 5
             },
             {
               "itemkey": "oak_sapling",
               "peid": 6,
               "pedata": 0
             },
             {
               "itemkey": "spruce_sapling",
               "peid": 6,
               "pedata": 1
             },
             {
               "itemkey": "birch_sapling",
               "peid": 6,
               "pedata": 2
             },
             {
               "itemkey": "jungle_sapling",
               "peid": 6,
               "pedata": 3
             },
             {
               "itemkey": "acacia_sapling",
               "peid": 6,
               "pedata": 4
             },
             {
               "itemkey": "dark_oak_sapling",
               "peid": 6,
               "pedata": 5
             },
             {
               "itemkey": "bedrock",
               "peid": 7,
               "pedata": 0
             },
             {
               "itemkey": "sand",
               "peid": 12,
               "pedata": 0
             },
             {
               "itemkey": "red_sand",
               "peid": 12,
               "pedata": 1
             },
             {
               "itemkey": "gravel",
               "peid": 13,
               "pedata": 0
             },
             {
               "itemkey": "gold_ore",
               "peid": 14,
               "pedata": 0
             },
             {
               "itemkey": "iron_ore",
               "peid": 15,
               "pedata": 0
             },
             {
               "itemkey": "coal_ore",
               "peid": 16,
               "pedata": 0
             },
             {
               "itemkey": "oak_log",
               "peid": 17,
               "pedata": 0
             },
             {
               "itemkey": "spruce_log",
               "peid": 17,
               "pedata": 1
             },
             {
               "itemkey": "birch_log",
               "peid": 17,
               "pedata": 2
             },
             {
               "itemkey": "jungle_log",
               "peid": 17,
               "pedata": 3
             },
             {
               "itemkey": "oak_leaves",
               "peid": 18,
               "pedata": 0
             },
             {
               "itemkey": "spruce_leaves",
               "peid": 18,
               "pedata": 1
             },
             {
               "itemkey": "birch_leaves",
               "peid": 18,
               "pedata": 2
             },
             {
               "itemkey": "jungle_leaves",
               "peid": 18,
               "pedata": 3
             },
             {
               "itemkey": "sponge",
               "peid": 19,
               "pedata": 0
             },
             {
               "itemkey": "wet_sponge",
               "peid": 19,
               "pedata": 1
             },
             {
               "itemkey": "glass",
               "peid": 20,
               "pedata": 0
             },
             {
               "itemkey": "lapis_ore",
               "peid": 21,
               "pedata": 0
             },
             {
               "itemkey": "lapis_block",
               "peid": 22,
               "pedata": 0
             },
             {
               "itemkey": "dispenser",
               "peid": 23,
               "pedata": 0
             },
             {
               "itemkey": "sandstone",
               "peid": 24,
               "pedata": 0
             },
             {
               "itemkey": "chiseled_sandstone",
               "peid": 24,
               "pedata": 1
             },
             {
               "itemkey": "cut_sandstone",
               "peid": 24,
               "pedata": 2
             },
             {
               "itemkey": "note_block",
               "peid": 25,
               "pedata": 0
             },
             {
               "itemkey": "powered_rail",
               "peid": 27,
               "pedata": 0
             },
             {
               "itemkey": "detector_rail",
               "peid": 28,
               "pedata": 0
             },
             {
               "itemkey": "sticky_piston",
               "peid": 29,
               "pedata": 0
             },
             {
               "itemkey": "cobweb",
               "peid": 30,
               "pedata": 0
             },
             {
               "itemkey": "dead_bush",
               "peid": 31,
               "pedata": 0
             },
             {
               "itemkey": "grass",
               "peid": 31,
               "pedata": 1
             },
             {
               "itemkey": "fern",
               "peid": 31,
               "pedata": 2
             },
             {
               "itemkey": "piston",
               "peid": 33,
               "pedata": 0
             },
             {
               "itemkey": "white_wool",
               "peid": 35,
               "pedata": 0
             },
             {
               "itemkey": "orange_wool",
               "peid": 35,
               "pedata": 1
             },
             {
               "itemkey": "magenta_wool",
               "peid": 35,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_wool",
               "peid": 35,
               "pedata": 3
             },
             {
               "itemkey": "yellow_wool",
               "peid": 35,
               "pedata": 4
             },
             {
               "itemkey": "lime_wool",
               "peid": 35,
               "pedata": 5
             },
             {
               "itemkey": "pink_wool",
               "peid": 35,
               "pedata": 6
             },
             {
               "itemkey": "gray_wool",
               "peid": 35,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_wool",
               "peid": 35,
               "pedata": 8
             },
             {
               "itemkey": "cyan_wool",
               "peid": 35,
               "pedata": 9
             },
             {
               "itemkey": "purple_wool",
               "peid": 35,
               "pedata": 10
             },
             {
               "itemkey": "blue_wool",
               "peid": 35,
               "pedata": 11
             },
             {
               "itemkey": "brown_wool",
               "peid": 35,
               "pedata": 12
             },
             {
               "itemkey": "green_wool",
               "peid": 35,
               "pedata": 13
             },
             {
               "itemkey": "red_wool",
               "peid": 35,
               "pedata": 14
             },
             {
               "itemkey": "black_wool",
               "peid": 35,
               "pedata": 15
             },
             {
               "itemkey": "dandelion",
               "peid": 37,
               "pedata": 0
             },
             {
               "itemkey": "poppy",
               "peid": 38,
               "pedata": 0
             },
             {
               "itemkey": "blue_orchid",
               "peid": 38,
               "pedata": 1
             },
             {
               "itemkey": "allium",
               "peid": 38,
               "pedata": 2
             },
             {
               "itemkey": "azure_bluet",
               "peid": 38,
               "pedata": 3
             },
             {
               "itemkey": "red_tulip",
               "peid": 38,
               "pedata": 4
             },
             {
               "itemkey": "orange_tulip",
               "peid": 38,
               "pedata": 5
             },
             {
               "itemkey": "white_tulip",
               "peid": 38,
               "pedata": 6
             },
             {
               "itemkey": "pink_tulip",
               "peid": 38,
               "pedata": 7
             },
             {
               "itemkey": "oxeye_daisy",
               "peid": 38,
               "pedata": 8
             },
             {
               "itemkey": "brown_mushroom",
               "peid": 39,
               "pedata": 0
             },
             {
               "itemkey": "red_mushroom",
               "peid": 40,
               "pedata": 0
             },
             {
               "itemkey": "gold_block",
               "peid": 41,
               "pedata": 0
             },
             {
               "itemkey": "iron_block",
               "peid": 42,
               "pedata": 0
             },
             {
               "itemkey": "stone_slab",
               "peid": 44,
               "pedata": 0
             },
             {
               "itemkey": "sandstone_slab",
               "peid": 44,
               "pedata": 1
             },
             {
               "itemkey": "petrified_oak_slab",
               "peid": 44,
               "pedata": 2
             },
             {
               "itemkey": "cobblestone_slab",
               "peid": 44,
               "pedata": 3
             },
             {
               "itemkey": "brick_slab",
               "peid": 44,
               "pedata": 4
             },
             {
               "itemkey": "stone_brick_slab",
               "peid": 44,
               "pedata": 5
             },
             {
               "itemkey": "nether_brick_slab",
               "peid": 44,
               "pedata": 6
             },
             {
               "itemkey": "quartz_slab",
               "peid": 44,
               "pedata": 7
             },
             {
               "itemkey": "bricks",
               "peid": 45,
               "pedata": 0
             },
             {
               "itemkey": "tnt",
               "peid": 46,
               "pedata": 0
             },
             {
               "itemkey": "bookshelf",
               "peid": 47,
               "pedata": 0
             },
             {
               "itemkey": "mossy_cobblestone",
               "peid": 48,
               "pedata": 0
             },
             {
               "itemkey": "obsidian",
               "peid": 49,
               "pedata": 0
             },
             {
               "itemkey": "torch",
               "peid": 50,
               "pedata": 0
             },
             {
               "itemkey": "spawner",
               "peid": 52,
               "pedata": 0
             },
             {
               "itemkey": "oak_stairs",
               "peid": 53,
               "pedata": 0
             },
             {
               "itemkey": "chest",
               "peid": 54,
               "pedata": 0
             },
             {
               "itemkey": "diamond_ore",
               "peid": 56,
               "pedata": 0
             },
             {
               "itemkey": "diamond_block",
               "peid": 57,
               "pedata": 0
             },
             {
               "itemkey": "crafting_table",
               "peid": 58,
               "pedata": 0
             },
             {
               "itemkey": "farmland",
               "peid": 60,
               "pedata": 0
             },
             {
               "itemkey": "furnace",
               "peid": 61,
               "pedata": 0
             },
             {
               "itemkey": "ladder",
               "peid": 65,
               "pedata": 0
             },
             {
               "itemkey": "rail",
               "peid": 66,
               "pedata": 0
             },
             {
               "itemkey": "cobblestone_stairs",
               "peid": 67,
               "pedata": 0
             },
             {
               "itemkey": "lever",
               "peid": 69,
               "pedata": 0
             },
             {
               "itemkey": "stone_pressure_plate",
               "peid": 70,
               "pedata": 0
             },
             {
               "itemkey": "oak_pressure_plate",
               "peid": 72,
               "pedata": 0
             },
             {
               "itemkey": "redstone_ore",
               "peid": 73,
               "pedata": 0
             },
             {
               "itemkey": "redstone_torch",
               "peid": 76,
               "pedata": 0
             },
             {
               "itemkey": "stone_button",
               "peid": 77,
               "pedata": 0
             },
             {
               "itemkey": "snow",
               "peid": 78,
               "pedata": 0
             },
             {
               "itemkey": "ice",
               "peid": 79,
               "pedata": 0
             },
             {
               "itemkey": "snow_block",
               "peid": 80,
               "pedata": 0
             },
             {
               "itemkey": "cactus",
               "peid": 81,
               "pedata": 0
             },
             {
               "itemkey": "clay",
               "peid": 82,
               "pedata": 0
             },
             {
               "itemkey": "jukebox",
               "peid": 84,
               "pedata": 0
             },
             {
               "itemkey": "oak_fence",
               "peid": 85,
               "pedata": 0
             },
             {
               "itemkey": "carved_pumpkin",
               "peid": 86,
               "pedata": 0
             },
             {
               "itemkey": "netherrack",
               "peid": 87,
               "pedata": 0
             },
             {
               "itemkey": "soul_sand",
               "peid": 88,
               "pedata": 0
             },
             {
               "itemkey": "glowstone",
               "peid": 89,
               "pedata": 0
             },
             {
               "itemkey": "jack_o_lantern",
               "peid": 91,
               "pedata": 0
             },
             {
               "itemkey": "white_stained_glass",
               "peid": 95,
               "pedata": 0
             },
             {
               "itemkey": "orange_stained_glass",
               "peid": 95,
               "pedata": 1
             },
             {
               "itemkey": "magenta_stained_glass",
               "peid": 95,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_stained_glass",
               "peid": 95,
               "pedata": 3
             },
             {
               "itemkey": "yellow_stained_glass",
               "peid": 95,
               "pedata": 4
             },
             {
               "itemkey": "lime_stained_glass",
               "peid": 95,
               "pedata": 5
             },
             {
               "itemkey": "pink_stained_glass",
               "peid": 95,
               "pedata": 6
             },
             {
               "itemkey": "gray_stained_glass",
               "peid": 95,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_stained_glass",
               "peid": 95,
               "pedata": 8
             },
             {
               "itemkey": "cyan_stained_glass",
               "peid": 95,
               "pedata": 9
             },
             {
               "itemkey": "purple_stained_glass",
               "peid": 95,
               "pedata": 10
             },
             {
               "itemkey": "blue_stained_glass",
               "peid": 95,
               "pedata": 11
             },
             {
               "itemkey": "brown_stained_glass",
               "peid": 95,
               "pedata": 12
             },
             {
               "itemkey": "green_stained_glass",
               "peid": 95,
               "pedata": 13
             },
             {
               "itemkey": "red_stained_glass",
               "peid": 95,
               "pedata": 14
             },
             {
               "itemkey": "black_stained_glass",
               "peid": 95,
               "pedata": 15
             },
             {
               "itemkey": "oak_trapdoor",
               "peid": 96,
               "pedata": 0
             },
             {
               "itemkey": "infested_stone",
               "peid": 97,
               "pedata": 0
             },
             {
               "itemkey": "infested_cobblestone",
               "peid": 97,
               "pedata": 1
             },
             {
               "itemkey": "infested_stone_bricks",
               "peid": 97,
               "pedata": 2
             },
             {
               "itemkey": "infested_mossy_stone_bricks",
               "peid": 97,
               "pedata": 3
             },
             {
               "itemkey": "infested_cracked_stone_bricks",
               "peid": 97,
               "pedata": 4
             },
             {
               "itemkey": "infested_chiseled_stone_bricks",
               "peid": 97,
               "pedata": 5
             },
             {
               "itemkey": "stone_bricks",
               "peid": 98,
               "pedata": 0
             },
             {
               "itemkey": "mossy_stone_bricks",
               "peid": 98,
               "pedata": 1
             },
             {
               "itemkey": "cracked_stone_bricks",
               "peid": 98,
               "pedata": 2
             },
             {
               "itemkey": "chiseled_stone_bricks",
               "peid": 98,
               "pedata": 3
             },
             {
               "itemkey": "brown_mushroom_block",
               "peid": 99,
               "pedata": 0
             },
             {
               "itemkey": "mushroom_stem",
               "peid": 99,
               "pedata": 10
             },
             {
               "itemkey": "red_mushroom_block",
               "peid": 100,
               "pedata": 0
             },
             {
               "itemkey": "iron_bars",
               "peid": 101,
               "pedata": 0
             },
             {
               "itemkey": "glass_pane",
               "peid": 102,
               "pedata": 0
             },
             {
               "itemkey": "melon",
               "peid": 103,
               "pedata": 0
             },
             {
               "itemkey": "vine",
               "peid": 106,
               "pedata": 0
             },
             {
               "itemkey": "oak_fence_gate",
               "peid": 107,
               "pedata": 0
             },
             {
               "itemkey": "brick_stairs",
               "peid": 108,
               "pedata": 0
             },
             {
               "itemkey": "stone_brick_stairs",
               "peid": 109,
               "pedata": 0
             },
             {
               "itemkey": "mycelium",
               "peid": 110,
               "pedata": 0
             },
             {
               "itemkey": "lily_pad",
               "peid": 111,
               "pedata": 0
             },
             {
               "itemkey": "nether_bricks",
               "peid": 112,
               "pedata": 0
             },
             {
               "itemkey": "nether_brick_fence",
               "peid": 113,
               "pedata": 0
             },
             {
               "itemkey": "nether_brick_stairs",
               "peid": 114,
               "pedata": 0
             },
             {
               "itemkey": "enchanting_table",
               "peid": 116,
               "pedata": 0
             },
             {
               "itemkey": "end_portal_frame",
               "peid": 120,
               "pedata": 0
             },
             {
               "itemkey": "end_stone",
               "peid": 121,
               "pedata": 0
             },
             {
               "itemkey": "dragon_egg",
               "peid": 122,
               "pedata": 0
             },
             {
               "itemkey": "redstone_lamp",
               "peid": 123,
               "pedata": 0
             },
             {
               "itemkey": "oak_slab",
               "peid": 126,
               "pedata": 0
             },
             {
               "itemkey": "spruce_slab",
               "peid": 126,
               "pedata": 1
             },
             {
               "itemkey": "birch_slab",
               "peid": 126,
               "pedata": 2
             },
             {
               "itemkey": "jungle_slab",
               "peid": 126,
               "pedata": 3
             },
             {
               "itemkey": "acacia_slab",
               "peid": 126,
               "pedata": 4
             },
             {
               "itemkey": "dark_oak_slab",
               "peid": 126,
               "pedata": 5
             },
             {
               "itemkey": "sandstone_stairs",
               "peid": 128,
               "pedata": 0
             },
             {
               "itemkey": "emerald_ore",
               "peid": 129,
               "pedata": 0
             },
             {
               "itemkey": "ender_chest",
               "peid": 130,
               "pedata": 0
             },
             {
               "itemkey": "tripwire_hook",
               "peid": 131,
               "pedata": 0
             },
             {
               "itemkey": "emerald_block",
               "peid": 133,
               "pedata": 0
             },
             {
               "itemkey": "spruce_stairs",
               "peid": 134,
               "pedata": 0
             },
             {
               "itemkey": "birch_stairs",
               "peid": 135,
               "pedata": 0
             },
             {
               "itemkey": "jungle_stairs",
               "peid": 136,
               "pedata": 0
             },
             {
               "itemkey": "command_block",
               "peid": 137,
               "pedata": 0
             },
             {
               "itemkey": "beacon",
               "peid": 138,
               "pedata": 0
             },
             {
               "itemkey": "cobblestone_wall",
               "peid": 139,
               "pedata": 0
             },
             {
               "itemkey": "mossy_cobblestone_wall",
               "peid": 139,
               "pedata": 1
             },
             {
               "itemkey": "oak_button",
               "peid": 143,
               "pedata": 0
             },
             {
               "itemkey": "anvil",
               "peid": 145,
               "pedata": 0
             },
             {
               "itemkey": "chipped_anvil",
               "peid": 145,
               "pedata": 4
             },
             {
               "itemkey": "damaged_anvil",
               "peid": 145,
               "pedata": 8
             },
             {
               "itemkey": "trapped_chest",
               "peid": 146,
               "pedata": 0
             },
             {
               "itemkey": "light_weighted_pressure_plate",
               "peid": 147,
               "pedata": 0
             },
             {
               "itemkey": "heavy_weighted_pressure_plate",
               "peid": 148,
               "pedata": 0
             },
             {
               "itemkey": "daylight_detector",
               "peid": 151,
               "pedata": 0
             },
             {
               "itemkey": "redstone_block",
               "peid": 152,
               "pedata": 0
             },
             {
               "itemkey": "nether_quartz_ore",
               "peid": 153,
               "pedata": 0
             },
             {
               "itemkey": "hopper",
               "peid": 154,
               "pedata": 0
             },
             {
               "itemkey": "quartz_block",
               "peid": 155,
               "pedata": 0
             },
             {
               "itemkey": "chiseled_quartz_block",
               "peid": 155,
               "pedata": 1
             },
             {
               "itemkey": "quartz_pillar",
               "peid": 155,
               "pedata": 2
             },
             {
               "itemkey": "quartz_stairs",
               "peid": 156,
               "pedata": 0
             },
             {
               "itemkey": "activator_rail",
               "peid": 157,
               "pedata": 0
             },
             {
               "itemkey": "dropper",
               "peid": 158,
               "pedata": 0
             },
             {
               "itemkey": "white_terracotta",
               "peid": 159,
               "pedata": 0
             },
             {
               "itemkey": "orange_terracotta",
               "peid": 159,
               "pedata": 1
             },
             {
               "itemkey": "magenta_terracotta",
               "peid": 159,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_terracotta",
               "peid": 159,
               "pedata": 3
             },
             {
               "itemkey": "yellow_terracotta",
               "peid": 159,
               "pedata": 4
             },
             {
               "itemkey": "lime_terracotta",
               "peid": 159,
               "pedata": 5
             },
             {
               "itemkey": "pink_terracotta",
               "peid": 159,
               "pedata": 6
             },
             {
               "itemkey": "gray_terracotta",
               "peid": 159,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_terracotta",
               "peid": 159,
               "pedata": 8
             },
             {
               "itemkey": "cyan_terracotta",
               "peid": 159,
               "pedata": 9
             },
             {
               "itemkey": "purple_terracotta",
               "peid": 159,
               "pedata": 10
             },
             {
               "itemkey": "blue_terracotta",
               "peid": 159,
               "pedata": 11
             },
             {
               "itemkey": "brown_terracotta",
               "peid": 159,
               "pedata": 12
             },
             {
               "itemkey": "green_terracotta",
               "peid": 159,
               "pedata": 13
             },
             {
               "itemkey": "red_terracotta",
               "peid": 159,
               "pedata": 14
             },
             {
               "itemkey": "black_terracotta",
               "peid": 159,
               "pedata": 15
             },
             {
               "itemkey": "white_stained_glass_pane",
               "peid": 160,
               "pedata": 0
             },
             {
               "itemkey": "orange_stained_glass_pane",
               "peid": 160,
               "pedata": 1
             },
             {
               "itemkey": "magenta_stained_glass_pane",
               "peid": 160,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_stained_glass_pane",
               "peid": 160,
               "pedata": 3
             },
             {
               "itemkey": "yellow_stained_glass_pane",
               "peid": 160,
               "pedata": 4
             },
             {
               "itemkey": "lime_stained_glass_pane",
               "peid": 160,
               "pedata": 5
             },
             {
               "itemkey": "pink_stained_glass_pane",
               "peid": 160,
               "pedata": 6
             },
             {
               "itemkey": "gray_stained_glass_pane",
               "peid": 160,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_stained_glass_pane",
               "peid": 160,
               "pedata": 8
             },
             {
               "itemkey": "cyan_stained_glass_pane",
               "peid": 160,
               "pedata": 9
             },
             {
               "itemkey": "purple_stained_glass_pane",
               "peid": 160,
               "pedata": 10
             },
             {
               "itemkey": "blue_stained_glass_pane",
               "peid": 160,
               "pedata": 11
             },
             {
               "itemkey": "brown_stained_glass_pane",
               "peid": 160,
               "pedata": 12
             },
             {
               "itemkey": "green_stained_glass_pane",
               "peid": 160,
               "pedata": 13
             },
             {
               "itemkey": "red_stained_glass_pane",
               "peid": 160,
               "pedata": 14
             },
             {
               "itemkey": "black_stained_glass_pane",
               "peid": 160,
               "pedata": 15
             },
             {
               "itemkey": "acacia_leaves",
               "peid": 161,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_leaves",
               "peid": 161,
               "pedata": 1
             },
             {
               "itemkey": "acacia_log",
               "peid": 162,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_log",
               "peid": 162,
               "pedata": 1
             },
             {
               "itemkey": "acacia_stairs",
               "peid": 163,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_stairs",
               "peid": 164,
               "pedata": 0
             },
             {
               "itemkey": "slime_block",
               "peid": 165,
               "pedata": 0
             },
             {
               "itemkey": "barrier",
               "peid": 166,
               "pedata": 0
             },
             {
               "itemkey": "iron_trapdoor",
               "peid": 167,
               "pedata": 0
             },
             {
               "itemkey": "prismarine",
               "peid": 168,
               "pedata": 0
             },
             {
               "itemkey": "prismarine_bricks",
               "peid": 168,
               "pedata": 1
             },
             {
               "itemkey": "dark_prismarine",
               "peid": 168,
               "pedata": 2
             },
             {
               "itemkey": "sea_lantern",
               "peid": 169,
               "pedata": 0
             },
             {
               "itemkey": "hay_block",
               "peid": 170,
               "pedata": 0
             },
             {
               "itemkey": "white_carpet",
               "peid": 171,
               "pedata": 0
             },
             {
               "itemkey": "orange_carpet",
               "peid": 171,
               "pedata": 1
             },
             {
               "itemkey": "magenta_carpet",
               "peid": 171,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_carpet",
               "peid": 171,
               "pedata": 3
             },
             {
               "itemkey": "yellow_carpet",
               "peid": 171,
               "pedata": 4
             },
             {
               "itemkey": "lime_carpet",
               "peid": 171,
               "pedata": 5
             },
             {
               "itemkey": "pink_carpet",
               "peid": 171,
               "pedata": 6
             },
             {
               "itemkey": "gray_carpet",
               "peid": 171,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_carpet",
               "peid": 171,
               "pedata": 8
             },
             {
               "itemkey": "cyan_carpet",
               "peid": 171,
               "pedata": 9
             },
             {
               "itemkey": "purple_carpet",
               "peid": 171,
               "pedata": 10
             },
             {
               "itemkey": "blue_carpet",
               "peid": 171,
               "pedata": 11
             },
             {
               "itemkey": "brown_carpet",
               "peid": 171,
               "pedata": 12
             },
             {
               "itemkey": "green_carpet",
               "peid": 171,
               "pedata": 13
             },
             {
               "itemkey": "red_carpet",
               "peid": 171,
               "pedata": 14
             },
             {
               "itemkey": "black_carpet",
               "peid": 171,
               "pedata": 15
             },
             {
               "itemkey": "terracotta",
               "peid": 172,
               "pedata": 0
             },
             {
               "itemkey": "coal_block",
               "peid": 173,
               "pedata": 0
             },
             {
               "itemkey": "packed_ice",
               "peid": 174,
               "pedata": 0
             },
             {
               "itemkey": "sunflower",
               "peid": 175,
               "pedata": 0
             },
             {
               "itemkey": "lilac",
               "peid": 175,
               "pedata": 1
             },
             {
               "itemkey": "tall_grass",
               "peid": 175,
               "pedata": 2
             },
             {
               "itemkey": "large_fern",
               "peid": 175,
               "pedata": 3
             },
             {
               "itemkey": "rose_bush",
               "peid": 175,
               "pedata": 4
             },
             {
               "itemkey": "peony",
               "peid": 175,
               "pedata": 5
             },
             {
               "itemkey": "red_sandstone",
               "peid": 179,
               "pedata": 0
             },
             {
               "itemkey": "chiseled_red_sandstone",
               "peid": 179,
               "pedata": 1
             },
             {
               "itemkey": "cut_red_sandstone",
               "peid": 179,
               "pedata": 2
             },
             {
               "itemkey": "red_sandstone_stairs",
               "peid": 180,
               "pedata": 0
             },
             {
               "itemkey": "red_sandstone_slab",
               "peid": 182,
               "pedata": 0
             },
             {
               "itemkey": "spruce_fence_gate",
               "peid": 183,
               "pedata": 0
             },
             {
               "itemkey": "birch_fence_gate",
               "peid": 184,
               "pedata": 0
             },
             {
               "itemkey": "jungle_fence_gate",
               "peid": 185,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_fence_gate",
               "peid": 186,
               "pedata": 0
             },
             {
               "itemkey": "acacia_fence_gate",
               "peid": 187,
               "pedata": 0
             },
             {
               "itemkey": "spruce_fence",
               "peid": 188,
               "pedata": 0
             },
             {
               "itemkey": "birch_fence",
               "peid": 189,
               "pedata": 0
             },
             {
               "itemkey": "jungle_fence",
               "peid": 190,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_fence",
               "peid": 191,
               "pedata": 0
             },
             {
               "itemkey": "acacia_fence",
               "peid": 192,
               "pedata": 0
             },
             {
               "itemkey": "end_rod",
               "peid": 198,
               "pedata": 0
             },
             {
               "itemkey": "chorus_plant",
               "peid": 199,
               "pedata": 0
             },
             {
               "itemkey": "chorus_flower",
               "peid": 200,
               "pedata": 0
             },
             {
               "itemkey": "purpur_block",
               "peid": 201,
               "pedata": 0
             },
             {
               "itemkey": "purpur_pillar",
               "peid": 202,
               "pedata": 0
             },
             {
               "itemkey": "purpur_stairs",
               "peid": 203,
               "pedata": 0
             },
             {
               "itemkey": "purpur_slab",
               "peid": 205,
               "pedata": 0
             },
             {
               "itemkey": "end_stone_bricks",
               "peid": 206,
               "pedata": 0
             },
             {
               "itemkey": "grass_path",
               "peid": 208,
               "pedata": 0
             },
             {
               "itemkey": "repeating_command_block",
               "peid": 210,
               "pedata": 0
             },
             {
               "itemkey": "chain_command_block",
               "peid": 211,
               "pedata": 0
             },
             {
               "itemkey": "magma_block",
               "peid": 213,
               "pedata": 0
             },
             {
               "itemkey": "nether_wart_block",
               "peid": 214,
               "pedata": 0
             },
             {
               "itemkey": "red_nether_bricks",
               "peid": 215,
               "pedata": 0
             },
             {
               "itemkey": "bone_block",
               "peid": 216,
               "pedata": 0
             },
             {
               "itemkey": "structure_void",
               "peid": 217,
               "pedata": 0
             },
             {
               "itemkey": "observer",
               "peid": 218,
               "pedata": 0
             },
             {
               "itemkey": "white_shulker_box",
               "peid": 219,
               "pedata": 0
             },
             {
               "itemkey": "orange_shulker_box",
               "peid": 220,
               "pedata": 0
             },
             {
               "itemkey": "magenta_shulker_box",
               "peid": 221,
               "pedata": 0
             },
             {
               "itemkey": "light_blue_shulker_box",
               "peid": 222,
               "pedata": 0
             },
             {
               "itemkey": "yellow_shulker_box",
               "peid": 223,
               "pedata": 0
             },
             {
               "itemkey": "lime_shulker_box",
               "peid": 224,
               "pedata": 0
             },
             {
               "itemkey": "pink_shulker_box",
               "peid": 225,
               "pedata": 0
             },
             {
               "itemkey": "gray_shulker_box",
               "peid": 226,
               "pedata": 0
             },
             {
               "itemkey": "light_gray_shulker_box",
               "peid": 227,
               "pedata": 0
             },
             {
               "itemkey": "cyan_shulker_box",
               "peid": 228,
               "pedata": 0
             },
             {
               "itemkey": "purple_shulker_box",
               "peid": 229,
               "pedata": 0
             },
             {
               "itemkey": "blue_shulker_box",
               "peid": 230,
               "pedata": 0
             },
             {
               "itemkey": "brown_shulker_box",
               "peid": 231,
               "pedata": 0
             },
             {
               "itemkey": "green_shulker_box",
               "peid": 232,
               "pedata": 0
             },
             {
               "itemkey": "red_shulker_box",
               "peid": 233,
               "pedata": 0
             },
             {
               "itemkey": "black_shulker_box",
               "peid": 234,
               "pedata": 0
             },
             {
               "itemkey": "white_glazed_terracotta",
               "peid": 235,
               "pedata": 0
             },
             {
               "itemkey": "orange_glazed_terracotta",
               "peid": 236,
               "pedata": 0
             },
             {
               "itemkey": "magenta_glazed_terracotta",
               "peid": 237,
               "pedata": 0
             },
             {
               "itemkey": "light_blue_glazed_terracotta",
               "peid": 238,
               "pedata": 0
             },
             {
               "itemkey": "yellow_glazed_terracotta",
               "peid": 239,
               "pedata": 0
             },
             {
               "itemkey": "lime_glazed_terracotta",
               "peid": 240,
               "pedata": 0
             },
             {
               "itemkey": "pink_glazed_terracotta",
               "peid": 241,
               "pedata": 0
             },
             {
               "itemkey": "gray_glazed_terracotta",
               "peid": 242,
               "pedata": 0
             },
             {
               "itemkey": "light_gray_glazed_terracotta",
               "peid": 243,
               "pedata": 0
             },
             {
               "itemkey": "cyan_glazed_terracotta",
               "peid": 244,
               "pedata": 0
             },
             {
               "itemkey": "purple_glazed_terracotta",
               "peid": 245,
               "pedata": 0
             },
             {
               "itemkey": "blue_glazed_terracotta",
               "peid": 246,
               "pedata": 0
             },
             {
               "itemkey": "brown_glazed_terracotta",
               "peid": 247,
               "pedata": 0
             },
             {
               "itemkey": "green_glazed_terracotta",
               "peid": 248,
               "pedata": 0
             },
             {
               "itemkey": "red_glazed_terracotta",
               "peid": 249,
               "pedata": 0
             },
             {
               "itemkey": "black_glazed_terracotta",
               "peid": 250,
               "pedata": 0
             },
             {
               "itemkey": "white_concrete",
               "peid": 251,
               "pedata": 0
             },
             {
               "itemkey": "orange_concrete",
               "peid": 251,
               "pedata": 1
             },
             {
               "itemkey": "magenta_concrete",
               "peid": 251,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_concrete",
               "peid": 251,
               "pedata": 3
             },
             {
               "itemkey": "yellow_concrete",
               "peid": 251,
               "pedata": 4
             },
             {
               "itemkey": "lime_concrete",
               "peid": 251,
               "pedata": 5
             },
             {
               "itemkey": "pink_concrete",
               "peid": 251,
               "pedata": 6
             },
             {
               "itemkey": "gray_concrete",
               "peid": 251,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_concrete",
               "peid": 251,
               "pedata": 8
             },
             {
               "itemkey": "cyan_concrete",
               "peid": 251,
               "pedata": 9
             },
             {
               "itemkey": "purple_concrete",
               "peid": 251,
               "pedata": 10
             },
             {
               "itemkey": "blue_concrete",
               "peid": 251,
               "pedata": 11
             },
             {
               "itemkey": "brown_concrete",
               "peid": 251,
               "pedata": 12
             },
             {
               "itemkey": "green_concrete",
               "peid": 251,
               "pedata": 13
             },
             {
               "itemkey": "red_concrete",
               "peid": 251,
               "pedata": 14
             },
             {
               "itemkey": "black_concrete",
               "peid": 251,
               "pedata": 15
             },
             {
               "itemkey": "white_concrete_powder",
               "peid": 252,
               "pedata": 0
             },
             {
               "itemkey": "orange_concrete_powder",
               "peid": 252,
               "pedata": 1
             },
             {
               "itemkey": "magenta_concrete_powder",
               "peid": 252,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_concrete_powder",
               "peid": 252,
               "pedata": 3
             },
             {
               "itemkey": "yellow_concrete_powder",
               "peid": 252,
               "pedata": 4
             },
             {
               "itemkey": "lime_concrete_powder",
               "peid": 252,
               "pedata": 5
             },
             {
               "itemkey": "pink_concrete_powder",
               "peid": 252,
               "pedata": 6
             },
             {
               "itemkey": "gray_concrete_powder",
               "peid": 252,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_concrete_powder",
               "peid": 252,
               "pedata": 8
             },
             {
               "itemkey": "cyan_concrete_powder",
               "peid": 252,
               "pedata": 9
             },
             {
               "itemkey": "purple_concrete_powder",
               "peid": 252,
               "pedata": 10
             },
             {
               "itemkey": "blue_concrete_powder",
               "peid": 252,
               "pedata": 11
             },
             {
               "itemkey": "brown_concrete_powder",
               "peid": 252,
               "pedata": 12
             },
             {
               "itemkey": "green_concrete_powder",
               "peid": 252,
               "pedata": 13
             },
             {
               "itemkey": "red_concrete_powder",
               "peid": 252,
               "pedata": 14
             },
             {
               "itemkey": "black_concrete_powder",
               "peid": 252,
               "pedata": 15
             },
             {
               "itemkey": "structure_block",
               "peid": 255,
               "pedata": 0
             },
             {
               "itemkey": "iron_shovel",
               "peid": 256,
               "pedata": 0
             },
             {
               "itemkey": "iron_pickaxe",
               "peid": 257,
               "pedata": 0
             },
             {
               "itemkey": "iron_axe",
               "peid": 258,
               "pedata": 0
             },
             {
               "itemkey": "flint_and_steel",
               "peid": 259,
               "pedata": 0
             },
             {
               "itemkey": "apple",
               "peid": 260,
               "pedata": 0
             },
             {
               "itemkey": "bow",
               "peid": 261,
               "pedata": 0
             },
             {
               "itemkey": "arrow",
               "peid": 262,
               "pedata": 0
             },
             {
               "itemkey": "coal",
               "peid": 263,
               "pedata": 0
             },
             {
               "itemkey": "charcoal",
               "peid": 263,
               "pedata": 1
             },
             {
               "itemkey": "diamond",
               "peid": 264,
               "pedata": 0
             },
             {
               "itemkey": "iron_ingot",
               "peid": 265,
               "pedata": 0
             },
             {
               "itemkey": "gold_ingot",
               "peid": 266,
               "pedata": 0
             },
             {
               "itemkey": "iron_sword",
               "peid": 267,
               "pedata": 0
             },
             {
               "itemkey": "wooden_sword",
               "peid": 268,
               "pedata": 0
             },
             {
               "itemkey": "wooden_shovel",
               "peid": 269,
               "pedata": 0
             },
             {
               "itemkey": "wooden_pickaxe",
               "peid": 270,
               "pedata": 0
             },
             {
               "itemkey": "wooden_axe",
               "peid": 271,
               "pedata": 0
             },
             {
               "itemkey": "stone_sword",
               "peid": 272,
               "pedata": 0
             },
             {
               "itemkey": "stone_shovel",
               "peid": 273,
               "pedata": 0
             },
             {
               "itemkey": "stone_pickaxe",
               "peid": 274,
               "pedata": 0
             },
             {
               "itemkey": "stone_axe",
               "peid": 275,
               "pedata": 0
             },
             {
               "itemkey": "diamond_sword",
               "peid": 276,
               "pedata": 0
             },
             {
               "itemkey": "diamond_shovel",
               "peid": 277,
               "pedata": 0
             },
             {
               "itemkey": "diamond_pickaxe",
               "peid": 278,
               "pedata": 0
             },
             {
               "itemkey": "diamond_axe",
               "peid": 279,
               "pedata": 0
             },
             {
               "itemkey": "stick",
               "peid": 280,
               "pedata": 0
             },
             {
               "itemkey": "bowl",
               "peid": 281,
               "pedata": 0
             },
             {
               "itemkey": "mushroom_stew",
               "peid": 282,
               "pedata": 0
             },
             {
               "itemkey": "golden_sword",
               "peid": 283,
               "pedata": 0
             },
             {
               "itemkey": "golden_shovel",
               "peid": 284,
               "pedata": 0
             },
             {
               "itemkey": "golden_pickaxe",
               "peid": 285,
               "pedata": 0
             },
             {
               "itemkey": "golden_axe",
               "peid": 286,
               "pedata": 0
             },
             {
               "itemkey": "string",
               "peid": 287,
               "pedata": 0
             },
             {
               "itemkey": "feather",
               "peid": 288,
               "pedata": 0
             },
             {
               "itemkey": "gunpowder",
               "peid": 289,
               "pedata": 0
             },
             {
               "itemkey": "wooden_hoe",
               "peid": 290,
               "pedata": 0
             },
             {
               "itemkey": "stone_hoe",
               "peid": 291,
               "pedata": 0
             },
             {
               "itemkey": "iron_hoe",
               "peid": 292,
               "pedata": 0
             },
             {
               "itemkey": "diamond_hoe",
               "peid": 293,
               "pedata": 0
             },
             {
               "itemkey": "golden_hoe",
               "peid": 294,
               "pedata": 0
             },
             {
               "itemkey": "wheat_seeds",
               "peid": 295,
               "pedata": 0
             },
             {
               "itemkey": "wheat",
               "peid": 296,
               "pedata": 0
             },
             {
               "itemkey": "bread",
               "peid": 297,
               "pedata": 0
             },
             {
               "itemkey": "leather_helmet",
               "peid": 298,
               "pedata": 0
             },
             {
               "itemkey": "leather_chestplate",
               "peid": 299,
               "pedata": 0
             },
             {
               "itemkey": "leather_leggings",
               "peid": 300,
               "pedata": 0
             },
             {
               "itemkey": "leather_boots",
               "peid": 301,
               "pedata": 0
             },
             {
               "itemkey": "chainmail_helmet",
               "peid": 302,
               "pedata": 0
             },
             {
               "itemkey": "chainmail_chestplate",
               "peid": 303,
               "pedata": 0
             },
             {
               "itemkey": "chainmail_leggings",
               "peid": 304,
               "pedata": 0
             },
             {
               "itemkey": "chainmail_boots",
               "peid": 305,
               "pedata": 0
             },
             {
               "itemkey": "iron_helmet",
               "peid": 306,
               "pedata": 0
             },
             {
               "itemkey": "iron_chestplate",
               "peid": 307,
               "pedata": 0
             },
             {
               "itemkey": "iron_leggings",
               "peid": 308,
               "pedata": 0
             },
             {
               "itemkey": "iron_boots",
               "peid": 309,
               "pedata": 0
             },
             {
               "itemkey": "diamond_helmet",
               "peid": 310,
               "pedata": 0
             },
             {
               "itemkey": "diamond_chestplate",
               "peid": 311,
               "pedata": 0
             },
             {
               "itemkey": "diamond_leggings",
               "peid": 312,
               "pedata": 0
             },
             {
               "itemkey": "diamond_boots",
               "peid": 313,
               "pedata": 0
             },
             {
               "itemkey": "golden_helmet",
               "peid": 314,
               "pedata": 0
             },
             {
               "itemkey": "golden_chestplate",
               "peid": 315,
               "pedata": 0
             },
             {
               "itemkey": "golden_leggings",
               "peid": 316,
               "pedata": 0
             },
             {
               "itemkey": "golden_boots",
               "peid": 317,
               "pedata": 0
             },
             {
               "itemkey": "flint",
               "peid": 318,
               "pedata": 0
             },
             {
               "itemkey": "porkchop",
               "peid": 319,
               "pedata": 0
             },
             {
               "itemkey": "cooked_porkchop",
               "peid": 320,
               "pedata": 0
             },
             {
               "itemkey": "painting",
               "peid": 321,
               "pedata": 0
             },
             {
               "itemkey": "golden_apple",
               "peid": 322,
               "pedata": 0
             },
             {
               "itemkey": "enchanted_golden_apple",
               "peid": 322,
               "pedata": 1
             },
             {
               "itemkey": "sign",
               "peid": 323,
               "pedata": 0
             },
             {
               "itemkey": "oak_door",
               "peid": 324,
               "pedata": 0
             },
             {
               "itemkey": "bucket",
               "peid": 325,
               "pedata": 0
             },
             {
               "itemkey": "water_bucket",
               "peid": 326,
               "pedata": 0
             },
             {
               "itemkey": "lava_bucket",
               "peid": 327,
               "pedata": 0
             },
             {
               "itemkey": "minecart",
               "peid": 328,
               "pedata": 0
             },
             {
               "itemkey": "saddle",
               "peid": 329,
               "pedata": 0
             },
             {
               "itemkey": "iron_door",
               "peid": 330,
               "pedata": 0
             },
             {
               "itemkey": "redstone",
               "peid": 331,
               "pedata": 0
             },
             {
               "itemkey": "snowball",
               "peid": 332,
               "pedata": 0
             },
             {
               "itemkey": "oak_boat",
               "peid": 333,
               "pedata": 0
             },
             {
               "itemkey": "leather",
               "peid": 334,
               "pedata": 0
             },
             {
               "itemkey": "milk_bucket",
               "peid": 335,
               "pedata": 0
             },
             {
               "itemkey": "brick",
               "peid": 336,
               "pedata": 0
             },
             {
               "itemkey": "clay_ball",
               "peid": 337,
               "pedata": 0
             },
             {
               "itemkey": "sugar_cane",
               "peid": 338,
               "pedata": 0
             },
             {
               "itemkey": "paper",
               "peid": 339,
               "pedata": 0
             },
             {
               "itemkey": "book",
               "peid": 340,
               "pedata": 0
             },
             {
               "itemkey": "slime_ball",
               "peid": 341,
               "pedata": 0
             },
             {
               "itemkey": "chest_minecart",
               "peid": 342,
               "pedata": 0
             },
             {
               "itemkey": "furnace_minecart",
               "peid": 343,
               "pedata": 0
             },
             {
               "itemkey": "egg",
               "peid": 344,
               "pedata": 0
             },
             {
               "itemkey": "compass",
               "peid": 345,
               "pedata": 0
             },
             {
               "itemkey": "fishing_rod",
               "peid": 346,
               "pedata": 0
             },
             {
               "itemkey": "clock",
               "peid": 347,
               "pedata": 0
             },
             {
               "itemkey": "glowstone_dust",
               "peid": 348,
               "pedata": 0
             },
             {
               "itemkey": "cod",
               "peid": 349,
               "pedata": 0
             },
             {
               "itemkey": "salmon",
               "peid": 349,
               "pedata": 1
             },
             {
               "itemkey": "tropical_fish",
               "peid": 349,
               "pedata": 2
             },
             {
               "itemkey": "pufferfish",
               "peid": 349,
               "pedata": 3
             },
             {
               "itemkey": "cooked_cod",
               "peid": 350,
               "pedata": 0
             },
             {
               "itemkey": "cooked_salmon",
               "peid": 350,
               "pedata": 1
             },
             {
               "itemkey": "ink_sac",
               "peid": 351,
               "pedata": 0
             },
             {
               "itemkey": "rose_red",
               "peid": 351,
               "pedata": 1
             },
             {
               "itemkey": "cactus_green",
               "peid": 351,
               "pedata": 2
             },
             {
               "itemkey": "cocoa_beans",
               "peid": 351,
               "pedata": 3
             },
             {
               "itemkey": "lapis_lazuli",
               "peid": 351,
               "pedata": 4
             },
             {
               "itemkey": "purple_dye",
               "peid": 351,
               "pedata": 5
             },
             {
               "itemkey": "cyan_dye",
               "peid": 351,
               "pedata": 6
             },
             {
               "itemkey": "light_gray_dye",
               "peid": 351,
               "pedata": 7
             },
             {
               "itemkey": "gray_dye",
               "peid": 351,
               "pedata": 8
             },
             {
               "itemkey": "pink_dye",
               "peid": 351,
               "pedata": 9
             },
             {
               "itemkey": "lime_dye",
               "peid": 351,
               "pedata": 10
             },
             {
               "itemkey": "dandelion_yellow",
               "peid": 351,
               "pedata": 11
             },
             {
               "itemkey": "light_blue_dye",
               "peid": 351,
               "pedata": 12
             },
             {
               "itemkey": "magenta_dye",
               "peid": 351,
               "pedata": 13
             },
             {
               "itemkey": "orange_dye",
               "peid": 351,
               "pedata": 14
             },
             {
               "itemkey": "bone_meal",
               "peid": 351,
               "pedata": 15
             },
             {
               "itemkey": "bone",
               "peid": 352,
               "pedata": 0
             },
             {
               "itemkey": "sugar",
               "peid": 353,
               "pedata": 0
             },
             {
               "itemkey": "cake",
               "peid": 354,
               "pedata": 0
             },
             {
               "itemkey": "red_bed",
               "peid": 355,
               "pedata": 0
             },
             {
               "itemkey": "orange_bed",
               "peid": 355,
               "pedata": 1
             },
             {
               "itemkey": "magenta_bed",
               "peid": 355,
               "pedata": 2
             },
             {
               "itemkey": "light_blue_bed",
               "peid": 355,
               "pedata": 3
             },
             {
               "itemkey": "yellow_bed",
               "peid": 355,
               "pedata": 4
             },
             {
               "itemkey": "lime_bed",
               "peid": 355,
               "pedata": 5
             },
             {
               "itemkey": "pink_bed",
               "peid": 355,
               "pedata": 6
             },
             {
               "itemkey": "gray_bed",
               "peid": 355,
               "pedata": 7
             },
             {
               "itemkey": "light_gray_bed",
               "peid": 355,
               "pedata": 8
             },
             {
               "itemkey": "cyan_bed",
               "peid": 355,
               "pedata": 9
             },
             {
               "itemkey": "purple_bed",
               "peid": 355,
               "pedata": 10
             },
             {
               "itemkey": "blue_bed",
               "peid": 355,
               "pedata": 11
             },
             {
               "itemkey": "brown_bed",
               "peid": 355,
               "pedata": 12
             },
             {
               "itemkey": "green_bed",
               "peid": 355,
               "pedata": 13
             },
             {
               "itemkey": "black_bed",
               "peid": 355,
               "pedata": 15
             },
             {
               "itemkey": "repeater",
               "peid": 356,
               "pedata": 0
             },
             {
               "itemkey": "cookie",
               "peid": 357,
               "pedata": 0
             },
             {
               "itemkey": "filled_map",
               "peid": 358,
               "pedata": 0
             },
             {
               "itemkey": "shears",
               "peid": 359,
               "pedata": 0
             },
             {
               "itemkey": "melon_slice",
               "peid": 360,
               "pedata": 0
             },
             {
               "itemkey": "pumpkin_seeds",
               "peid": 361,
               "pedata": 0
             },
             {
               "itemkey": "melon_seeds",
               "peid": 362,
               "pedata": 0
             },
             {
               "itemkey": "beef",
               "peid": 363,
               "pedata": 0
             },
             {
               "itemkey": "cooked_beef",
               "peid": 364,
               "pedata": 0
             },
             {
               "itemkey": "chicken",
               "peid": 365,
               "pedata": 0
             },
             {
               "itemkey": "cooked_chicken",
               "peid": 366,
               "pedata": 0
             },
             {
               "itemkey": "rotten_flesh",
               "peid": 367,
               "pedata": 0
             },
             {
               "itemkey": "ender_pearl",
               "peid": 368,
               "pedata": 0
             },
             {
               "itemkey": "blaze_rod",
               "peid": 369,
               "pedata": 0
             },
             {
               "itemkey": "ghast_tear",
               "peid": 370,
               "pedata": 0
             },
             {
               "itemkey": "gold_nugget",
               "peid": 371,
               "pedata": 0
             },
             {
               "itemkey": "nether_wart",
               "peid": 372,
               "pedata": 0
             },
             {
               "itemkey": "potion",
               "peid": 373,
               "pedata": 0
             },
             {
               "itemkey": "glass_bottle",
               "peid": 374,
               "pedata": 0
             },
             {
               "itemkey": "spider_eye",
               "peid": 375,
               "pedata": 0
             },
             {
               "itemkey": "fermented_spider_eye",
               "peid": 376,
               "pedata": 0
             },
             {
               "itemkey": "blaze_powder",
               "peid": 377,
               "pedata": 0
             },
             {
               "itemkey": "magma_cream",
               "peid": 378,
               "pedata": 0
             },
             {
               "itemkey": "brewing_stand",
               "peid": 379,
               "pedata": 0
             },
             {
               "itemkey": "cauldron",
               "peid": 380,
               "pedata": 0
             },
             {
               "itemkey": "ender_eye",
               "peid": 381,
               "pedata": 0
             },
             {
               "itemkey": "glistering_melon_slice",
               "peid": 382,
               "pedata": 0
             },
             {
               "itemkey": "pig_spawn_egg",
               "peid": 383,
               "pedata": 0
             },
             {
               "itemkey": "elder_guardian_spawn_egg",
               "peid": 383,
               "pedata": 4
             },
             {
               "itemkey": "wither_skeleton_spawn_egg",
               "peid": 383,
               "pedata": 5
             },
             {
               "itemkey": "stray_spawn_egg",
               "peid": 383,
               "pedata": 6
             },
             {
               "itemkey": "husk_spawn_egg",
               "peid": 383,
               "pedata": 23
             },
             {
               "itemkey": "zombie_villager_spawn_egg",
               "peid": 383,
               "pedata": 27
             },
             {
               "itemkey": "skeleton_horse_spawn_egg",
               "peid": 383,
               "pedata": 28
             },
             {
               "itemkey": "zombie_horse_spawn_egg",
               "peid": 383,
               "pedata": 29
             },
             {
               "itemkey": "donkey_spawn_egg",
               "peid": 383,
               "pedata": 31
             },
             {
               "itemkey": "mule_spawn_egg",
               "peid": 383,
               "pedata": 32
             },
             {
               "itemkey": "evoker_spawn_egg",
               "peid": 383,
               "pedata": 34
             },
             {
               "itemkey": "vex_spawn_egg",
               "peid": 383,
               "pedata": 35
             },
             {
               "itemkey": "vindicator_spawn_egg",
               "peid": 383,
               "pedata": 36
             },
             {
               "itemkey": "creeper_spawn_egg",
               "peid": 383,
               "pedata": 50
             },
             {
               "itemkey": "skeleton_spawn_egg",
               "peid": 383,
               "pedata": 51
             },
             {
               "itemkey": "spider_spawn_egg",
               "peid": 383,
               "pedata": 52
             },
             {
               "itemkey": "zombie_spawn_egg",
               "peid": 383,
               "pedata": 54
             },
             {
               "itemkey": "slime_spawn_egg",
               "peid": 383,
               "pedata": 55
             },
             {
               "itemkey": "ghast_spawn_egg",
               "peid": 383,
               "pedata": 56
             },
             {
               "itemkey": "zombie_pigman_spawn_egg",
               "peid": 383,
               "pedata": 57
             },
             {
               "itemkey": "enderman_spawn_egg",
               "peid": 383,
               "pedata": 58
             },
             {
               "itemkey": "cave_spider_spawn_egg",
               "peid": 383,
               "pedata": 59
             },
             {
               "itemkey": "silverfish_spawn_egg",
               "peid": 383,
               "pedata": 60
             },
             {
               "itemkey": "blaze_spawn_egg",
               "peid": 383,
               "pedata": 61
             },
             {
               "itemkey": "magma_cube_spawn_egg",
               "peid": 383,
               "pedata": 62
             },
             {
               "itemkey": "bat_spawn_egg",
               "peid": 383,
               "pedata": 65
             },
             {
               "itemkey": "witch_spawn_egg",
               "peid": 383,
               "pedata": 66
             },
             {
               "itemkey": "endermite_spawn_egg",
               "peid": 383,
               "pedata": 67
             },
             {
               "itemkey": "guardian_spawn_egg",
               "peid": 383,
               "pedata": 68
             },
             {
               "itemkey": "shulker_spawn_egg",
               "peid": 383,
               "pedata": 69
             },
             {
               "itemkey": "sheep_spawn_egg",
               "peid": 383,
               "pedata": 91
             },
             {
               "itemkey": "cow_spawn_egg",
               "peid": 383,
               "pedata": 92
             },
             {
               "itemkey": "chicken_spawn_egg",
               "peid": 383,
               "pedata": 93
             },
             {
               "itemkey": "squid_spawn_egg",
               "peid": 383,
               "pedata": 94
             },
             {
               "itemkey": "wolf_spawn_egg",
               "peid": 383,
               "pedata": 95
             },
             {
               "itemkey": "mooshroom_spawn_egg",
               "peid": 383,
               "pedata": 96
             },
             {
               "itemkey": "ocelot_spawn_egg",
               "peid": 383,
               "pedata": 98
             },
             {
               "itemkey": "horse_spawn_egg",
               "peid": 383,
               "pedata": 100
             },
             {
               "itemkey": "rabbit_spawn_egg",
               "peid": 383,
               "pedata": 101
             },
             {
               "itemkey": "polar_bear_spawn_egg",
               "peid": 383,
               "pedata": 102
             },
             {
               "itemkey": "llama_spawn_egg",
               "peid": 383,
               "pedata": 103
             },
             {
               "itemkey": "parrot_spawn_egg",
               "peid": 383,
               "pedata": 105
             },
             {
               "itemkey": "villager_spawn_egg",
               "peid": 383,
               "pedata": 120
             },
             {
               "itemkey": "turtle_spawn_egg",
               "peid": 383,
               "pedata": 255
             },
             {
               "itemkey": "experience_bottle",
               "peid": 384,
               "pedata": 0
             },
             {
               "itemkey": "fire_charge",
               "peid": 385,
               "pedata": 0
             },
             {
               "itemkey": "writable_book",
               "peid": 386,
               "pedata": 0
             },
             {
               "itemkey": "written_book",
               "peid": 387,
               "pedata": 0
             },
             {
               "itemkey": "emerald",
               "peid": 388,
               "pedata": 0
             },
             {
               "itemkey": "item_frame",
               "peid": 389,
               "pedata": 0
             },
             {
               "itemkey": "flower_pot",
               "peid": 390,
               "pedata": 0
             },
             {
               "itemkey": "carrot",
               "peid": 391,
               "pedata": 0
             },
             {
               "itemkey": "potato",
               "peid": 392,
               "pedata": 0
             },
             {
               "itemkey": "baked_potato",
               "peid": 393,
               "pedata": 0
             },
             {
               "itemkey": "poisonous_potato",
               "peid": 394,
               "pedata": 0
             },
             {
               "itemkey": "map",
               "peid": 395,
               "pedata": 0
             },
             {
               "itemkey": "golden_carrot",
               "peid": 396,
               "pedata": 0
             },
             {
               "itemkey": "skeleton_skull",
               "peid": 397,
               "pedata": 0
             },
             {
               "itemkey": "wither_skeleton_skull",
               "peid": 397,
               "pedata": 1
             },
             {
               "itemkey": "zombie_head",
               "peid": 397,
               "pedata": 2
             },
             {
               "itemkey": "player_head",
               "peid": 397,
               "pedata": 3
             },
             {
               "itemkey": "creeper_head",
               "peid": 397,
               "pedata": 4
             },
             {
               "itemkey": "dragon_head",
               "peid": 397,
               "pedata": 5
             },
             {
               "itemkey": "carrot_on_a_stick",
               "peid": 398,
               "pedata": 0
             },
             {
               "itemkey": "nether_star",
               "peid": 399,
               "pedata": 0
             },
             {
               "itemkey": "pumpkin_pie",
               "peid": 400,
               "pedata": 0
             },
             {
               "itemkey": "firework_rocket",
               "peid": 401,
               "pedata": 0
             },
             {
               "itemkey": "firework_star",
               "peid": 402,
               "pedata": 0
             },
             {
               "itemkey": "enchanted_book",
               "peid": 403,
               "pedata": 0
             },
             {
               "itemkey": "comparator",
               "peid": 404,
               "pedata": 0
             },
             {
               "itemkey": "nether_brick",
               "peid": 405,
               "pedata": 0
             },
             {
               "itemkey": "quartz",
               "peid": 406,
               "pedata": 0
             },
             {
               "itemkey": "tnt_minecart",
               "peid": 407,
               "pedata": 0
             },
             {
               "itemkey": "hopper_minecart",
               "peid": 408,
               "pedata": 0
             },
             {
               "itemkey": "prismarine_shard",
               "peid": 409,
               "pedata": 0
             },
             {
               "itemkey": "prismarine_crystals",
               "peid": 410,
               "pedata": 0
             },
             {
               "itemkey": "rabbit",
               "peid": 411,
               "pedata": 0
             },
             {
               "itemkey": "cooked_rabbit",
               "peid": 412,
               "pedata": 0
             },
             {
               "itemkey": "rabbit_stew",
               "peid": 413,
               "pedata": 0
             },
             {
               "itemkey": "rabbit_foot",
               "peid": 414,
               "pedata": 0
             },
             {
               "itemkey": "rabbit_hide",
               "peid": 415,
               "pedata": 0
             },
             {
               "itemkey": "armor_stand",
               "peid": 416,
               "pedata": 0
             },
             {
               "itemkey": "iron_horse_armor",
               "peid": 417,
               "pedata": 0
             },
             {
               "itemkey": "golden_horse_armor",
               "peid": 418,
               "pedata": 0
             },
             {
               "itemkey": "diamond_horse_armor",
               "peid": 419,
               "pedata": 0
             },
             {
               "itemkey": "lead",
               "peid": 420,
               "pedata": 0
             },
             {
               "itemkey": "name_tag",
               "peid": 421,
               "pedata": 0
             },
             {
               "itemkey": "command_block_minecart",
               "peid": 422,
               "pedata": 0
             },
             {
               "itemkey": "mutton",
               "peid": 423,
               "pedata": 0
             },
             {
               "itemkey": "cooked_mutton",
               "peid": 424,
               "pedata": 0
             },
             {
               "itemkey": "black_banner",
               "peid": 425,
               "pedata": 0
             },
             {
               "itemkey": "red_banner",
               "peid": 425,
               "pedata": 1
             },
             {
               "itemkey": "green_banner",
               "peid": 425,
               "pedata": 2
             },
             {
               "itemkey": "brown_banner",
               "peid": 425,
               "pedata": 3
             },
             {
               "itemkey": "blue_banner",
               "peid": 425,
               "pedata": 4
             },
             {
               "itemkey": "purple_banner",
               "peid": 425,
               "pedata": 5
             },
             {
               "itemkey": "cyan_banner",
               "peid": 425,
               "pedata": 6
             },
             {
               "itemkey": "light_gray_banner",
               "peid": 425,
               "pedata": 7
             },
             {
               "itemkey": "gray_banner",
               "peid": 425,
               "pedata": 8
             },
             {
               "itemkey": "pink_banner",
               "peid": 425,
               "pedata": 9
             },
             {
               "itemkey": "lime_banner",
               "peid": 425,
               "pedata": 10
             },
             {
               "itemkey": "yellow_banner",
               "peid": 425,
               "pedata": 11
             },
             {
               "itemkey": "light_blue_banner",
               "peid": 425,
               "pedata": 12
             },
             {
               "itemkey": "magenta_banner",
               "peid": 425,
               "pedata": 13
             },
             {
               "itemkey": "orange_banner",
               "peid": 425,
               "pedata": 14
             },
             {
               "itemkey": "white_banner",
               "peid": 425,
               "pedata": 15
             },
             {
               "itemkey": "end_crystal",
               "peid": 426,
               "pedata": 0
             },
             {
               "itemkey": "spruce_door",
               "peid": 427,
               "pedata": 0
             },
             {
               "itemkey": "birch_door",
               "peid": 428,
               "pedata": 0
             },
             {
               "itemkey": "jungle_door",
               "peid": 429,
               "pedata": 0
             },
             {
               "itemkey": "acacia_door",
               "peid": 430,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_door",
               "peid": 431,
               "pedata": 0
             },
             {
               "itemkey": "chorus_fruit",
               "peid": 432,
               "pedata": 0
             },
             {
               "itemkey": "popped_chorus_fruit",
               "peid": 433,
               "pedata": 0
             },
             {
               "itemkey": "beetroot",
               "peid": 434,
               "pedata": 0
             },
             {
               "itemkey": "beetroot_seeds",
               "peid": 435,
               "pedata": 0
             },
             {
               "itemkey": "beetroot_soup",
               "peid": 436,
               "pedata": 0
             },
             {
               "itemkey": "dragon_breath",
               "peid": 437,
               "pedata": 0
             },
             {
               "itemkey": "splash_potion",
               "peid": 438,
               "pedata": 0
             },
             {
               "itemkey": "spectral_arrow",
               "peid": 439,
               "pedata": 0
             },
             {
               "itemkey": "tipped_arrow",
               "peid": 440,
               "pedata": 0
             },
             {
               "itemkey": "lingering_potion",
               "peid": 441,
               "pedata": 0
             },
             {
               "itemkey": "shield",
               "peid": 442,
               "pedata": 0
             },
             {
               "itemkey": "elytra",
               "peid": 443,
               "pedata": 0
             },
             {
               "itemkey": "spruce_boat",
               "peid": 444,
               "pedata": 0
             },
             {
               "itemkey": "birch_boat",
               "peid": 445,
               "pedata": 0
             },
             {
               "itemkey": "jungle_boat",
               "peid": 446,
               "pedata": 0
             },
             {
               "itemkey": "acacia_boat",
               "peid": 447,
               "pedata": 0
             },
             {
               "itemkey": "dark_oak_boat",
               "peid": 448,
               "pedata": 0
             },
             {
               "itemkey": "totem_of_undying",
               "peid": 449,
               "pedata": 0
             },
             {
               "itemkey": "shulker_shell",
               "peid": 450,
               "pedata": 0
             },
             {
               "itemkey": "iron_nugget",
               "peid": 452,
               "pedata": 0
             },
             {
               "itemkey": "knowledge_book",
               "peid": 453,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_13",
               "peid": 2256,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_cat",
               "peid": 2257,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_blocks",
               "peid": 2258,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_chirp",
               "peid": 2259,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_far",
               "peid": 2260,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_mall",
               "peid": 2261,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_mellohi",
               "peid": 2262,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_stal",
               "peid": 2263,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_strad",
               "peid": 2264,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_ward",
               "peid": 2265,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_11",
               "peid": 2266,
               "pedata": 0
             },
             {
               "itemkey": "music_disc_wait",
               "peid": 2267,
               "pedata": 0
             }
           ];
}