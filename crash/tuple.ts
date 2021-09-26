/*================================  TUPLE: la 1 mang co thu tu  ==================================*/
// normal array
let arr = ['tom', 25, true];
arr[0] = false;
arr[1] = 'my';
arr = [30, false, 'my'];

// tuple
let tup: [string, number, boolean] = ['tom', 25, true]; // type of array element is fixed
// tup[0] = false // can't do that

let student: [string, number];
student = ['crush', 124];
