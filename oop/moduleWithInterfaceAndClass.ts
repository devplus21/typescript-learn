import { Invoice, Payment } from './classImplementsInterface.js';
import { hasDisplay } from './interfaceWithClass.js';

const displayOne: hasDisplay = new Invoice('Tom', 'web work', 200);
const displayTwo: hasDisplay = new Payment('My', 'road work', 400);

const docs: hasDisplay[] = [];
docs.push(displayOne);
docs.push(displayTwo);
console.log(docs);
