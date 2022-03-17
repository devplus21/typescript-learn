/* ================================== DYNAMIC (ANY) TYPES =================================== */

let age: any = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'axios' };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push('comback');
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };
ninja = { name: 25, age: 'alex' };
console.log(ninja);
