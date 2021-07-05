console.log(handleliste.pop());

const liste = [56, 26, 43, 72, 61, 3, 19];

const filtrertArray = liste.filter(element => {
	return element < 57;
});

console.log(filtrertArray);

liste.forEach(element => {
	console.log(2*element);
});