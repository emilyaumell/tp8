// change font size using window onload event

// generic AJAX function to load fromFile into object with ID whereTo (TP#6)
function loadFileInto(fromIdentifier, fromList) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

  // define the fromFile value based on PHP URL
  fromFile = "recipes.php?id=" + fromIdentifier + "&list=" + fromList
  
	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {   
        
        // convert received JSON from PHP into a JavaScript array
        responseArray = JSON.parse(this.responseText);
        responseHTML = "";
        for (x = 0; x < responseArray.length; x++) {
          responseHTML += "<li>" + responseArray[x] + "</li>";
        }
       
        // figure out querySelector target
        whereTo = "#" + fromList + " ul";
        if (fromList == "directions") whereTo = "#" + " ol";
				document.querySelector(whereTo).innerHTML = responseHTML;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

window.onload = function() {
  

	// object constructor for Recipe prototype
function Recipe(recipeName, imageURL, contributorName, recipeIdentifier) {
	this.name = recipeName;
	this.imgsrc = imageURL;
	this.contributor = contributorName;
	this.identifier = recipeIdentifier;

	
	// update the screen with this object's recipe information
	this.displayRecipe = function() {
		
		// update the recipe title
		document.querySelector("#title h1").innerHTML = this.name;
		
		// update the recipe contributor
		document.querySelector("#title h3").innerHTML = "Contributed by: " + this.contributor;
		
		// update the image
		//document.querySelector("#steakpic").style.backgroundImage = "url(" + this.imgsrc + ")";
    document.querySelector("#steakpic").setAttribute("src", this.imgsrc);
		//document.querySelector("#steakpic").src = this.imgsrc;
    
    
		// update the 3 columns of information
		loadFileInto(this.identifier, "ingredients");
		loadFileInto(this.identifier, "equipment");
		loadFileInto(this.identifier, "directions");
		
	}	
  
}
  
  SteakButter = new Recipe(
    "Sirloin Steak with Garlic Butter",
    "https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "Emily Aumell",
    "SteakButter"
 );
  
  
LasagnaBest = new Recipe(
    "Worlds Best Lasagna",
    "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
    "Madison Roby",
    "lasag-ingredients.html",
    "lasag-equipment.html",
    "lasag-directions.html"
 );
  
  
SoftPretzels = new Recipe(
    "Soft Pretzels",
    "https://www.billyparisi.com/wp-content/uploads/2020/03/pretzels-1.jpg",
    "Kristine Zorn",
    "pret-ingredients.html",
    "pret-equipment.html",
    "pret-directions.html"
 );
  
	
  
  // target the headline
  x = document.querySelector("#title");
  // add CSS style for headline size
  x.classList.add("biggerHeadline");

  // -------------------------------------------------
  // set an event function to trigger when the headline is clicked
  // background and text color change in CSS
  x.onclick = function () {
    x.classList.toggle("clicked");
  };

  // -------------------------------------------------
  // set section lists as hidden with onclick event

  // target the ingredients list
  ListIng = document.querySelector("#ingredients");

  ListIng.classList.add("ing");
  
  ListIng.onclick = function () {
    ListIng.classList.toggle("ing");
  };
  
  // target the equipment list
  ListKit = document.querySelector("#equipment")
  
  ListKit.classList.add("kit");
  
  ListKit.onclick = function() {
    ListKit.classList.toggle("kit");
  };
  
  // target the directions list
  ListDir = document.querySelector("#directions")
  
  ListDir.classList.add("dir");
  
  ListDir.onclick = function() {
    ListDir.classList.toggle("dir");
  };

// -------------------------------------------------

// create new content tag using JS only
e = document.createElement("p");

// insert new text
e.innerHTML = "Prep: 20 mins | Cook: 20 mins | Total: 30 mins | Servings: 8";

// center and style text
e.style.textAlign = "center";
e.style.fontSize = "22px";

//  target the img for positioning
z = document.getElementById("steakpic");

// position p tag above photo
document.body.insertBefore(e, z);
  
  
};

