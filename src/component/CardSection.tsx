import {Row} from "./base/Row";

import {ColoredLine} from "./base/ColoredLine";
import {RotatingLines} from "react-loader-spinner";
import {TCard} from "../state/initState";
import {Centered} from "./base/Centered";
import {useState} from "react";
import {setCard} from "../state/transactionSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

export type TCardSelectionOptions = {
  header: string,
  canSelect: boolean
  allCards?: TCard[]
}

export function CardSection({header, allCards, canSelect = false}: TCardSelectionOptions) {
  const [showAll, setShowAll] = useState(false);
  const selectedCard = useSelector((state: RootState) => state.transaction.card);

  const dispatch = useDispatch();

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

  function Card(card: TCard, isTop: boolean, onClick: () => void) {
    return <>
      <Row onClick={onClick}>
        <div style={{lineHeight: "5pt"}}>
          <p style={{color: "gray", fontSize: 12}}>{header}</p>
          <p>{card.name} <span style={{color: "gray", fontWeight: "bold"}}>*{card.shortNumber}</span>
          </p>
          <p style={{fontWeight: "bold", color: "#3A83F1"}}>{card.balance}₽</p>
        </div>
        <div>
          <img src="/img/card.webp" height={30} style={{marginTop: "1rem", marginRight: "1rem"}} alt={card.systemPlacingName}/>
          <img
            src={isTop ? showAll ? "/img/up-chevron.svg" : "/img/down-chevron.svg" : "/img/right-chevron.svg"}
            height={15}
            style={{marginTop: "0.2rem"}}
            alt="show all"
          />
        </div>
      </Row>
      <ColoredLine color="#fafafa"/>
    </>;
  }

  function onSelectCard(card: TCard) {
    dispatch(setCard(card));
    setShowAll(false);
  }

  function handleShowAll() {
    if (canSelect) {
      setShowAll(prevState => !prevState);
    }
  }

  return (
    <div style={{marginBottom: "16pt}", cursor: "pointer"}}>
      {Card(selectedCard, true, handleShowAll)}
      {canSelect && showAll && allCards?.map(card => Card(card, false,() => onSelectCard(card)))}
    </div>
  );
}