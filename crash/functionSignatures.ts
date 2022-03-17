/* ================================================= FUNCTION SIGNATURES ===================================================== */
// chu ki func cham nhan dang :tham so la gi va tra ve ket qua la gi. tham so truyen vao co the khac tham so ban dau
// Example 0
let greet0: Function;

// Example 1
// day chi la chu ki
let greet: (a: string, b: string) => void;
// day la khi minh thuc su tao ra ham
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// Example 2
//chu ki
let calculation: (a: number, b: number, c: string) => number;
// ham duoc tao ra
calculation = (numOne: number, numTwo: number, action: string) =>
  action === 'add' ? numOne + numTwo : numOne - numTwo;

// Example 3
//chu ki
type Person = { name: string; age: number };
// ham duoc tao ra
let printPerson: (person: Person) => void;
printPerson: (myPerson: Person) => {
  console.log(`${myPerson.name} is ${myPerson.age} years old`);
};
printPerson({ name: 'tan', age: 20 });

// Example 4
//chu ki
type Person2 = { name: string; age: number };
// ham duoc tao ra
let printPerson2: (person2: Person2) => void;
printPerson: ({ name, age }: Person2) => {
  console.log(`${name} is ${age} years old`);
};
printPerson2({ name: 'tan2', age: 20 });

const tan2 = {
  name: 'bui van tan2',
  age: 30,
};
printPerson2: tan2;
