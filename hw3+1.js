// Задание 1

const password = 'пароль';
const answer = prompt('Введите пароль');

if (answer === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен не правильно');
}

// Задание 2

let c = Number(prompt('Любое число'))

if (c > 0 && c < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

// Задание 3

let d = 9;
let e = 21;

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 12
monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        alert('Зима')
        break;
    case 2:
        alert('Зима')
        break;
    case 3:
        alert('Весна')
        break;
    case 4:
        alert('Весна')
        break;
    case 5:
        alert('Весна')
        break;
    case 6:
        alert('Лето')
        break;
    case 7:
        alert('Лето')
        break;
    case 8:
        alert('Лето')
        break;
    case 9:
        alert('Осень')
        break;
    case 10:
        alert('Осень')
        break;
    case 11:
        alert('Осень')
        break;
    case 12:
        alert('Зима')
        break;
    default:
        alert('В году 12 месяцев')
        break;
}

// Задание 6

