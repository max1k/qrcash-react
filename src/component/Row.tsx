import React from "react";

type TColumnContentParameter = {
  children: React.ReactNode;
}

export function Row({children}: TColumnContentParameter) {
  return (
    <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "16pt"}}>
      {children}
    </div>
  );
}