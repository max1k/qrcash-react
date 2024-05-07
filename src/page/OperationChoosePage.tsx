import {PageHeader} from "../component/PageHeader";
import {Row} from "../component/Row";
import {OperationButton} from "../component/OperationButton";
import {Column} from "../component/Column";
import React from "react";
import {useNavigate} from "react-router-dom";
import {pages} from "../index";

export function OperationChoosePage() {
  const navigate = useNavigate();

  return (
    <Column>
      <PageHeader text="Снятие и внесение наличных"/>
      <Row>
        <OperationButton
          src="img/withdraw.svg"
          text="Снять наличные"
          onClick={() => navigate(pages.withdraw)}
        />

        <OperationButton
          src="img/deposit.svg"
          text="Внести наличные"
          onClick={() => navigate(pages.deposit)}
        />
      </Row>

      <p>Если возникли проблемы со снятием или внесением наличных, позвоните по бесплатному номеру 8 800 123–45–67</p>
    </Column>
  );
}