var url = "https://gist.githubusercontent.com/dktapps/d43850de2637d01ad8844e768b2da068/raw/c506b1cf7e5cc083e1cfa2bb02fd43d225e72a3d/VanillaBiomes_initBiomes.cpp";

var content = $EXEC("curl " + url);

var lines = content.split("\n");

var outObj = {};

/*
  sub_2996110(&v1246, "mesa", &v1768);
  v1766 = 37;
*/
var subLine;
for(var i in lines) {
	var line = lines[i].trim();

	if(line.startsWith("sub_2996110"))
		subLine = line;
	else if(subLine) {
		subLine = subLine.substr("sub_2996110(&v1246, \"".length);
		subLine = subLine.substr(0, subLine.indexOf("\"", 1));
		line = line.substr("v1766 = ".length);
		line = line.substr(0, line.length - 1);

		outObj[subLine] = parseInt(line);

		subLine = null;
	}
}

print(JSON.stringify(outObj));

var url = "https://gist.githubusercontent.com/colinrgodsey/2ea908d6c4609e3d93489eeefd766f50/raw/4c13105f3720210f66bf9e2a0b2e89f5b01d7dbb/1.13.biomes";

var content = $EXEC("curl " + url);

var lines = content.split("\n");

var outObj2 = {};

/*
a(0, "ocean", new BiomeOcean());
*/
var subLine;
for(var i in lines) {
	var line = lines[i].trim();

	line = line.substr(2);
	var spl = line.split(", ");
	var id = parseInt(spl[0]);
	var key = spl[1];

	key = key.substr(1, key.length - 2);

	outObj2[key] = parseInt(id);	
}

print(JSON.stringify(outObj2));

var fixedMap = {
	mountains: "extreme_hills",
	swamp: "swampland",
	nether: "hell",
	snowy_tundra: "ice_plains",
	snowy_mountains: "ice_mountains",
	mushroom_fields: "mushroom_island",
	mushroom_field_shore: "mushroom_island_shore",
	wooded_hills: "forest_hills",
	mountain_edge: "extreme_hills_edge",
	stone_shore: "stone_beach",
	snowy_beach: "cold_beach",
	dark_forest: "roofed_forest",
	snowy_taiga: "cold_taiga",
	snowy_taiga_hills: "cold_taiga_hills",
	giant_tree_taiga: "mega_taiga",
	giant_tree_taiga_hills: "mega_taiga_hills",
	wooded_mountains: "extreme_hills_plus_trees",
	badlands: "mesa",
	wooded_badlands_plateau: "mesa_plateau_stone",
	badlands_plateau: "mesa_plateau"
}

var result = {};
var missingPC = [];
var missingPE = [];
for(var biome in outObj2) {
	var pcId = outObj2[biome];
	var peId = outObj[fixedMap[biome] || biome] || -1;

	if(pcId >= 129) peId = pcId;

	if(peId == -1) missingPC.push(biome);

	delete outObj[biome];

	result[biome] = {
		pc: pcId,
		pe: peId
	}
}

print(JSON.stringify(result));

for(var i in outObj) missingPE.push(i);

print("missing pe");
print(JSON.stringify([missingPE]));
print("missing pc");
print(JSON.stringify([missingPC]));


