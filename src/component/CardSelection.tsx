import {Row} from "./base/Row";

import {ColoredLine} from "./base/ColoredLine";
import {RotatingLines} from "react-loader-spinner";
import {TCard} from "../state/initState";
import {Centered} from "./base/Centered";

export type TCardSelectionOptions = {
  header: string,
  selectedCard?: TCard,
  allCards?: TCard[]
  onClick: () => void,
}

export function CardSelection({header, selectedCard, onClick, allCards}: TCardSelectionOptions) {
  if (selectedCard == null) {
    return (
      <Centered>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="25"
          visible={true}
        />
      </Centered>
    );
  }

  return (
    <div onClick={onClick}>
      <Row>
        <div style={{lineHeight: "5pt"}}>
          <p style={{color: "gray", fontSize: 12}}>{header}</p>
          <p>{selectedCard.name} <span style={{color: "gray", fontWeight: "bold"}}>*{selectedCard.shortNumber}</span>
          </p>
          <p style={{fontWeight: "bold", color: "#3A83F1"}}>{selectedCard.balance}₽</p>
        </div>
        <img src="/img/card.webp" height={30} style={{marginTop: 16}} alt={selectedCard.systemPlacingName}/>
      </Row>
      <ColoredLine color="#fafafa"/>
    </div>
  );
}