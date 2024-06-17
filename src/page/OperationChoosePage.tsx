import {PageHeader} from "../component/PageHeader";
import {Row} from "../component/base/Row";
import {OperationButton} from "../component/OperationButton";
import {Column} from "../component/base/Column";
import React from "react";
import {useNavigate} from "react-router-dom";
import {pages} from "../index";
import {useDispatch} from "react-redux";
import {setOperationType} from "../state/transactionSlice";

export function OperationChoosePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function startWithdraw() {
    dispatch(setOperationType("cashWithDrawal"));
    navigate(pages.withdraw);
  }

  function startDeposit() {
    dispatch(setOperationType("cashDeposit"));
    navigate(pages.deposit);
  }

  return (
    <Column width="400px" margin="16px">
      <PageHeader text="Снятие и внесение наличных"/>
      <Row>
        <OperationButton
          src="img/withdraw.svg"
          text="Снять наличные"
          onClick={() => startWithdraw()}
        />

        <OperationButton
          src="img/deposit.svg"
          text="Внести наличные"
          onClick={() => startDeposit()}
        />
      </Row>

      <p>Если возникли проблемы со снятием или внесением наличных, позвоните по бесплатному номеру 8 800 123–45–67</p>
    </Column>
  );
}