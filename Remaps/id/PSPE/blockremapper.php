<?php
//=====================================================\\
//                        PSPE                         \\
//=====================================================\\

/* 
 * By the ProtocolSupport team,
 * Falls under GNU Affero General Public License v3.0
 * /

//=====================================================\\
//         PC -> PE ids to create PE remaps            \\
//=====================================================\\

/* 
 * - Info -
 * This is the new tool to generate json for the blockremaps.
 * We have this as compiler as it is easy to work and test with.
 * 
 * - Background -
 * Both PC and PE have runtimeids.
 * Runtimeids are variable, we need to rely on blocknames for
 * remap definitions. (Inside PS id->id lists are compiled)
 * In PC a definition is now a BLOCKSTATE which can contain certian properties.
 * In PC no more magic data value is used.
 * In PE a definition is now a BLOCKSTATE without properties.
 * In PE the magic data value is still used.
 *
 * - Workings -
 * We iteratre through the pc block definition
 * and remap to PE string, id and data.
 * 
 * - Remapping -
 * All PC states are unique, that's why they are the keys.
 * We first check the state for manual remaps defined in this script.
 * If no manual remap is found a matching PE state is searched,
 * first based on (legacy) ID then based on name.
 */

//=====================================================\\
//                       Options                       \\
//=====================================================\\

$pcDefinitionUrl = "https://raw.githubusercontent.com/ProtocolSupport/ProtocolSupport/master/resources/resources/mappings/flattening/minecraft_1_13/blocks.json";
$peDefinitionUrl = "https://raw.githubusercontent.com/pmmp/PocketMine-MP/master/src/pocketmine/resources/runtimeid_table.json";
$pcOldIds = "https://raw.githubusercontent.com/ProtocolSupport/ProtocolSupport/master/resources/resources/mappings/preflatteningblockiddata.json";

//=====================================================\\
//                    Initialisation                   \\
//=====================================================\\

/**
* Encodes blockstate properties to mojang format.
*/
function propertiesEncode($properties) {
  $propertyStrings = array();
  foreach($properties as $property => $value) {
    $propertyStrings[] = $property . "=" . $value;
  }
  return "[" . implode(",", $propertyStrings) . "]";
}

//Definition arrays.
$pcDef = json_decode(file_get_contents($pcDefinitionUrl), true);
$peDef = json_decode(file_get_contents($peDefinitionUrl), true);
$pcIdDef = json_decode(file_get_contents($pcOldIds), true);

//Create pc lookup table by (FULL) blockstate.
$pcFromState = array();
foreach($pcIdDef as $val) {
  $pcFromState[$val["blockdata"]] = array();
  $pcFromState[$val["blockdata"]]["id"] = $val["legacyid"];
  $pcFromState[$val["blockdata"]]["data"] = $val["legacydata"];
}

//Create pe lookup table by (NON FULL) blockstate.
$peFromState = array();
foreach($peDef as $val) {
  $peFromState[$val["name"]] = $val["id"];
}

//Create pe lookup table by id.
$peFromId = array();
foreach($peDef as $val) {
  $peFromId[$val["id"]] = $val["name"];
}

//Remapping tables:
$fullRemaps = array();
$catchAllRemaps = array();
$dataRemaps = array();

/**
 * Defines full remap for certain pc (FULL) blockstate.
 * A full blockstate contains all state properties.
 */
function defFullRemap($state, $peState, $peData) {
  global $fullRemaps;
  $fullRemaps[$state] = array("name"=>$peState, "data"=>$peData);
}

/**
 * Defines a catch-all full remap for certain pc (NON FULL) blockstate.
 * A non-full blockstate contains no certain state properties.
 */
function defCatchAllRemap($state, $peState, $peData) {
  global $catchAllRemaps;
  $catchAllRemaps[$state] = array("name"=>$peState, "data"=>$peData);
}

/**
 * Defines data remap for certain pc (NON FULL) blockstate.
 * A non full blockstate does not contain state properties.
 */
function defDataRemap($state, $legacyData, $peData) {
  global $dataRemaps;
  $remaps = null;
  if (array_key_exists($state, $dataRemaps)) { $remaps = $dataRemaps[$state]; }
  if ($remaps == null) {
    $remaps = array();
  }
  $remaps[$legacyData] = $peData;
  $dataRemaps[$state] = $remaps;
}

function dataRemap($state, $legacyData) {
  global $dataRemaps;
  if (array_key_exists($state, $dataRemaps) && array_key_exists($legacyData, $dataRemaps[$state])) {
    return $dataRemaps[$state][$legacyData];
  }
  return $legacyData;
}

//remaps:
$allmaps = array();
//Missing remaps:
$missingRemaps = array();

/**
 * Remap pc blockstate to pe blockstate + data.
 */
