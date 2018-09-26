
var turn = false;
// false - X, true - O

function getChildIndex(turn) {
	return turn == false ? 0 : 1;
}

document.addEventListener("DOMContentLoaded", function(event) {
	var squares = Array.from(document.getElementsByTagName("td"));
	squares.forEach(function(element) {
		element.addEventListener("click", function() {
			let td = this;
			if(td.children[0].style.display === 'none' && 
				td.children[1].style.display === 'none') {
				var index = getChildIndex(turn);
				td.children[index].style.display = '';
				turn = !turn;
			}
		});
	});
});