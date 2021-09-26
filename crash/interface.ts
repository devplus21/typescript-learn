interface IsPerson {
  name: string;
  age: number;
  speaking(lang: string): void;
  writing(amt: number): number;
}

// hien thuc lai interface
const my: IsPerson = {
  name: 'tom',
  age: 30,
  // text: ten tham so khong can phai giong
  // ham nay tra ve la void
  speaking(text: string): void {
    console.log(text);
  },
  // ham nay tra ve 1 gia tri kieu number
  writing(amount: number): number {
    return amount * 2;
  },
};
console.log(my);

// test
const greetPerson = (myPerson: IsPerson) => {
  console.log(`hello ${myPerson.name}`);
};
greetPerson(my);
