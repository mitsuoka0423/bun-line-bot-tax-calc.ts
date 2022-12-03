# bun-line-bot-tax-calc.ts

## Requirement

https://bun.sh/

## Install

```bash
bun install
```

## Run

```bash
bun start
```

## Directory Overview

```mermaid
flowchart LR
  index --> routes
  routes --> handlers
  handlers --> services
  handlers --> api
  services --> domains
  services --> api
```

```mermaid
graph
  報酬額 --> 売上内税額
  報酬額 --> 源泉徴収税額
  売上額外税 --> 売上内税額
  売上額外税 --> 消費税額
  消費税額 --> 売上内税額
  源泉徴収税額 --> 売上額外税
```

```mermaid
classDiagram
  Amount <|.. SalesAmountWithSalesTax
  Amount <|.. SalesAmountWithoutSalesTax
  Amount <|.. SalesTaxAmount
  Amount <|.. WithholdingIncomeTaxAmount
  Amount <|.. PaymentAmount

  PaymentAmount --> SalesAmountWithSalesTax
  PaymentAmount --> WithholdingIncomeTaxAmount
  WithholdingIncomeTaxAmount --> SalesAmountWithoutSalesTax
  SalesAmountWithoutSalesTax --> SalesAmountWithSalesTax
  SalesAmountWithoutSalesTax --> SalesTaxAmount
  SalesTaxAmount --> SalesAmountWithSalesTax

  class Amount {
    public amount(): number
    public add(augend: Amount): Amount
    subtract(subtrahend: Amount): Amount
    multiply(multiplicand: Amount): Amount
    divide(divisor: Amount): Amount
  }
  class PaymentAmount {
    public constructor(
      salesAmountWithSalesTax: SalesAmountWithSalesTax, 
      withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount
    )
  }
  class SalesAmountWithSalesTax {
    public constructor(salesAmountWithSalesTax: number)
  }
  class SalesAmountWithoutSalesTax {
    public constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax, salesTaxAmount: SalesTaxAmount)
  }
  class SalesTaxAmount {
    public constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax)
  }
  class WithholdingIncomeTaxAmount {
    public constructor(salesAmount: SalesAmount)
  }
```