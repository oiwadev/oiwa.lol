var pattern = ['v','a','l','e','n','t','i','n','e','s','2','0','2','3'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		location.href = '/valentines/index.html';
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);