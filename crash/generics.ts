/*=========================================    GENERICS    ============================================*/
// GENERICS: gan giong nhu tham so. khac: chup anh lai nhung gi chung ta truyen vao
type arr = Array<string>;
type numArray = Array<number>;
type strArray = Array<string>;

// === arr: number[]
// tra ve phan tu cuoi cung cua mang
const last = (arr: Array<number>) => arr[arr.length - 1];
const l = last([1, 2, 3]);
// err
const l2 = last(['a', 'b', 'c']);

// ko biet truoc kieu du lieu
// <T>: chup anh lai nhung gi chung ta truyen vao
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]); //number
const l4 = lastT(['a', 'b', 'c']); // string
// ban co the chi dinh truoc kieu du lieu la gi?
const l5 = lastT<string>(['d', 'e', 'f']);

// ban co the gan truoc kieu du lieu cho mang T
const makeArr = (x: number) => [x];
const m1 = makeArr(5);
const m2 = makeArr('a'); // fail

// ko biet truoc kieu du lieu T
// <T>: chup anh lai nhung gi chung ta truyen vao
const makeArrT = <T>(x: T): [T] => [x];
const m3 = makeArrT('b');

// truyen vao hai generics
const makeArrTY = <T, Y>(x: T, y: Y) => [x, y];
const m4 = makeArrTY(5, 6);
const m5 = makeArrTY('a', 'b');
const m6 = makeArrTY(5, 'b');

// chuyen sang Tuple
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple('a', 5);
const m8 = makeTuple('a', 'b');
// dinh nghia truoc kieu du lieu
const m9 = makeTuple<number, string>(5, 'b');
const m10 = makeTuple<string | null, number>(null, 5);
// error vi ham nay yeu cau 2 cai generic
const m11 = makeTuple<string | null>('a', 6);

// generic mac dinh
const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m12 = makeTupleWithDefault<string | null>('a', 6); // error, expect 2 arguments
