import React from "react";

type TColumnContentParameter = {
  children: React.ReactNode,
  width?: string,
  margin?: string
}

export function Column({width, margin, children}: TColumnContentParameter) {
  return (
    <div style={{width: width, margin: margin}}>
      {children}
    </div>
  );
}