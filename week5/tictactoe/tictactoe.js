function isWinner() {
	/* TODO:  */
}

function makeMove(event) {
	var targetElement = event.target || event.srcElement;
	let td = this;
	td.children[1 - turn].style.display = 'none';
	td.children[turn].style.display = '';
	window.turn = window.turn == 0 ? 1 : 0;
}

document.addEventListener("DOMContentLoaded", function(event) { 
	var squares = Array.from(document.getElementsByTagName("td"));
	window.turn = 0;
	squares.forEach(function(square) {
		square.addEventListener("click", makeMove);
	});
});

Vue.component('tictactoe-square', {
	props: {
    	'squareColor' : String
  	},
  	template:
  	`<td id="t00" :bgcolor="squareColor">
	  	<svg class="iHr6L4wXbENc-rSO13xo9eCQ" aria-label="X" role="img" viewBox="0 0 128 128" style="display:none; visibility: visible;">
			<path class="hFJ9Ve" d="M16,16L112,112" style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.765; stroke-dashoffset: 0;"></path>
			<path class="hFJ9Ve" d="M112,16L16,112" style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.765; stroke-dashoffset: 0;"></path>
		</svg>
		<svg class="iU3kyN8t2AqU-EEfAjFvVGUw" aria-label="O" role="img" viewBox="0 0 128 128" style="display:none; visibility: visible;">
			<path class="hFJ9Ve" d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16" style="stroke: rgb(242, 235, 211);"></path>
		</svg>
	</td>`
})

var app = new Vue({
  el: '#app',
  data: {
  }
})
