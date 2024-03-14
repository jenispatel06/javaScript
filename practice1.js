const name = "jenis patel";
const length = name.length;
console.log(name);
console.log(length);

const text = "Jenis, Patel, Mahima";
const text1 = "Shakyawal"
const position = text.charAt(7);
console.log(text);
console.log(position);

// charAt()

const position1 = text.charAt(8);
console.log(text);
console.log(position1);

// charCodeAt()

const position2 = text.charCodeAt(7);
console.log(text);
console.log(position2);

// []

const position3 = text[6];
console.log(text);
console.log(position3);

// slice()

const position4 = text.slice(6, 15);
console.log(text);
console.log(position4);

const position5 = text.slice(6);
console.log(text);
console.log(position5);

const position6 = text.slice(-7);
console.log(text);
console.log(position6);

// substring()

const position7 = text.substring(7);
console.log(text);
console.log(position7);

// substr()

const position8 = text.substr(7, 6);
console.log(text);
console.log(position8);

// toUpperCase()

const position9 = text.toUpperCase();
console.log(text);
console.log(position9);

// toLowerCase()

const position10 = text.toLowerCase();
console.log(text);
console.log(position10);

//concat()

const concat = text.concat(", ",text1);
console.log(text);
console.log(text1)
console.log(concat);

// trim()

const trimText = "    Hello Javascript     ";
const trimText1 =  trimText.trim();
const textLength = trimText.length;
const trimLength = trimText1.length;
console.log(trimText);
console.log(textLength);
console.log(trimText1);
console.log(trimLength);

//trimStart()

const trimText2 =  trimText.trimStart();
const textLength1 = trimText.length;
const trimLength1 = trimText2.length;
console.log(trimText);
console.log(textLength1);
console.log(trimText2);
console.log(trimLength1);

//trimEnd()

const trimText3 =  trimText.trimEnd();
const textLength2 = trimText.length;
const trimLength2 = trimText3.length;
console.log(trimText);
console.log(textLength2);
console.log(trimText3);
console.log(trimLength2);

// padStart()

const padding = "5";
const padStr = padding.padStart(4,"0");
console.log(padding);
console.log(padStr);

// padSEnd()

const padding1 = "7";
const padStr1 = padding1.padEnd(4,"0");
console.log(padding1);
console.log(padStr1);

// repeat()

const repeat = "Jenis...";
const repeat1 = repeat.repeat(4);
console.log(repeat);
console.log(repeat1);

// replace()

const replace = "Jenis";
const replace1 = replace.replace("Jenis","Patel");
console.log(replace);
console.log(replace1);

// replaceAll()

const replace2 = "Jenis jenis Jenis patel";
const replace3 = replace2.replaceAll("Jenis","Patel");
console.log(replace2);
console.log(replace3);

// split()

const char1 = "ab,c|d coef";
console.log(char1);
console.log(char1.split(" "));
console.log(char1.split(","));
console.log(char1.split("|"));

console.log(replace2.match('jenis'));

console.log(replace2.matchAll('jenis'));

// Object:

const person = {firstName:"Jenis",
				lastName:"Patel", 
                age:22, 
                };
console.log(person.firstName +" "+ person.lastName+ " is " + person.age + " years old.");

// Object.create()

const student = {name: 'Mahima',
                surname: 'patel' };
const information = Object.create(student);
information.name = "Jenis";
console.log(information.name);

// Object.keys()

const emp = {
                  name:"Mahima",
	              surname:"shakyawal",
	              job:"Developer",
	              city:"Ahmedabad"};
const emp1 = {
                  name1:"Jenis",
	              surname1:"Patel",
	              job1:"Developer",
	              city1:"Ahmedabad"};

console.log(Object.keys(emp));

// Object.values()

console.log(Object.values(emp));

// Object.entries()

console.log(Object.entries(emp));

// Object.assign()

console.log(Object.assign(emp));

// Object.freeze()

const user = {
	          username: 'JenisPatel',
	          password: 'Jenis6'
             };
Object.freeze(user);
user.username = 'Jenis';
user.password = 'Jenis15';
console.log(user);

// Object.seal()

const user1 = {
	          username: 'JenisPatel',
	          password: 'Jenis6'
};
 Object.seal(user1);
user1.username = 'Jenis';
user1.password = 'Jenis15';
console.log(user1);

// Object.is()

const address = {  
    city: "Ahmedabad"  
  };
  const address1 = {  
    city1: "Ahmedabad"  
  };  
  console.log(Object.is(address.city, address1.city1));
  
  // Object.isSealed()

  console.log(Object.isSealed(user1));

  // Object.isFrozen()

  console.log(Object.isFrozen(user));

// Object.defineProperty()

  const number = {};
Object.defineProperty(number, 'number1', {  
                                          value: 42,  
                                          value: 52+10,   
                                          });  
console.log(number.number1);



  
    





























