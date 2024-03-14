const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
]; 


// MAP:
 
// 1. Get array of all names
console.log(" ")
console.log("----------MAP QUE 1:---------- ")
console.log(" ")

const allNames = characters.map((character, index, array) => character.name);
console.log(allNames);

// 2. Get array of all heights
console.log(" ")
console.log("----------MAP QUE 2:---------- ")
console.log(" ")

const allHeights = characters.map((character, index, array) => character.height);
console.log(allHeights);

// 3. Get array of objects with just name and height properties
console.log(" ")
console.log("----------MAP QUE 3:---------- ")
console.log(" ")

const nameHeight = characters.map(( {name,height} ) =>  ({name,height}) )
console.log(nameHeight)

// 4. Get array of all first names
console.log(" ")
console.log("----------MAP QUE 4:---------- ")
console.log(" ")

const allFirstNames = characters.map((character , index, array) => character.name.split(' ').at(0));
console.log(allFirstNames);


// REDUCE:

// 1. Get total mass of all characters
console.log(" ")
console.log("----------REDUCE QUE 1:---------- ")
console.log(" ")

const sumOfMass = characters.reduce((acc, character, index, array) => {
    acc += character.mass;
    return acc;
  }, 0);
console.log(sumOfMass);

// 2. Get total height of all characters
console.log(" ")
console.log("---------REDUCE QUE 2:---------- ")
console.log(" ")

const sumOfHeight = characters.reduce((acc, character, index, array) => {
    acc += character.height;
    return acc;
  }, 0);
console.log(sumOfHeight);

// 3. Get total number of characters by eye color
console.log(" ")
console.log("----------REDUCE QUE 3:--------- ")
console.log(" ")

const eyeColor = characters.reduce((acc, ele, index, array) => {
    if(acc[ele.eye_color]){
        acc[ele.eye_color] += 1
    }else{
        acc[ele.eye_color] = 1
    }
    return acc;
}, {});
console.log(eyeColor);

// 4. Get total number of characters in all the character names
console.log(" ")
console.log("----------REDUCE QUE 4:---------- ")
console.log(" ")


// FILTER:

// 1. Get characters with mass greater than 100
console.log(" ")
console.log("---------FILTER QUE 1:---------- ")
console.log(" ")

const massMoreThan100 = characters.filter((ele, index, array) => ele.mass>100);
console.log(massMoreThan100);

// 2. Get characters with height less than 200
console.log(" ")
console.log("----------FILTER QUE 2:---------- ")
console.log(" ")

const heightLessThan200 = characters.filter((ele, index, array) => ele.height<200);
console.log(heightLessThan200);

// 3. Get all male characters
console.log(" ")
console.log("----------FILTER QUE 3:--------- ")
console.log(" ")

const males = characters.filter((ele, index, array) => ele.gender.toLowerCase()==='male');
console.log(males);

// 4. Get all female characters
console.log(" ")
console.log("----------FILTER QUE 4:---------- ")
console.log(" ")

const females = characters.filter((ele, index, array) => ele.gender.toLowerCase()==='female');
console.log(females);


// SORT:

// 1. Sort by mass
console.log(" ")
console.log("---------SORT QUE 1:---------- ")
console.log(" ")

const massSort = characters.sort((mass1, mass2) => mass1.mass - mass2.mass);
console.log(massSort);

// 2. Sort by height
console.log(" ")
console.log("----------SORT QUE 2:---------- ")
console.log(" ")

const heigSort = characters.sort((heig1, heig2) => heig1.height - heig2.height);
console.log(heigSort);

// 3. Sort by name
console.log(" ")
console.log("----------SORT QUE 3:---------- ")
console.log(" ")

const nameSort = characters.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
console.log(nameSort);

// 4. Sort by gender
console.log(" ")
console.log("----------SORT QUE 4:---------- ")
console.log(" ")

const genSort = characters.sort((gen1, gen2) => gen1.gender.localeCompare(gen2.gender));
console.log(genSort);


// EVERY:

// 1. Does every character have blue eyes?
console.log(" ")
console.log("---------EVERY QUE 1:---------- ")
console.log(" ")

const allBlueEyes = (characters.every((character , index, array) => character.eye_color === 'blue'));
console.log(allBlueEyes);

// 2. Does every character have mass more than 40?
console.log(" ")
console.log("-----------EVERY QUE 2:--------- ")
console.log(" ")

const allMassMorethan40 = (characters.every((character , index, array) => character.mass > 40));
console.log(allMassMorethan40);

// 3. Is every character shorter than 200?
console.log(" ")
console.log("----------EVERY QUE 3:---------- ")
console.log(" ")

const allLessthan200 = (characters.every((character , index, array) => character.height < 200));
console.log(allLessthan200);

// 4. Is every character male?
console.log(" ")
console.log("----------EVERY QUE 4:---------- ")
console.log(" ")

const allMale = (characters.every((character , index, array) => character.gender === 'male'));
console.log(allMale);


// SOME:

// 1. Is there at least one male character?
console.log(" ")
console.log("----------SOME QUE 1:---------- ")
console.log(" ")

const atLeastOneOneMale = characters.some((character, index, array) => character.gender === 'male');
console.log(atLeastOneOneMale);

// 2. Is there at least one character with blue eyes?
console.log(" ")
console.log("----------SOME QUE 2:---------- ")
console.log(" ")

const atLeastOneBlueEyes = characters.some((character, index, array) => character.eye_color === 'blue');
console.log(atLeastOneBlueEyes);

// 3. Is there at least one character taller than 210?
console.log(" ")
console.log("----------SOME QUE 3:---------- ")
console.log(" ")

const atLeastOneTallerThan210 = characters.some((character, index, array) => character.height > 200);
console.log(atLeastOneTallerThan210);

// 4. Is there at least one character that has mass less than 50?
console.log(" ")
console.log("----------SOME QUE 4:---------- ")
console.log(" ")

const atLeastOnelessThan50 = characters.some((character, index, array) => character.mass < 50);
console.log(atLeastOnelessThan50)