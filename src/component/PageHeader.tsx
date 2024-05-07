import React from "react";

type TPageHeaderParameter = {
  text: string;
}

export function PageHeader({text}: TPageHeaderParameter) {
  return (
    <h1 style={{textAlign: "center"}}>{text}</h1>
  );
}