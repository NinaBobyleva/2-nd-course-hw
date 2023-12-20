// Задание 1

let after = 10;
alert(after);
after = 20;
alert(after)

// Задание 2

let firstIphone = 2007;
alert(firstIphone);

// Задание 3

let creatorJavaScript = 'Brendan Eich';
alert(creatorJavaScript)

// Задание 4

let ten = 10;
let two = 2;
alert(10 + 2);
alert(10 - 2);
alert(10 * 2);
alert(10 / 2);

// Задание 5

let numberTwo = 2;
let five = 5;
let result = 2 ** 5;
alert(result)

// Задание 6

let a = 9;
let b = 2;
alert(9 % 2);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Задание 8

let age = Number(prompt('Сколько вам лет?'))
alert(age);

// Задание 9

const user = {
    name: 'Ксения',
    age: 26,
    isAdmin: true,
}
console.log (user)

// Задание 9.1

user['city of residence'] = 'Москва'
console.log (user)

// Задание 9.2

user.age = 30
console.log (user.age)

// Задание 9.3

delete user['city of residence']
console.log (user)

// Задание 9.4

let info = prompt('Какую информацию вы хотите узнать о пользователе?')
alert(user[info])

// Задание 10

let name = prompt('Как ваше имя?')
alert(`Привет ${name}!`)