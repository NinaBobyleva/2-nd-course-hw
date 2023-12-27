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
    case 2:
    case 12:
        alert('Зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень')
        break;
    default:
        alert('В году 12 месяцев')
        break;
}

// Задание 7

let anyNumber = Number(prompt('Пожалуйста, введите любое число.'))

if (anyNumber % 2) {
    alert('Число нечетное')
} else {
    alert('Число четное')
}

// Задание 8 и 9

let clientOS = Number(prompt('Скачайте приложение. Если у вас iOS введите 0, Android введите 1.'));
let year = Number(prompt('Какого года выпуска ваш телефон?'))
let iOS = 0;
let Android = 1;

if (clientOS === iOS) {
    if (clientOS === iOS && year >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке.')
     } else {
       console.log('Установите облегченную версию приложения для iOS по ссылке.') 
    }
} else if (clientOS === Android) {
    if (clientOS === Android && year >= 2015) {
        console.log('Установите версию приложения для Android по ссылке.')
     } else {
       console.log('Установите облегченную версию приложения для Android по ссылке.') 
    }
} else {
    console.log('Ввел что-то не то.')
}
