let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');



setInterval(() => {

let time = new Date();

let hours = time.getHours() / 12;
let minutes = time.getMinutes() / 60;
let seconds = time.getSeconds() / 60;

hour.style.transform = `rotate(${hours * 360}deg)`;
minute.style.transform = `rotate(${minutes * 360}deg)`;
second.style.transform = `rotate(${seconds * 360}deg)`;

}, 1000);