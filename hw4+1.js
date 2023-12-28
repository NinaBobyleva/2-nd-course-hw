// Задание 1

for (let name = 1; name < 3; name++) {
    console.log('Привет');
}

// Задание 2

for (let number = 1; number < 6; number++) {
    console.log(number);
}

// Задание 3

for (let number2 = 7; number2 < 23; number2++) {
    console.log(number2);
}

// Задание 4

let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
}

for (let user in obj) {
        console.log(`${user}- зарплата ${obj[user]}`);
}

// Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++
}
console.log(n);
console.log(num);

// Задание 6

let friday = 1;

do {
    if (friday % 7 === 1) {
        console.log(`Сегодня пятница, ${friday} число. Необходимо подготовить отчет.`)
    }
    friday++
} while (friday <= 31);