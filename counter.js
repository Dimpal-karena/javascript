// const { label } = require("motion/react-client");

// const decrease = document.getElementById('decrease');
// const increase = document.getElementById('increase');
// const reset = document.getElementById('reset');
// const countlabel = document.getElementById('countlabel');
// let count = 0;

// decrease.onclick = function(){
//   count--;
//   countlabel.textContent = count;
// }

// increase.onclick = function(){
//   count++;
//   countlabel.textContent = count;
// }

// reset.onclick = function(){
//   count = 0;
//   countlabel.textContent = count;
// }

const mybutton = document.getElementById('mybutton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const mysum = document.getElementById('mysum');

const min = 1;
const max = 10;
let random1;
let random2;
let random3;
mybutton.onclick = function(){
  random1 = Math.floor(Math.random()*max)+min;
  random2 = Math.floor(Math.random()*max)+min;
  random3 = Math.floor(Math.random()*max)+min;
  label1.textContent = random1;
  label2.textContent = random2;
  label3.textContent = random3;
 // console.log(typeof(random1));
  s = random1+random2+random3;
  document.getElementById('mysum').textContent = `sum is : ${s}`;
  // mysum = random1+random2+random3;
  // document.getElementById('mysum').textContent = `${mysum}`;
}
