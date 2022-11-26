export class Amount {
  protected readonly _value: number;
  
  constructor(value: number) {
    if (value <= 0) {
      throw new Error("1以上の値を指定してください");
    }

    this._value = value;
  }

  get value(): number {
    return Math.floor(this._value);
  };

  add(augend: Amount): Amount {
    return new Amount(this.value + augend.value);
  }
  subtract(subtrahend: Amount): Amount {
    return new Amount(this.value - subtrahend.value);
  }
};
