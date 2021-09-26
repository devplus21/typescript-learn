// ================================================ GENERICS IN INTERFACE =================================================== //
interface Tab<T> {
  id: number;
  content: string;
  data: T;
}

// example 1
const tabOne: Tab<string> = {
  id: 2,
  content: 'data',
  data: 'momo',
};

const tabTwo: Tab<object> = {
  id: 2,
  content: 'data',
  data: { name: 'tom' },
};

const tabThree: Tab<number[]> = {
  id: 2,
  content: 'data',
  data: [1, 2, 3],
};

// example 2
type stringTab = Tab<string[]>;
const stringTab2: stringTab = {
  id: 2,
  content: 'ok',
  data: ['tom', 'my', 'teo'],
};
