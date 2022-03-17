import { Invoice, Payment } from './class.js';
import { hasDisplay } from './interface.js';

const displayOne: hasDisplay = new Invoice('Tom', 'web work', 200);
const displayTwo: hasDisplay = new Payment('My', 'road work', 400);

const docs: hasDisplay[] = [];
docs.push(displayOne);
docs.push(displayTwo);
console.log(docs);

