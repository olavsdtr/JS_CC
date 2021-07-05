let pizza = 'Grandiosa';

if (pizza === 'BigOne') {
    console.log('Nam!')
} else if (pizza === 'Grandiosa') {
    console.log('Mmm')
} else {
    console.log('Jaja, blir pasta da')
}

let pizzaValg = pizza === 'BigOne' ? 'Nam!' : 'Nei takk';
console.log(pizzaValg)

// let pizza = 'Dr. Oetker';

switch (pizza) {
	case 'Grandiosa':
		console.log('Kjærlighet ved første bit');
		break;
	case 'BigOne':
		console.log('More of the good stuff');
		break;
	case 'Dr. Oetker':
		console.log('Quality is the Best Recipe');
		break;
	default:
		console.log('Hjemmelagd pizza er best');
}