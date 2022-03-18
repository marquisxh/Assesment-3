let color1 = document.querySelector('button#color');
let place1 = document.querySelector('button#place');
let ritual1 = document.querySelector('button#ritual');

function FavColor(evt) {
	evt.preventDefault();
	
	alert('Blue');
}

function FavPlace(evt) {
	evt.preventDefault();
	
	alert('Library');
}

function FavRitual(evt) {
	evt.preventDefault();
	
	alert('Going to the gym');
}

color1.addEventListener('click', FavColor);
place1.addEventListener('click', FavPlace);
ritual1.addEventListener('click', FavRitual);