// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) break;
    console.log(numbers[i]); 
}

// Задание 2

const numbs = [1, 5, 4, 10, 0, 3];

numbs.forEach((el, index) => {
    if (el === 4) {
        console.log(`${index}`);
    }
});

// Задание 3

const num = [1, 3, 5, 10, 20];

console.log(num.join(' '));

// Задание 4

let arrs = [];

for (let i = 0; i < 3; i++) {
    arrs[i] = [];

    for (let j = 0; j < 3 ; j++) {
        arrs[i][j] = 1;

    };
};

console.log(arrs);

// Задание 5
/
const array = [1, 1, 1];

array.push(2, 2, 2);
console.log(array);

// Задание 6

const number = [9, 8, 7, 'a', 6, 5];

num.sort();
console.log(number);

num.pop();
console.log(number);

// Задание 7

const riddle = [9, 8, 7, 6, 5];

let i = Number(prompt('Введите число'));
let search = riddle.includes(i);

if (search) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8

let letters = 'abcdef';

letters = letters.split('');
console.log(letters);

letters.reverse();
console.log(letters);

letters = letters.join('');
console.log(letters);

// Задание 9

let two = [[1, 2, 3],[4, 5, 6]];

let two1 = two.flat();
console.log(two1);

// Задание 10

const arr = [1, 3, 6, 2, 4, 7];

for (let i = 0; i < arr.length - 1; i++) {
    
    console.log(arr[i] + arr[i + 1]);
}

// Задание 11

let square = [3, 6, 2, 9, 6, 8];

let newSquare = square.map(el => (el ** 2))
console.log(newSquare);

// Задание 12

let newArr = [];

function lengthWord(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        num = arrays[i].length;
        newArr.push(num);
    }
}
lengthWord(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(newArr);

// Задание 13

function filterPositive(array) {
    const numb = array.filter(el => el < 0);
    console.log(numb);
  }
  
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]);
  
//  Задание 14

let arr1 = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
    let result = Math.round(Math.random() * 10);
    arr1.push(result);
    if (result % 2 === 0) {
        arr2.push(result);
    }
}

console.log(arr1);
console.log(arr2);

// Задание 15

let random = [];

for (let i = 1; i <= 6; i++) {
    let result = Math.ceil(Math.random() * 10);
    random.push(result);
}

let newRandom = random.reduce((a, b) => a + b) / random.length;

console.log(random);
console.log(newRandom);
