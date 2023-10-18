
let decrease = document.getElementsByClassName("btn")[0];

let reset = document.getElementsByClassName("btn")[1];

let increase = document.getElementsByClassName("btn")[2];

let number = document.getElementsByTagName("h1")[1];

var valor = 0;
decrease.addEventListener("click", ()=>{
  valor--;
 number.textContent = valor;
});


 reset.addEventListener("click", ()=>{
  valor = 0;
  number.textContent = valor;
 });

 increase.addEventListener("click", ()=>{
  valor++;
  number.textContent = valor;
 });