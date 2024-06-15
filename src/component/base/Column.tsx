import React from "react";

type TColumnContentParameter = {
  children: React.ReactNode,
  width?: number,
  margin?: number
}

export function Column({children}: TColumnContentParameter) {
  return (
    <div style={{width: "400px", margin: "16px"}}>
      {children}
    </div>
  );
}