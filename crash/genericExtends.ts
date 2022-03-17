// ================================================   EXTENDS   =============================================== //
// example 1
// in ra ten day du(ca ho va ten)
const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameConstraint1 = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const n1 = makeFullNameConstraint1({ firstName: 'Henry', lastName: 'Nguyen' });
// error
const n2 = makeFullNameConstraint1({
  firstName: 'Henry',
  lastName: 'Nguyen',
  age: 30,
});

// example 2
const makeFullNameConstraint2 = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const n3 = makeFullNameConstraint2({
  firstName: 'Henry',
  lastName: 'Nguyen',
  // truong hop nay co the them thuoc tinh
  age: 30,
});

// example 3
// extends
const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100); // ham lay ra so bat ki
  return {
    ...employee,
    uid,
  };
};
const empOne = addNewEmployee({ name: 'Tom', age: 40 });
console.log(empOne);
// error: vi no khong biet truoc
console.log(empOne.name);

// generic extends
const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
// tu chup anh lai nhung gi chung ta truyen vao
const empTwo = addNewEmployeeT({ name: 'Tom', age: 40, gender: true });
console.log(empTwo); // all goodbye
console.log(empTwo.name); // now it's good
// co the khai bao 1 object bat ki
const empThree = addNewEmployeeT({ lName: 'tom', yearBirth: 20 });
const empFour = addNewEmployeeT({ nam: 'tom' });

// khong can phai dua vao chu object, chi can { name: string }
const addNewEmployeeT2 = <T extends { name: string }>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const empfile = addNewEmployeeT2({ name: 'tom', gender: false });
// error: vi thieu kieu du lieu ban dau khai bao { name: string }
const empfix = addNewEmployeeT2({ gender: false });
