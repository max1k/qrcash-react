import {Column} from "./base/Column";
import "./AmountInputSection.css"
import {AmountButton} from "./AmountButton";
import React from "react";

export type TAmountInputSectionProperties = {
  amount: number,
  addAmount: (amount: number) => void
  setAmount: (amount: number) => void
}

export function AmountInputSection({amount, addAmount, setAmount}: TAmountInputSectionProperties) {

  function mapToAmountButton(amount: number, index: number) {
    return <AmountButton key={index} value={amount} addAmount={addAmount} />;
  }

  function onValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    let stringValue = event.target.value;
    if (stringValue === "") {
      setAmount(0);
    }

    let newValue = Number(stringValue);
    if (!isNaN(newValue) && newValue > 0) {
      setAmount(newValue);
    }
  }

  return (
    <Column>
      <input type='text' placeholder='Сумма' className="full_width_input" value={amount} onChange={onValueChange}/>
      <div style={{marginTop: "0.3rem", marginBottom: "5rem"}}>
        { [100, 500, 1000, 5000].map(mapToAmountButton) }
      </div>
    </Column>
  );
}