var makeRequest = function() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://pokeapi.co/api/v2/pokemon/1");
    req.send();
    
    
    var jsonResponse;
    
    // Call this function when ready
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            // XMLHttpRequest returns a big string; we need to turn it into JSON by using JSON.parse
            jsonResponse = JSON.parse(req.responseText);
            console.log(jsonResponse);
            document.getElementById("pokemon").innerText = jsonResponse.name;
            document.getElementById("pokeimage").src = jsonResponse.sprites.front_default;
        }
    }
}

document.getElementById("getPokemon").addEventListener("click", makeRequest);
