// Задание 1
/*
let word = 'мороженое';

console.log(word.toUpperCase());

// Задание 2

let arrayNew = [];

function searchStart(array, search) {
    for (let el = 0; el < array.length; el++) {
        if (array[el].toLowerCase().startsWith(search.toLowerCase())) {
            arrayNew.push(array[el]);
        }  
    }
    return arrayNew
}

console.log(searchStart(['Король', 'конь', 'заря', 'порох'], 'ко'));

// Задание 3

let num = 32.58884;

let result = Math.floor(num);
console.log(result);

result = Math.ceil(num);
console.log(result);

result = Math.round(num);
console.log(result);

// Задание 4

let min = Math.min(52, 53, 49, 77, 21, 32);
console.log(min);

let max = Math.max(52, 53, 49, 77, 21, 32);
console.log(max);

// Задание 5

const randomNum = () => Math.ceil(Math.random() *10);

console.log(randomNum());

// Задание 6

let arr = [];

function getRandomNumbers(num) {
    let n = Math.floor(num / 2);
    for (let i = 0; i < n; i++) {
        let result = Math.round(Math.random() * num);
        arr.push(result); 
    }
    console.log(arr);
}

getRandomNumbers(9);

// Задание 7

function randomNum(max, min) {
  return Math.round(Math.random() * (max));
}

console.log((randomNum(10, 6)));

// * max || Math.random() * min


// Задание 8

let todayDate = new Date(1705867117549);

console.log(todayDate);

// Задание 9

let currentDate = new Date();

let days = 73 * 24 * 60 * 60 * 1000;
let myDate = +currentDate + days;
let daysAgo = new Date(myDate);

console.log(daysAgo);

// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function date(currentDate) {
  currentDate = new Date();
  let russianDate = "Дата: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " - это " + days[currentDate.getDay()];
  console.log(russianDate);

  let russianTime = "Время: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  console.log(russianTime);
}

date();
*/
// Задание 11

















































































/*
const days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let myDate = new Date();
let fullDate = "Сегодня:" + myDate.getDate() + " " + month[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

console.log(fullDate);


let welcome;
let myDate = new Date();

let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();

if (minute < 10) {
    minute = "0" + minute;
} 
if (second < 10) {
    second = "0" + second;
}

if (hour < 12) {
    welcome = "Доброе утро";
} else if (hour < 17) {
    welcome = "Добрый день";
} else {
    welcome = "Добрый вечер";
}

console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);


const days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let myDate = new Date();

myDate.setDate(21);
myDate.setMonth(10);
myDate.setFullYear(2023);

let fullDate = "Сегодня:" + myDate.getDate() + " " + month[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
console.log(fullDate);
*/

