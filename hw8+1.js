// Задание 1

const person = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(person.sort(function compareNumbers(a, b) {
    return a.age - b.age;
  }));

// Задание 2

function isPositive(num) {
    return num > 0;
}
function isMale(men) {
    return men.gender === 'male';

}
function filter(array, result) {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (result(array[i])) {
            arr.push(array[i]);
        }

    }
    return arr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// Задание 3

const timeRepeat = () => {
    const date = new Date();
    const interval = setInterval(() => {
        console.log(date);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30000);
};

timeRepeat();

// Задание 4

function delayForSecond(callback) {
    setTimeout(() => {
    callback();
    }, 1000);
};

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))
