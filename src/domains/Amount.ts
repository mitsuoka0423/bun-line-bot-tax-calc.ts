export class Amount {
  protected _amount: number;
  
  constructor(amount: number) {
    if (amount <= 0) {
      throw new Error("1以上の値を指定してください");
    }

    this._amount = amount;
  }

  amount(): number {
    return Math.floor(this._amount);
  };

  add(augend: Amount): Amount {
    return new Amount(this.amount() + augend.amount());
  }
  subtract(subtrahend: Amount): Amount {
    return new Amount(this.amount() - subtrahend.amount());
  }
};
