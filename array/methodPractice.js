// Example 1: 

const arr1 = [3,4,5,1,3,6,5,7,8,5,6 ];
const array1= arr1.map((arr, index, array) => arr * 3);
console.log(array1);

// Exapmle 2: 

const numbers = [11, 12, 13, 14, 15];
const newNumbers = numbers.map((num, index, array) => num * 2);
console.log(numbers);

// Example 3: 

const emps = [
    {
        name: "Jenis",
        position: "developer"
       },
      {
        name: "Mahima",
        position: "ui designer"
      },
      {
        name: "Ankit",
        position: "developer"
      },
      {
        name: "Smit",
        position: "content manager"
       },
      {
        name: "Umang",
        position: "ui designer"
      },
   ]
   const positions = emps.filter((dev, index, array) => dev.position == "developer")
   console.log(positions);

// Example 4:

const users = [
    {firstName : "Jenis", 
    lastName: "Patel"
    },
    {firstName : "Mahima", 
    lastName: "Shakyawal"
    }, 
  ];
   
  const userNames = users.map(function(name, index, array){
      return `${name.firstName} ${name.lastName}`;
  })
  console.log(userNames);

  // Example 5:

  const names = ['john', 'mary', 'jane'];
  const capitalizedNames = names.map((name, index, array) => name.toUpperCase());
  console.log(capitalizedNames);

  // Example 6: 

  const numbers1 = [1, 2, 3, 4, 5, 6, 7];
  const oddNumbers = numbers1.filter((num, index, array) => num % 2 !== 0);
  console.log(oddNumbers);

  // Example 7: 

  const persons = ['john', 'mary', 'jane'];
  const perNames = persons.filter((name, index, array) => !name.startsWith('j'));
  console.log(perNames);

  // Example 8: 

  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers2.reduce((acc, current, index, array) => acc + current, 0);
  console.log(sum)

  // Example 9: 

  const numbers3 = [10, 5, 20, 8, 15, 75, 7];
  const maxVlaue = numbers3.reduce((max, current, index, array) => Math.max(max, current), 0);
  console.log(maxVlaue);

  // Example 10:

  const tshirts = [
    { size: "S", color: "black", logo: "freeCodeCamp" },
    { size: "S", color: "white", logo: "freeCodeCamp" },
    { size: "M", color: "black", logo: "freeCodeCamp" },
    { size: "M", color: "teal",  logo: "freeCodeCamp" },
    { size: "L", color: "white", logo: "freeCodeCamp" },
    { size: "L", color: "teal",  logo: "freeCodeCamp" },
  ];
  
  const tshirtList = tshirts.every((tshirt, index, array) => {
    return tshirt.size <= "s";
  })
  console.log(tshirtList);

  // Example 11:

  const numbers4=[1, 2, 3, 4, 5, 6];
  const boolValue = numbers4.some((num, index, array)=>num === 2)
  console.log(boolValue);

  // Example 12:

  const surveyors = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];
  
  
  const boolVal=surveyors.every(surveyor=>surveyor.answer==="Yes")
  console.log(boolVal);

  // Example 13: 

  const products = [
    { id: 1, product: 'mouse', countInStock: 2 },
    { id: 2, product: 'keyboard', countInStock: 1 },
    { id: 3, product: 'monitor', countInStock: 4 },
    { id: 4, product: 'watch', countInStock: 4 },
 ];
 
 const product = products.filter((prod, index, array) => prod.countInStock > 1);
 console.log(product);

 // Example 14:

 const products1 = [
    { id: 1, product: 'mouse', countInStock: 2 },
    { id: 2, product: 'keyboard', countInStock: 1 },
    { id: 3, product: 'monitor', countInStock: 4 },
    { id: 4, product: 'watch', countInStock: 4 },
 ];
 
 const product1 = products.find((prod, index, array) => prod.countInStock > 1);
 console.log(product1);

 