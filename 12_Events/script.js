// Hente element
let btn = document.querySelector('button');

let eventHandler = () => {
	console.log('Knapp trykket');
};

// 'click' er event vi lytter etter
btn.addEventListener('click', eventHandler);

let formBtn = document.querySelector('#send-form');

formBtn.addEventListener('click', (event) => {
	// Det som skal skje når knappen er trykket
	event.preventDefault();
	console.log('Skjemaknapp trykket');
});