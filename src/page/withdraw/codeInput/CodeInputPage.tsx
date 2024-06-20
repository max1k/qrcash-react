import {Column} from "../../../component/base/Column";
import {ATM_CHECK_URL, INPUT_ATM_CODE, INPUT_OTP_CODE, OTP_CHECK_URL} from "../../../common/constants";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import {TCodeCheckResponse} from "../../../type/types";
import {getHeaders} from "../../../util/sessionUtils";
import {pages} from "../../../index";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import "./CodeInputPage.css";

export type TCodeInputProperties = {
  type: "ATM_CODE" | "OTP_CODE"
}

const INVALID_CODES = new Set(["INVALID_ATM_CODE", "INVALID_OTP_CODE"]);

export function CodeInputPage({type}: TCodeInputProperties) {
  const orderId: string = useSelector((state: RootState) => state.transaction.order.orderId) ?? "";
  const otpLength: number = useSelector((state: RootState) => state.transaction.otpLength);
  const navigate = useNavigate();

  const [code, setCode] = React.useState<string>("");
  const [remainingAttempts, setRemainingAttempts] = React.useState<number>(-1);
  const [error, setError] = useState("");

  const codeLength = isAtmCodePage() ? 4 : otpLength;


  function isAtmCodePage() {
    return type === "ATM_CODE";
  }

  async function onValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    let stringValue = event.target.value;

    let newValue = Number(stringValue);
    if (!isNaN(newValue)) {
      setCode(stringValue);
    }

    if (stringValue.length >= codeLength) {
      await checkCode(stringValue)
    }
  }

  async function checkCode(code: string) {
    const codeField = isAtmCodePage() ? "code": "otpCode";
    try {
      const response = await axios.post<TCodeCheckResponse>(
        isAtmCodePage() ? ATM_CHECK_URL : OTP_CHECK_URL,
        {
          "orderId": orderId,
          [codeField]: code
        },
        {
          headers: getHeaders()
        }
      );

      if (response.status !== 200) {
        setError("Error while code checking");
        return;
      }

      if (response.data.success) {
        navigate(isAtmCodePage() ? pages.confirm : pages.complete);
        return;
      } else if (response.data.messageType && INVALID_CODES.has(response.data.messageType)) {
        setRemainingAttempts(response.data.attemptsRemain ?? 0);
        setCode("");
      } else {
        setError("Error while code checking");
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
      <h1>{ isAtmCodePage() ? INPUT_ATM_CODE : INPUT_OTP_CODE }</h1>
      <input type='text' autoFocus={true} placeholder='Код' className="full_width_input" value={code} onChange={onValueChange}/>
      {remainingAttempts > 0 && <p className="small_red">Неправильный код. Осталось попыток: {remainingAttempts}</p>}
    </Column>
  );
}