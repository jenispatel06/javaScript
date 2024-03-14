
console.log("Example 1 ----------------------------")
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
// 1. Get an array of all names

const charName = characters.map(ele => ele.name)
console.log(charName);

// 2. Get an array of all heights

const charHeight = characters.map((ele, index, array) => ele.height)
console.log(charHeight);

// 3. Get an array of objects with just name and height properties

const charProperty = characters.map((ele, index, array) => ({ name: ele.name, height: ele.height }));
console.log(charProperty);

// 4. Get an array of all first names

const firstName = characters.map((ele, index, array) => ele.name.split(" ").at(0));
console.log(firstName);

console.log(" ")
console.log("Example 2 ----------------------------")
console.log(" ")

// Square the value of every element in the array.
const input = [1, 2, 3, 4, 5];

const square = input.map((ele, index, array) => ele * ele);
console.log(square);

console.log(" ")
console.log("Example 3 ----------------------------")
console.log(" ")

// Get name initials (Get first character of each name)

const input1 = "George Raymond Richard Martin";
const strInput = input1.split(' ');

const fChar = strInput.map((ele, index, array) => ele[0]);
console.log(fChar);

// Find the difference in age between the oldest and youngest family members, 
// and return their respective ages and the age difference.

console.log(" ")
console.log("Example 4 ----------------------------")
console.log(" ")


const input3 = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

const ages = input3.map((ele, index, array) => ele.age);
console.log(ages);
const sorted = ages.sort();
console.log(sorted);
const arr = [Math.min(sorted.at(0)), Math.max(ages.at(-1)), Math.max(ages.at(-1)) - Math.min(ages.at(0))];
console.log(arr);


console.log(" ")
console.log("Example 5 ----------------------------")
console.log(" ")


// Numeronyms (Take first and last character and add count of remaining characters in between)

const input4 = "Every developer likes to mix kubernetes and javascript";
const arr1 = input4.split(" ");

const charNum = arr1.map((ele, index, Array) => 

    (ele.length <= 3) ? ele : `${ele.at(0)}${ele.length - 2}${ele.at(-1)}`
        
)
console.log(charNum.join(" "));

// output: "E3y d7r l3s to mix k8s and j8t";

console.log(" ")
console.log("Example 6 ----------------------------")
console.log(" ")

// Uppercase Strings
// Task: Given an array of strings, create a new array with each string converted to uppercase.
// Steps:
// Declare an array of strings.
// Use the map method to create a new array with uppercase strings.

const input5 = ["jenis", "patel", "mahima", "shakyawal"];

const upperCase = input5.map((ele, index, array) => ele.toUpperCase());
console.log(upperCase);


console.log(" ")
console.log("Example 7 ----------------------------")
console.log(" ")


// Square Even Numbers
// Task: Given an array of numbers, create a new array with only the square of even numbers.
// Steps:
// Declare an array of numbers.
// Use the map method with a conditional statement to filter and square even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNum = numbers.filter(ele => ele % 2 === 0);
console.log(evenNum);
const numSquare = evenNum.map((ele, index, array) => ele * ele);
console.log(numSquare);


console.log(" ")
console.log("Example 8 ----------------------------")
console.log(" ")


// Calculate Area of Rectangles
// Task: Given an array of rectangles with width and height, create a new array with the calculated area of each rectangle.
// Steps:
// Declare an array of rectangles (objects with width and height).
// Use the map method to create a new array with the calculated area for each rectangle.

const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
];

const area = rectangles.map((ele, index, array) => ele.height * ele.width);
console.log(area);


console.log(" ")
console.log("Example 9 ----------------------------")
console.log(" ")

// Create HTML List
// Task: Given an array of items, create an HTML list using the map method.
// Steps:
// Declare an array of items.
// Use the map method to create an HTML list string.

const items = ['Apple', 'Banana', 'Cherry', 'Date'];

const htmlList = items.map((ele, index, array) => 
    {
       return `<li>${ele}</li>`
    });

    const list = htmlList.join("");
console.log(`<ul>${list}</ul>`);



// Output: '<ul><li>Apple</li><li>Banana</li><li>Cherry</li><li>Date</li></ul>'
