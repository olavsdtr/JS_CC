// Hente element
let btn = document.querySelector('button');

// 'click' er event vi lytter etter
btn.addEventListener('click', () => {
	// Det som skal skje når knappen er trykket
	console.log('Knapp trykket');
});

let eventHandler = () => {
    console.log('Knapp trykket');
};

let formBtn = document.querySelector('#send-form');

formBtn.addEventListener('click', (event) => {
	// Det som skal skje når knappen er trykket
	// event.preventDefault();
	console.log('Skjema ikke sendt inn');
});

