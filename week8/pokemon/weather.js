var app = new Vue({
    el: '#app',
    data: {
        pokemon: "",
        pkmnImages: []
    }, 
    methods: {
        getPokemon: function() {
            var pokemon = this.$data.pokemon;
            var req = new XMLHttpRequest();
            req.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon);

            req.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200){
                    var data = JSON.parse(this.responseText);
                    app.$data.pkmnImages = [data.sprites.front_default, data.sprites.back_default];
                } else if(this.readyState == 4 && this.status >= 400) {
                    app.$data.pkmnImages = ["https://www.computerhope.com/jargon/e/error.gif"];
                }
            };
            req.send();
        }
    }
})