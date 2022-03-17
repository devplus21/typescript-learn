/* ============================================== ARRAY AND OBJECTS ================================================   */
// ARRAY
let names = ['tom', 'milu', 'lulu'];
names.push('milk');
// names.push(4)
// names[0] = 4

let numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push('henry')
// numbers[1] = 'henry'

let mixed = ['milk', 4, 'chang', 8, 9, true];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// OBJECT
let animal = {
  name: 'gun',
  belt: 'white',
  age: 30,
};

animal.age = 40;
animal.name = 'tom';
// animal.age = '30'
// animal.skills = ['fighting', 'sneaking']

animal = {
  name: 'tommy',
  belt: 'red',
  age: 40,
  // skills: []
};
