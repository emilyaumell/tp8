<?

// PHP response code for TP8

$recipes = array();

// SteakButter multidementional array
$recipes["SteakButter"] = array();
$recipes["SteakButter"]["ingredients"] = array();
$recipes["SteakButter"]["equipment"]= array();
$recipes["SteakButter"]["directions"] = array();

$recipes["SteakButter"]["ingredients"][0] = "½ cup butter";
$recipes["SteakButter"]["ingredients"][1] = "2 teaspoons garlic powder";
$recipes["SteakButter"]["ingredients"][2] = "4 cloves garlic, minced";
$recipes["SteakButter"]["ingredients"][3] = "4 pounds beef top sirloin steaks";
$recipes["SteakButter"]["ingredients"][4] = "salt and pepper to taste";

$recipes["SteakButter"]["equipment"][0]= "Outdoor grill";
$recipes["SteakButter"]["equipment"][1]= "Stovetop";
$recipes["SteakButter"]["equipment"][2]= "Small saucepan";
$recipes["SteakButter"]["equipment"][3]= "Measuring teaspoons";
$recipes["SteakButter"]["equipment"][4]= "Knife";

$recipes["SteakButter"]["directions"][0] = "Preheat an outdoor grill for high heat.";
$recipes["SteakButter"]["directions"][1] = "In a small saucepan, melt butter over medium-low heat with garlic powder and minced garlic. Set aside.";
$recipes["SteakButter"]["directions"][2] = "Sprinkle both sides of each steak with salt and pepper.";
$recipes["SteakButter"]["directions"][3] = "Grill steaks 4 to 5 minutes per side, or to desired doneness. When done, transfer to warmed plates. Brush tops liberally with garlic butter, and allow to rest for 2 to 3 minutes before serving.";

// receive and process $_GET data

// get the requested ID
$requestedID = $_REQUEST["id"];
$requestedID = htmlspecialchars($requestedID);
$requestedID = filter_var($requestedID, FILTER_SANITIZE_STRING);

// get the requested List
$requestedList = $_REQUEST["list"];
$requestedList = htmlspecialchars($requestedList);
$requestedList = filter_var($requestedList, FILTER_SANITIZE_STRING);

// get the sub-array of that ID and List
$requestedArray = $recipes[$requestedID][$requestedList];

// start converted requested data into JSON
$requestedJSON = "0"; // default value of zero
if ($requestedArray != null) {
  $requestedJSON = json_encode($requestedArray);
}

//output the JSON

echo $requestedJSON;





