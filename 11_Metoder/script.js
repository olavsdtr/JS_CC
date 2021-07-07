// const newSection = document.createElement('section');

// let title = document.getElementById('page-title');
let headings1 = document.getElementsByTagName('button');
let saveButton = document.getElementsByClassName('btn-save');
// console.log(saveBtn);

// HTML tag
let firstHeading = document.querySelector('h1'); 

// Klasse, legg merke til punktum
let menuBtn = document.querySelector('.menu-btn');

// Id, legg merke til hashtag
let menuBtnID = document.querySelector('#menu-btn');



// HTML tag
let allHeadings = document.querySelectorAll('h1');

// Klasse, legg merke til punktum
let menuBtns = document.querySelectorAll('.menu-btn');

// Id, legg merke til hashtag
let menuBtnsID = document.querySelectorAll('#menu-btn');


// Lager en tittel
let aboutHeading = document.createElement('h1');
aboutHeading.innerHTML = 'Lagd en heading med JavaScript';

const aboutUsSection = document.querySelector('#about-us');


// Putter heading inn i section
aboutUsSection.appendChild(aboutHeading);
// aboutUsSection.removeChild(aboutHeading);

let big = 'En string mED storE OG små Bokstaver'.toUpperCase();
// EN STRING MED STORE OG SMÅ BOKSTAVER
console.log(big);

let small = 'EN annen String med stORE og SMå bokstaVER';

console.log(small.toLowerCase())
// en annen string med store og små bokstaver

 let spaces = '       unødvendige mellomrom    fjernes      ';

console.log(spaces.trim());
// unødvendige mellomrom

let saveBtn = document.querySelector('.btn-save');

// Endrer bakgrunnsfargen til knappen
saveBtn.style.backgroundColor = '#abc';