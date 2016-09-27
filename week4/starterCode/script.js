// This is a JS comment. I'll discuss what I did in these.'

var buttonchange = function(){
	// If you're modifying the thing you attach the listener to,
	// you can just use the "this" keyword.

	// classList is a special array of all the classes the class currently has.
	// It only has a few functions. More details on that on MDN:
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	// Take a look at the classes that this button has right now
	console.log(this.classList);

	
	this.classList.add("gone");

	console.log("POOF!");
}

var magic = document.getElementById("magic");
magic.addEventListener("click", buttonchange);

var changeClass = function(){
	// Get the HTML element using its id
	var para = document.getElementById("firstpara");

	// Toggle turns the class off if it's there, and
	// turns it on if it's not.''
	para.classList.toggle("isGreen");

	// innerText gets the text inside the element
	para.innerText = "Switched!";
}

// Make changeClass run every time the button with id="test" is clicked
var button = document.getElementById("test");
button.addEventListener("click", changeClass);