function remap($state, $fullState) {
  global $missingRemaps, $fullRemaps, $catchAllRemaps, $dataRemaps, $peFromState, $peFromId, $pcFromState;
  $remap = null;
  if (array_key_exists($fullState, $fullRemaps)) { $remap = $fullRemaps[$fullState]; }
  if ($remap == null) {
    if (array_key_exists($state, $catchAllRemaps)) { $remap = $catchAllRemaps[$state]; }
  }
  if ($remap == null) {
    if (array_key_exists($state, $peFromState)) {
      $remap = array("name"=>$state);
      if (array_key_exists($fullState, $pcFromState) && array_key_exists($pcFromState[$fullState]["id"], $peFromId) 
          && $peFromId[$pcFromState[$fullState]["id"]] == $remap["name"]) {
        $remap["data"] = dataRemap($state, $pcFromState[$fullState]["data"]);
      } else {
        $missingRemaps[] = array("state"=>$fullState, "type"=>"Data", 
                                 "extra"=>"Name Mismatch", 
                                 "name1"=>$remap["name"],
                                 "name2"=>(array_key_exists($fullState, $pcFromState) && array_key_exists($pcFromState[$fullState]["id"], $peFromId) ? 
                                           $peFromId[$pcFromState[$fullState]["id"]] : ""));
        return null;
      }
    } elseif (array_key_exists($fullState, $pcFromState) && array_key_exists($pcFromState[$fullState]["id"], $peFromId)) {
      $remap = array("name"=>$peFromId[$pcFromState[$fullState]["id"]]);
      $remap["data"] = dataRemap($state, $pcFromState[$fullState]["data"]);
    } else {
      $missingRemaps[] = array("state"=>$fullState, "type"=>"Full", "extra"=>"", "name1"=>"", "name2"=>"");
      return null;
    }
  }
  return $remap;
}

//=====================================================\\
//                      Pre-Remaps                     \\
//=====================================================\\
//TODO REMAP REMAP REMAP all the data value stuff.
// Full proper remaps
defFullRemap("minecraft:jukebox[has_record=false]", "minecraft:jukebox", 0); //Jukebox
defFullRemap("minecraft:podzol[snowy=false]", "minecraft:podzol", 0); //podzol

// Shulker Boxes
defCatchAllRemap("minecraft:white_shulker_box", "minecraft:shulker_box", 0);
defCatchAllRemap("minecraft:orange_shulker_box", "minecraft:shulker_box", 1);
defCatchAllRemap("minecraft:magenta_shulker_box", "minecraft:shulker_box", 2);
defCatchAllRemap("minecraft:light_blue_shulker_box", "minecraft:shulker_box", 3);
defCatchAllRemap("minecraft:yellow_shulker_box", "minecraft:shulker_box", 4);
defCatchAllRemap("minecraft:lime_shulker_box", "minecraft:shulker_box", 5); 
defCatchAllRemap("minecraft:pink_shulker_box", "minecraft:shulker_box", 6); 
defCatchAllRemap("minecraft:gray_shulker_box", "minecraft:shulker_box", 7); 
defCatchAllRemap("minecraft:light_gray_shulker_box", "minecraft:shulker_box", 8);
defCatchAllRemap("minecraft:cyan_shulker_box", "minecraft:shulker_box", 9); 
defCatchAllRemap("minecraft:purple_shulker_box", "minecraft:shulker_box", 10);
defCatchAllRemap("minecraft:blue_shulker_box", "minecraft:shulker_box", 11);
defCatchAllRemap("minecraft:brown_shulker_box", "minecraft:shulker_box", 12);
defCatchAllRemap("minecraft:green_shulker_box", "minecraft:shulker_box", 13);
defCatchAllRemap("minecraft:red_shulker_box", "minecraft:shulker_box", 14);
defCatchAllRemap("minecraft:black_shulker_box", "minecraft:shulker_box", 15);
// Trap Doors...
// Wooden
defDataRemap("minecraft:oak_trapdoor", 0, 3);
defDataRemap("minecraft:oak_trapdoor", 1, 2);
defDataRemap("minecraft:oak_trapdoor", 2, 1);
defDataRemap("minecraft:oak_trapdoor", 3, 0);
defDataRemap("minecraft:oak_trapdoor", 4, 11);
defDataRemap("minecraft:oak_trapdoor", 5, 10);
defDataRemap("minecraft:oak_trapdoor", 6, 9);
defDataRemap("minecraft:oak_trapdoor", 7, 8);
defDataRemap("minecraft:oak_trapdoor", 8, 7);
defDataRemap("minecraft:oak_trapdoor", 9, 6);
defDataRemap("minecraft:oak_trapdoor", 10, 5);
defDataRemap("minecraft:oak_trapdoor", 11, 4);
defDataRemap("minecraft:oak_trapdoor", 12, 15);
defDataRemap("minecraft:oak_trapdoor", 13, 14);
defDataRemap("minecraft:oak_trapdoor", 14, 13);
defDataRemap("minecraft:oak_trapdoor", 15, 12);
// Iron
defDataRemap("minecraft:iron_trapdoor", 0, 3);
defDataRemap("minecraft:iron_trapdoor", 1, 2);
defDataRemap("minecraft:iron_trapdoor", 2, 1);
defDataRemap("minecraft:iron_trapdoor", 3, 0);
defDataRemap("minecraft:iron_trapdoor", 4, 11);
defDataRemap("minecraft:iron_trapdoor", 5, 10);
defDataRemap("minecraft:iron_trapdoor", 6, 9);
defDataRemap("minecraft:iron_trapdoor", 7, 8);
defDataRemap("minecraft:iron_trapdoor", 8, 7);
defDataRemap("minecraft:iron_trapdoor", 9, 6);
defDataRemap("minecraft:iron_trapdoor", 10, 5);
defDataRemap("minecraft:iron_trapdoor", 11, 4);
defDataRemap("minecraft:iron_trapdoor", 12, 15);
defDataRemap("minecraft:iron_trapdoor", 13, 14);
defDataRemap("minecraft:iron_trapdoor", 14, 13);
defDataRemap("minecraft:iron_trapdoor", 15, 12);


