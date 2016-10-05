var key="";

var noData = function(){
	var toAdd = document.getElementById("location");
	toAdd.innerText += "If you're reading this, you're probably blocking sites from getting your location. Probably a good thing. So I'll just used hardcoded coordinates for the GDC.\n";
	var fakeCoords = {};
	fakeCoords.coords = {};
	fakeCoords.coords.longitude = -97.736613;
	fakeCoords.coords.latitude = 30.286281;
	createRequest(fakeCoords);
}

var gotData = function(){
	if(this.readyState == 4 && this.status == 200){
		var data = JSON.parse(this.responseText);

		window.data = data;

		var toAdd = document.getElementById("location");
		toAdd.innerText += "The address detected is:\n";
		toAdd.innerText += data.results[0].formatted_address;
	} 
}

var createRequest = function(position){
	var latlong = position.coords.latitude + "," + position.coords.longitude;

	var req = new XMLHttpRequest();
	req.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlong + "&key=" + window.key);
	req.send();

	req.onreadystatechange = window.gotData;
}

var activate = function(){
	var loc = document.getElementById("location");
	/*if(key === ""){
        loc.innerText="No key in the scripts file. Go get a key from Google to use the Maps API.";
		} else*/
	/* Most APIs require you to get a key so they can keep track of how many requests you're making. I assumed Google did this, but turns out that they will track you based on IP if you don't provide one. Since I don't want to put my key up for everyone, I just left it blank. The site will still work fine, but it's not good practice to regularly do this. It's also not good practice to make these kinds of requests from inside the webpage, since people can steal your keys, but this is for demonstration purposes. */
	if(loc.innerText == ""){
		navigator.geolocation.getCurrentPosition(createRequest, noData);
    } else {
		loc.innerText += "\nYou already got the address!";
	}
}


var button = document.getElementById("getAddress");
button.addEventListener("click", activate);

