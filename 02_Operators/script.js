// MATTE
console.log(1 + 2);

// String. Dette gjelder kun for +
console.log('4' + 9);
// Ser på begge som tall
console.log('4' - 9);

console.log(5 - 4);
console.log(3 * 3);
console.log(15 / 5);

// Gir rest, 8 delt på 4 blir heltall, gir 1 i rest
console.log(9 % 4);
// 2^3, 2 opphøyd i 3
console.log(2 ** 3);

// MINSKE/ØKE
let number = 3;

console.log((number += 3)); // number er nå 6 (number = number + 3)
console.log((number *= 2)); // number er nå 12 (number = number * 6)

++number; // 13 Øker før verdien skrives ut
--number; // 12 Minsker før verdien skrives ut

number++; // 12 Bruker verdien før det økes
number--; // 12 Bruker verdien før det minskes

// SAMMENLIGNING
5 < 4; // False, 5 er ikke mindre enn 4
3 > 2; // True, 3 er større enn 2

9 <= 3; // False, 9 er ikke mindre eller lik 3
6 >= 6; // True, 6 er større eller lik 6

8 == 7; // False, 8 er ikke lik 7
8 != 7; // True, 8 er ikke lik 7

// === sjekker om datatypen er lik
'1' == 1; // True
'1' === 1; // False, ikke samme datatype

'1' != 1; // False, begge er 1
'1' !== 1; // True, ikke samme datatype

// 0, false, " " og null er alle false
0 == false; // True
0 === false; // False, er ikke samme datatype

// LOGIKK
let klokke = 19;
let dag = 'mandag';

// Hvis klokke er mindre enn 18 ELLER over 18, så er det sant
if (klokke < 18 || dag === 'mandag') {
  console.log('Middag!');
}

// Hvis klokke er lik 18 OG dag er lik mandag, så er det sant
if (klokke === 18 && dag === 'mandag') {
  console.log('Pasta bolognese serveres nå!');
}

let tirsdag = true;
console.log(!tirsdag); // false, returnerer motsatt
