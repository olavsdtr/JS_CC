//! Nummer
let returnNan = 'a' - 2;
returnNan = 'a' + 2;

console.log(returnNan);

//! Fnutter og string
let navn = 'Eline'

let singleQuote = 'Hei ' + navn + ', ha en fin dag!';
let backTick = `Hei ${navn}, ha en fin dag!`;
let wrongQuote = 'Hei ${navn}, ha en fin dag!';

console.log(singleQuote);
console.log(backTick);
console.log(wrongQuote);

//! Multilinje string

// Funker fint
let longString = `Handlelista for helgen: Pepsi Max,
Potetgull,
Taco,
Grændis
`;

// Funker ikke
// let longWrongString = 'Handlelista for mandag: Bananer,
// Appelsinjuice,
// Knekkebrød
// ';

//! Boolean
let isLessThan = 2 < 5;
console.log(isLessThan);

//! Null
let nothing = null;
console.log(nothing);

//! Undefined
let height;
console.log(height);

//! Typeof
console.log(typeof(favorittsmak));
console.log(typeof(alderIgjen));