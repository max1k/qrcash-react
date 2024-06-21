import {PageHeader} from "../component/PageHeader";
import {Row} from "../component/base/Row";
import {OperationButton} from "../component/OperationButton";
import {Column} from "../component/base/Column";
import React from "react";
import {useNavigate} from "react-router-dom";
import {pages} from "../index";
import {useDispatch} from "react-redux";
import {setAtmId, setOperationType} from "../state/transactionSlice";
import {DEPOSIT_AND_WITHDRAWAL, MAKE_DEPOSIT, MAKE_WITHDRAW, OPERATION_TROUBLES} from "../common/constants";

export function OperationChoosePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  dispatch(setAtmId("387014"));

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
      <PageHeader text={DEPOSIT_AND_WITHDRAWAL}/>
      <Row>
        <OperationButton
          src="img/withdraw.svg"
          text={MAKE_WITHDRAW}
          onClick={() => startWithdraw()}
        />

        <OperationButton
          src="img/deposit.svg"
          text={MAKE_DEPOSIT}
          onClick={() => startDeposit()}
        />
      </Row>

      <p>{OPERATION_TROUBLES}</p>
    </Column>
  );
}