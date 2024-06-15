import React from "react";

export type TCenteredParameter = {
  children: React.ReactNode
}

export function Centered({children}: TCenteredParameter){
  return (
    <div style={{textAlign: "center"}}>
      <div style={{display: "inline-block"}}>
        {children}
      </div>
    </div>
  );
}