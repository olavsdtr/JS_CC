let v = 0;
let move = document.querySelector('#demo');
let moveText = document.querySelector('#text');

move.addEventListener('mousemove', () => {
  moveText.textContent = ++v;
});

let w = 0;
let over = document.querySelector('#demo1');
let overText = document.querySelector('#text1');

over.addEventListener('mouseover', () => {
  overText.textContent = ++w;
});

let x = 0;
let out = document.querySelector('#demo2');
let outText = document.querySelector('#text2');

out.addEventListener('mouseout', () => {
  outText.textContent = ++x;
});

let y = 0;
let enter = document.querySelector('#demo3');
let enterText = document.querySelector('#text3');

enter.addEventListener('mouseenter', () => {
  enterText.textContent = ++y;
});

let z = 0;
let leave = document.querySelector('#demo4');
let leaveText = document.querySelector('#text4');

leave.addEventListener('mouseleave', () => {
  leaveText.textContent = ++z;
});
