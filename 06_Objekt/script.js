const person1 = ['Eline', 26, 'Barcelona', true];

const person = {
	navn: 'Eline',
	alder: 26,
	bosted: 'Barcelona',
	student: true
};

// Få tilgang til kun alder
const objekt = {
	nøkkel: 'verdi',
	nøkkel1: 'verdi1',
	nested: [{
		nest1: 'underverdi',
		id: 1
	},
	{
		nest2: 'underverdi2',
		id: 2
	}],
};
console.log(objekt);
console.log(objekt.nested)
console.log(objekt.nested[1].nest2);

console.log(person);
console.log(person.alder);