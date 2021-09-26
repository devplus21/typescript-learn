/*====================================    CLASS     ====================================*/
// public: vo tu
// private: dong goi
// readonly: truy cap duoc tu ben ngoai nhung khong the thay doi gia tri
export class Invoice {
  // ham khoi tao thong thuong
  // public amount: number
  // private details: string
  // readonly client: string

  // constructor(c: string, d: string, a: number) {
  //   this.client = c
  //   this.details = d
  //   this.amount = a
  // }

  // ham khoi tao nhanh
  constructor(
    public amount: number,
    private details: string,
    readonly client: string
  ) {}

  format() {
    return `${this.client} owes ${this.amount} dollar(s) for ${this.details}`;
  }
}
