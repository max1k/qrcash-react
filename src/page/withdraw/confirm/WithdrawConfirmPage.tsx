import {Column} from "../../../component/base/Column";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {CardSection} from "../../../component/CardSection";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {OperationProperty} from "../../../component/OperationProperty";
import {ContinueButton} from "../../../component/ContinueButton";
import {ATM_ID, COMMISSION, CONFIRM, CONFIRM_URL, WITHDRAW_AMOUNT, WITHDRAW_CARD} from "../../../common/constants";
import axios from "axios";
import {TWithdrawConfirmResponse} from "../../../type/types";
import {getHeaders} from "../../../util/sessionUtils";
import {pages} from "../../../index";
import {setOtpLength} from "../../../state/transactionSlice";

export function WithdrawConfirmPage() {
  const transaction = useSelector((state: RootState) => state.transaction);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  async function confirmOperation() {
    try {
      const response = await axios.post<TWithdrawConfirmResponse>(
        CONFIRM_URL,
        {
          "orderId": transaction.order.orderId,
        },
        {
          headers: getHeaders()
        }
      );

      if (response.status !== 200) {
        setError("Error while operation confirmation");
        return;
      }

      const data = response.data;
      if (data.success) {
        dispatch(setOtpLength(data.countNum ?? 0));
        navigate(data.needOtp ? pages.otpCode : pages.complete);
      } else {
        setError("Error while operation confirmation");
      }

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(String(error))
      }
    }
  }

if (error) {
  navigate(pages.error);
}

  return (
    <Column width="400px" margin="16px">
      <Link to="/"><img src="/img/close.svg" alt="Назад" width="30"/></Link>
      <h1>Подтвердите снятие наличных</h1>
      <CardSection header={WITHDRAW_CARD} selectedCard={transaction.card} setSelectedCard={() => null} />
      <OperationProperty header={WITHDRAW_AMOUNT} value={transaction.order.amount ?? ""} />
      <OperationProperty header={COMMISSION} value={transaction.order.commission ?? ""} />
      <OperationProperty header={ATM_ID} value={transaction.atmId ?? ""} />

      <ContinueButton text={CONFIRM} enabled={true} onClick={confirmOperation} />
    </Column>
  );
}