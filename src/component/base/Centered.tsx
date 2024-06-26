import React from "react";
import "./base.css"

export type TCenteredParameter = {
  children: React.ReactNode
}

export function Centered({children}: TCenteredParameter){
  return (
    <div className="base-center-wrapper">
      <div className="base-center-inner">
        {children}
      </div>
    </div>
  );
}