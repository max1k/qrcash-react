import {Column} from "../../../component/base/Column";
import {Link} from "react-router-dom";
import React from "react";

export function WithdrawConfirmPage() {
  return (
    <Column width="400px" margin="16px">
      <Link to="/"><img src="/img/close.svg" alt="Назад" width="30"/></Link>
      <h1>Подтвердите операцию</h1>
    </Column>
  );
}