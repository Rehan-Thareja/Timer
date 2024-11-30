let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let clock = document.querySelector(".clock");
let span = document.createElement("span");
span.textContent = `${hours}:${minutes}:${seconds}`;
clock.appendChild(span);

setInterval (function(){
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  span.textContent = `${hours}:${minutes}:${seconds}`;
},1000)

