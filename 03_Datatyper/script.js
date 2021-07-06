// Endring av variabels verdi

let changeType = 45;
changeType = 'en string';
changeType = true;

// Nummer
let intNumber = 3;
let floatNumber = 11.24;

// NaN
let returnsNaN = 'a' - 2;

// Legg merke til at string + tall blir string
let returnsString = 'a' + 2; // a2

//BigInt - legg merke til n på slutten av tallet
const hugeNumber = 54565412215548893212144455566421877998316n;

// Fnutter og string
let navn = 'Eline'

let singleQuote = 'Hei ' + navn + ', ha en fin dag!';
let backTick = `Hei ${navn}, ha en fin dag!`;
let wrongQuote = 'Hei ${navn}, ha en fin dag!';

console.log(singleQuote);
console.log(backTick);
console.log(wrongQuote);

// Multilinje string

// Funker fint
let longString = `Handlelista for helgen: Pepsi Max,
Potetgull,
Taco,
Grændis
`;

console.log(longString);

// Funker ikke
// let longWrongString = 'Handlelista for mandag: Bananer,
// Appelsinjuice,
// Knekkebrød
// ';

// Boolean
let isLessThan = 2 < 5;
console.log(isLessThan);

// Null
let nothing = null;
console.log(nothing);

// Undefined
let height;
console.log(height);

// Typeof
console.log(typeof(returnsString));
console.log(typeof(hugeNumber));