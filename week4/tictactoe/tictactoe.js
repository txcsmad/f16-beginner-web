function isWinner() {
	/* TODO:  */
}

document.addEventListener("DOMContentLoaded", function(event) { 
	var squares = Array.from(document.getElementsByTagName("td"));
	let turn = 0;
	squares.forEach(function(square) {
		square.addEventListener("click", function() {
			var targetElement = event.target || event.srcElement;
			let td = this;
			td.children[1 - turn].style.display = 'none';
			td.children[turn].style.display = '';
			turn = turn == 0 ? 1 : 0;
		});
	});
});