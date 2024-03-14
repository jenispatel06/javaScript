const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// 1. Get characters with mass greater than 100

const massGreat100 = characters.filter((ele, index, array) => ele.mass > 100)
console.log(massGreat100);
console.log("-----------------------------------------------")

// 2. Get characters with height less than 200

const massLess200 = characters.filter((ele, index, array) => ele.mass < 200)
console.log(massLess200);
console.log("-----------------------------------------------")

// 3. Get all male characters

const maleChar = characters.filter((ele, index, array) => ele.gender === "male")
console.log(maleChar);
console.log("-----------------------------------------------")

// 4. Get all female characters

const femaleChar = characters.filter((ele, index, array) => ele.gender === "female")
console.log(femaleChar);
console.log("-----------------------------------------------")
console.log("-----------------------------------------------")

// Write a function which returns odd/even numbers and store into odd/even array.

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const odd = input.filter((ele, index, array) => ele % 2 !== 0);
    console.log(odd);
    const even = input.filter((ele, index, array) => ele % 2 === 0);
    console.log(even);


console.log("-----------------------------------------------")
console.log("-----------------------------------------------")

// Sum of every positive element

const input1 = [1, -4, 12, 0, -3, 29, -150];

const positiveNum = input1.filter((ele, index, array) => ele > 0);
console.log(positiveNum);
let sum = 0;
for (let i = 0; i < positiveNum.length; i++) {
    sum += positiveNum[i];
}
console.log(sum);

console.log("-----------------------------------------------")
console.log("-----------------------------------------------")


// Check wheather number is divisible by 2 or not;

const input2 = [1, 2, 3, 4, 5];
const number = input.filter((ele, index, array) => ele % 2 === 0);
    console.log(number);

    