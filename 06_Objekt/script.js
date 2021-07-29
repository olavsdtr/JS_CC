const person1 = ['Eline', 26, 'Barcelona', true];

const person = {
  navn: 'Eline',
  alder: 26,
  bosted: 'Barcelona',
  student: true,
};

const objekt = {
  navn: 'Eline',
  alder: 26,
  bosted: [
    {
      id: 1,
      adresse: 'Liksomgata 23',
      postnummer: '1234',
      sted: 'Norge',
    },
    {
      id: 2,
      adresse: 'C/ Señores Curas 68',
      postnummer: '12120',
      sted: 'Castellón',
    },
  ],
};

console.log(person);
console.log(person.alder);

console.log(objekt);
console.log(objekt.nested);
console.log(objekt.bosted[1].adresse);
