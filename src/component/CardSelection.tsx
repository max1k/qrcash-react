import {Row} from "./Row";

import {ColoredLine} from "./ColoredLine";
import {RotatingLines} from "react-loader-spinner";
import {TCard} from "../state/initState";

export type TCardSelectionOptions = {
  header: string,
  card: TCard | null,
  onClick: () => void
}

export function CardSelection({header, card, onClick}: TCardSelectionOptions) {
  if (!card) {
    return (
      <Row>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="25"
        visible={true}
      />
      </Row>
    );
  }

  return (
    <div onClick={onClick}>
      <Row>
        <div style={{lineHeight: "5pt"}} >
          <p style={{color: "gray", fontSize: 12}}>{header}</p>
          <p>{card.name} <span style={{color: "gray", fontWeight: "bold"}} >*{card.shortNumber}</span></p>
          <p style={{fontWeight: "bold", color: "#3A83F1"}}>{card.balance}₽</p>
        </div>
        <img src="/img/card.webp" height={30} style={{marginTop: 16}} alt={card.systemPlacingName}/>
      </Row>
      <ColoredLine color="#fafafa" />
    </div>
  );
}