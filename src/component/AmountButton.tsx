import React from "react";
import "./AmountButton.css"

type TAmountButtonProperties = {
  value: number,
  addAmount: (amount: number) => void
}

export function AmountButton({value, addAmount}: TAmountButtonProperties) {
  return (
    <button className="amount-button" onClick={() => addAmount(value)}>
      {value}₽
    </button>
  );
}