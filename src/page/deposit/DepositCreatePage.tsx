import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Link, useNavigate} from "react-router-dom";
import {Column} from "../../component/base/Column";
import {PageHeader} from "../../component/PageHeader";
import {operationName} from "../../state/initState";
import {CardSection} from "../../component/CardSection";
import React from "react";
import {setCard} from "../../state/transactionSlice";
import {CONTINUE} from "../../common/constants";
import {CallUsSection} from "../../component/base/CallUsSection";
import {ContinueButton} from "../../component/ContinueButton";
import {pages} from "../../index";
import {useOperationInit} from "../common/useOperationInit";


export default function DepositCreatePage() {
  const {cards, error, createOrder} = useOperationInit();
  const operationType = useSelector((state: RootState) => state.transaction.order.operationType);
  const selectedCard = useSelector((state: RootState) => state.transaction.card);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (error) {
    navigate(pages.error);
  }

  return (
    <Column width = "400px" margin = "16px">
      <Link to="/"><img src="/img/arrow-back.svg" alt="Назад" width="30"/></Link>
      <PageHeader text={operationName[operationType ?? ""]} />
      <CardSection
        header="Карта списания"
        selectedCard={selectedCard}
        allCards={cards}
        setSelectedCard={card => dispatch(setCard(card))}
      />
      <CallUsSection />
      <ContinueButton
        text={CONTINUE}
        enabled={true}
        onClick={createOrder}
      />
    </Column>
  );
}