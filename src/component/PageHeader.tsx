import React from "react";

type TPageHeaderParameter = {
  text: string;
}

export function PageHeader({text}: TPageHeaderParameter) {
  return (
    <h1 style={{textAlign: "center", fontSize: "18pt", paddingTop: "16pt", paddingBottom: "16pt"}}>{text}</h1>
  );
}