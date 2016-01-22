var autocompleteInputs = document.querySelectorAll('input[autocomplete]');

for (var i=0; i<autocompleteInputs.length; i++) {
	autocompleteInputs[i].setAttribute("autocomplete", "on");
}