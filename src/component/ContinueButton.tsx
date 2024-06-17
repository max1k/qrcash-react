import React from "react";
import "./ContinueButton.css"

export type TContinueButtonProps = {
  enabled: boolean
}

export function ContinueButton({enabled}: TContinueButtonProps) {
  return (
    <button disabled={!enabled} className="continue-button">Продолжить</button>
  );
}