//=====================================================\\
//                Helper / Debug Functions             \\
//=====================================================\\

//Render Table with current PC runtimeids.
function renderPCTable() {
  global $pcDef;
  echo "<table border='1'>";
  echo "<th>ID</th><th>Blockstate</th>";
  foreach($pcDef as $key => $part) {
    foreach ($part["states"] as $val) {
      echo "<tr>";
        echo "<td>";
          echo $val["id"];
        echo "</td>";
        echo "<td>";
          echo $key;
          if ($val["properties"] != null) {
            echo propertiesEncode($val["properties"]);
          }
        echo "</td>";
      echo "</td>";
    }
  }
  echo "</table>";
}

//Render Table with current PE runtimeids.
function renderPETable() {
  global $peDef;
  $i = 0;
  echo "<table border='1'>";
  echo "<th>ID</th><th>Blockstate</th>";
  foreach($peDef as $val) {
      echo "<tr>";
        echo "<td>";
          echo $i++;
          //echo $val["id"];
        echo "</td>";
        echo "<td>";
          echo $val["name"];
          if ($val["data"] != null) {
            echo "[data=". $val["data"] ."]";
          }
        echo "</td>";
      echo "</tr>";
  }
  echo "</table>"; 
}

//Render Table with old pc ids.
function renderPCOldTable() {
  global $pcIdDef;
  echo "<table border='1'>";
  echo "<th>Blockstate</th><th>ID</th><th>Data</th>";
  foreach($pcIdDef as $val) {
    echo "<tr>";
      echo "<td>";
        echo $val["blockdata"];
      echo "</td>";
      echo "<td>";
        echo $val["legacyid"];
      echo "</td>";
      echo "<td>";
        echo $val["legacydata"];
      echo "</td>";
    echo "</tr>";
  }
}

//Renders a table containing all full PC -> PE remaps.
function renderRemapTable($allmaps) {
  echo "<h1>Automatic remaps (" . count($allmaps) . ")</h1>";
  echo "<table border='1' width='100%'>";
  echo "<th>Blockstate</th><th>PE State</th><th>PE Data</th>";
  foreach($allmaps as $mapping) {
    echo "<tr>";
      echo "<td>";
       echo $mapping["blockdata"];
      echo "</td>";
      echo "<td>";
        echo $mapping["pename"];
      echo "</td>";
      echo "<td>";
        echo $mapping["pedata"];
      echo "</td>";
    echo "</tr>";
  }
  echo "</table>";
}

//Renders a table containing all missing / half-complete remaps.
function renderMissingTable($missingRemaps) {
  echo "<h1>Missing Remaps (" . count($missingRemaps) . ")</h1>";
  echo "<table border='1' width='100%'>";
  echo "<th>Blockstate</th><th>Type</th><th>Extra Info</th><th>NameFromPe</th><th>NameFromPcLegacy</th>";
    foreach($missingRemaps as $missing) {
      echo "<tr><td>";
        echo $missing["state"];
      echo "</td>";
      echo "<td>";
        echo $missing["type"];
      echo "</td>";
      echo "<td>";
        echo $missing["extra"];
      echo "</td>";
      echo "<td>";
        echo $missing["name1"];
      echo "</td>";
      echo "<td>";
        echo $missing["name2"];
      echo "</td></tr>";
    }
  echo "</table>";
}


//=====================================================\\
//                      Remapping                      \\
//=====================================================\\

function remapAuto() {
  global $pcDef, $allmaps;
  foreach($pcDef as $key => $part) {
    foreach ($part["states"] as $state) {
      //Define fullkey.
      $fullKey = $key;
      if (array_key_exists("properties", $state)) {
        $fullKey .= propertiesEncode($state["properties"]);
      }
      $map = remap($key, $fullKey);
      if ($map != null) {
        $allmaps[] = array("blockdata"=>$fullKey, "pename"=>$map["name"], "pedata"=>$map["data"]);
      }
    }
  }
}

//=====================================================\\
//                       Display                       \\
//=====================================================\\

//renderPCOldTable();
remapAuto(); //After funtion $allmaps and $missingRemaps are filled.
//echo json_encode($allmaps);
//var_dump($allmaps);
renderRemapTable($allmaps);
renderMissingTable($missingRemaps);

?>
