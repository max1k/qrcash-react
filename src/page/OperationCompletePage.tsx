import {useNavigate} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {ATM_ID, COMMISSION, DEPOSIT, DONE, WITHDRAW_AMOUNT, WITHDRAW_CARD, WITHDRAWAL} from "../common/constants";
import {pages} from "../index";
import {OperationProperty} from "../component/OperationProperty";
import {CardSection} from "../component/CardSection";
import {ContinueButton} from "../component/ContinueButton";
import {Column} from "../component/base/Column";
import {Centered} from "../component/base/Centered";


export function OperationCompletePage() {
  const transaction = useSelector((state: RootState) => state.transaction);
  const navigate = useNavigate();

  const operationTypeDescription = transaction.order.operationType === "cashWithDrawal" ? WITHDRAWAL : DEPOSIT;

  return (
    <Column width="400px" margin="16px">
      <Centered>
        <img src="/img/done.svg" height={70} width={70} style={{marginTop: 16}} alt={operationTypeDescription}/>
      </Centered>
      <h1>{operationTypeDescription}</h1>
      <CardSection header={WITHDRAW_CARD} selectedCard={transaction.card} onClick={() => null}/>
      <OperationProperty header={WITHDRAW_AMOUNT} value={transaction.order.amount ?? ""}/>
      <OperationProperty header={COMMISSION} value={transaction.order.commission ?? ""}/>
      <OperationProperty header={ATM_ID} value={transaction.atmId ?? ""}/>

      <ContinueButton text={DONE} enabled={true} onClick={() => navigate(pages.operationChoose)}/>
    </Column>
  );
}