export class Amount {
  protected _amount: number;
  
  constructor(amount: number) {
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
  multiply(multiplicand: Amount): Amount {
    return new Amount(this.amount() * multiplicand.amount());
  }
  divide(divisor: Amount): Amount {
    return new Amount(this.amount() / divisor.amount());
  }
};
