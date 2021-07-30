
//* GETELEMENT(S)
let title = document.getElementById('page-title');
let headings1 = document.getElementsByTagName('button');
let saveButton = document.getElementsByClassName('btn-save');
console.log(saveButton);

//* QUERYSELECTOR
// HTML tag
let firstHeading = document.querySelector('h1'); 
// Klasse, legg merke til punktum
let menuBtn = document.querySelector('.menu-btn');
// Id, legg merke til hashtag
let menuBtnID = document.querySelector('#menu-btn');

//* QUERYSELECTORALL
// HTML tag
let allHeadings = document.querySelectorAll('h1');
// Klasse, legg merke til punktum
let menuBtns = document.querySelectorAll('.menu-btn');
// Id, legg merke til hashtag
let menuBtnsID = document.querySelectorAll('#menu-btn');

//* CREATEELEMENT
let aboutHeading = document.createElement('h1');
aboutHeading.innerHTML = 'Lagd en heading med JavaScript';
aboutHeading.setAttribute("class", "title-h1");

//* APPENDCHILD OG REMOVECHILD
// Henter section på ID
const aboutUsSection = document.querySelector('#about-us');
// Putter heading inn i section
aboutUsSection.appendChild(aboutHeading);
// aboutUsSection.removeChild(aboutHeading);


//* STRING METODER
let big = 'En string mED storE OG små Bokstaver'.toUpperCase();
// EN STRING MED STORE OG SMÅ BOKSTAVER
console.log(big);

let small = 'EN annen String med stORE og SMå bokstaVER';

console.log(small.toLowerCase())
// en annen string med store og små bokstaver

 let spaces = '       unødvendige mellomrom    fjernes      ';

console.log(spaces.trim());
// unødvendige mellomrom

//* STYLING
let saveBtn = document.querySelector('.btn-save');
// Endrer bakgrunnsfargen til knappen
saveBtn.style.backgroundColor = '#abc';