import React from "react";
import "./ContinueButton.css"

export type TContinueButtonProps = {
  text: string,
  enabled: boolean,
  onClick: () => void
}

export function ContinueButton({text, enabled, onClick}: TContinueButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className="continue-button"
    >
      {text}
    </button>
  );
}