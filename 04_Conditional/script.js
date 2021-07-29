let pizza = 'Grandiosa';

if (pizza === 'BigOne') {
    console.log('Nam!')
} else {
    console.log('Jaja, blir pasta da')
}

let pizzaValg = pizza === 'BigOne' ? 'Nam!' : 'Nei takk';
console.log(pizzaValg)

pizza = 'Peppes';

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