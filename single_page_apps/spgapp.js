let dittoURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';
let defaultPokeMessage = "Who's that Pokemon?"

function retrieveStats(statsOut, rawStats) {
    for(statJSON of rawStats){
        if(statJSON.stat.name == "speed") {
            statsOut["speed"] = statJSON.base_stat;
        } else if(statJSON.stat.name == "attack") {
            statsOut["attack"] = statJSON.base_stat;
        }
    }
}

/*function findWinner(statName, pokeNum, )*/

var app = new Vue({
    el: '#app',
    data: {
        pokemonName1: '',
        pokemonName2: '',
        pokemon1URL: dittoURL,
        pokemon2URL: dittoURL
    },
    watch: {
        pokemonName1: function (newPokemon, oldPokemon) {
            this.getImageURL(newPokemon.toLowerCase(), 
                             "pokemon1URL", "pokeMessage1", "1");
        },
        pokemonName2: function (newPokemon, oldPokemon) {
            this.getImageURL(newPokemon.toLowerCase(),
                             "pokemon2URL", "pokeMessage2", "2");
        }
    },
    methods: {
        getImageURL: _.debounce(
            function(pokemonName, urlField, msgRef, pokeNum) {
                var vue = this
                P.getPokemonByName(pokemonName)
                .then(function(response) {
                    console.log(response);
                    if(response && "sprites" in response) {
                        vue.$data[urlField] = response.sprites.front_default;
                        var stats = {}
                        retrieveStats(stats, response.stats)
                        //vue.$refs[imgRef].src = vue.$data[urlField];
                        vue.$refs[msgRef].innerText = "Go, " + pokemonName + "!";
                        vue.$refs["speed" + pokeNum]
                            .children[1].innerText = stats["speed"];
                        vue.$refs["attack" + pokeNum]
                            .children[1].innerText = stats["attack"];
                    }
                });
            }, 500)
    }
})