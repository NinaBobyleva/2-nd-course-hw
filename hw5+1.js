// Задание 1

let task = (a, b) => {
   let result = a > b ? console.log(b) : console.log(a);
   return result
}

task(3, 8);
task(5, 5);
task(9, 6);

// Задание 2

let number = function () {
    let answer = prompt('Введите число');
    if (answer % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное забор';
    }
}
console.log(number());

// Задание 3.1

function square(a) {
   console.log(a*a);
}

square(8);

// Задание 3.2

function square(a) {
    return a**2; 
 }
 
 console.log(square(8));
 

//  Задание 4

function user() {
    let answer = prompt('Сколько вам лет?');
    if (answer >= 0 && answer <= 12) {
        alert('Привет, друг!')
    } else if (answer >= 13) {
        alert('Добро пожаловать!')
    } else if (answer < 0) {
        alert('Вы ввели неправильное значение')
    }
}

user();

// Задание 5

let mult = () => {
    let a = (prompt('Введите первое число!'));
    let b = (prompt('Введите второе число!'));
    if (isNaN(a) || isNaN(b)) {
        return `Одно или оба значения не являются числом`
    } else {
        return a * b
    }
}

console.log(mult());

// Задание 6

function userAnswer() {
    let n = Number(prompt('Введите число от 0 до 10'));
    if (isNaN(Number(n))) {
        return `Переданный параметр не является числом`;
    } else if (n >= 0 && n <=10) {
        result = n**3;
        return `${n} в кубе равняется ${result}`;
    } else {
        return `Необходимо ввести число от 0 до 10`
    }
}

console.log(userAnswer());

// Задание 7

function area() {
    return 3.14 * this.radius**2;
}

function perimeter() {
    return 2 * 3.14 * this.radius;
}

let circle1 = {
    radius: 34,
    getArea: area,
    getPerimeter: perimeter,
}

let circle2 = {
    radius: 56,
    getArea: area,
    getPerimeter: perimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Задание 8

function seasons() {
    let month = Number(prompt('Введите номер месяца'));
    if (month >= 1 && month <=2 || month === 12) {
        return 'Зима';
    } else if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Лето';
    } else if (month >= 9 && month <= 11) {
        return 'Осень';
    } else {
        return 'Такого месяца не существует';
    }
}