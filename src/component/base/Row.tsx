import React from "react";

type TColumnContentParameter = {
  children: React.ReactNode,
  onClick?: () => void
}

export function Row({children, onClick}: TColumnContentParameter) {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}} onClick={onClick}>
      {children}
    </div>
  );
}