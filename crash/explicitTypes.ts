/* ==================================== EXPLICIT TYPES =====================================   */
// EXPLICIT TYPES: khai bao kieu du lieu ngay tu dau
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'
age = 30;

// isLoggedIn = 23
isLoggedIn = true;

// ARRAYS
let animals: string[] = [];

// animals = ['alex', 'jonh']
animals.push('abc');

// UNION TYPES
let mixed: (string | number | boolean)[] = [];
// mixed = ['hello', 'goodbye']
mixed.push('hello');
mixed.push(3);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;

let medium: 'book' | 'movie';
// medium = 'song'
medium = 'book';

// OBJECTS
let animalOne: object;
animalOne = { name: 'alex', age: 30 };
animalOne = [];

let animalTwo: {
  name: string;
  age: number;
  content: string;
};

animalTwo = {
  name: 'jonh',
  age: 20,
  content: 'contents',
};
