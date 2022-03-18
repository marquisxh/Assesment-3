console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('submitted successfully');
}

function handleImage(evt) {	
	evt.preventDefault();
	
	alert('You are so cool!');
}


let form = document.querySelector('form#contact');
let img = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', handleImage);