import {Column} from "../component/base/Column";
import React from "react";
import {useNavigate} from "react-router-dom";
import {ContinueButton} from "../component/ContinueButton";
import {pages} from "../index";
import {Centered} from "../component/base/Centered";
import "./ErrorPage.css"
import {ACK, SOMETHING_WENT_WRONG, WORKING_ON_IT} from "../common/constants";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Column width="400px" margin="16px">
      <Centered>
        <img src="/img/error.svg" className="error_img" alt="error" width="80px"/>
        <h1>{SOMETHING_WENT_WRONG}</h1>
        <p className="error_subheader">{WORKING_ON_IT}</p>
      </Centered>
      <ContinueButton
        text={ACK}
        enabled={true}
        onClick={() => navigate(pages.operationChoose)}
      />
    </Column>
  );
}