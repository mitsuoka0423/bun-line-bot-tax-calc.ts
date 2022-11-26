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
  handlers --> line-bot-sdk
  services --> domains
  services --> api
```

```mermaid
graph LR
  報酬額 --> 売上内税額
  報酬額 --> 源泉徴収税額
  売上額外税 --> 売上内税額
  売上額外税 --> 消費税額
  消費税額 --> 売上内税額
  源泉徴収税額 --> 売上額外税
```

```mermaid
classDiagram
  Amount <-- SalesAmountWithSalesTax
  Amount <-- SalesAmountWithoutSalesTax
  Amount <-- SalesTaxAmount
  Amount <-- WithholdingIncomeTaxAmount

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
      salesAmount: SalesAmount, 
      withholdingIncomeTaxAmount: WithholdingIncomeTaxAmount
    )
    public amount(): number
  }
  class SalesAmountWithSalesTax {
    public constructor(salesAmountWithSalesTax: number)
    public amount(): number
  }
  class SalesAmountWithoutSalesTax {
    public constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax, salesTaxAmount: SalesTaxAmount)
    public amount(): number
  }
  class SalesTaxAmount {
    public constructor(salesAmountWithSalesTax: SalesAmountWithSalesTax)
    public amount(): number
  }
  class WithholdingIncomeTaxAmount {
    public constructor(salesAmount: SalesAmount)
    public amount(): number
  }
```