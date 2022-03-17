import { hasDisplay } from './interface.js';

// no se hien thuc lai (implements) interface hasDisplay
export class Invoice implements hasDisplay {
  constructor(readonly client: string, private details: string, public amount: number) {}

  display() {
    return `${this.client} owes ${this.amount} dollar(s) for ${this.details}`;
  }
}

export class Payment implements hasDisplay {
  constructor(readonly recipient: string, private details: string, public amount: number) {}

  display() {
    return `You owe ${this.recipient} ${this.amount} dollar(s) for ${this.details}`;
  }
}
