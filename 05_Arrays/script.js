let datatypeArray = ['en string', true, 23];

console.log(datatypeArray);

// Hente ut første element i arrayen
console.log('første element:', datatypeArray[0]);

// Antall elementer i arrayen
console.log('length:', datatypeArray.length);

console.log('pop:', datatypeArray.pop()); // Fjerner siste element
console.log(datatypeArray);

const liste = [56, 26, 43, 72, 61, 3, 19];

console.log('liste:', liste);

const filtrertArray = liste.filter(element => {
	return element < 57;
});

console.log('filtrert array:', filtrertArray)

liste.forEach(x => console.log(2 * x));

console.log(liste.map(el => 2 * el));
