import React from "react";
import "./base.css";

type TColumnContentParameter = {
  children: React.ReactNode,
  onClick?: () => void
}

export function Row({children, onClick}: TColumnContentParameter) {
  return (
    <div className="base-row" onClick={onClick}>
      {children}
    </div>
  );
}