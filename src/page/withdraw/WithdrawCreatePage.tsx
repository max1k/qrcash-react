import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Link, useNavigate} from "react-router-dom";
import {Column} from "../../component/base/Column";
import {PageHeader} from "../../component/PageHeader";
import {operationName, TCard} from "../../state/initState";
import {CardSection} from "../../component/CardSection";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {setCard, setOrderId} from "../../state/transactionSlice";
import {CONTINUE, CREATE_URL, START_URL} from "../../constant/constants";
import {AmountInputSection} from "../../component/AmountInputSection";
import {CallUsSection} from "../../component/base/CallUsSection";
import {ContinueButton} from "../../component/ContinueButton";
import {pages} from "../../index";
import {getHeaders} from "../../util/sessionUtils";
import {TAccountSummary, TOrderResponse} from "../../type/types";


export default function WithdrawCreatePage() {
  const operationType = useSelector((state: RootState) => state.transaction.order.operationType);
  const selectedCard = useSelector((state: RootState) => state.transaction.card);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [amount, setAmount] = useState<number>(0);
  const [cards, setCards] = useState<TCard[]>([]);
  const [error, setError] = useState("");
  useEffect(
    () => {
      axios.get<TAccountSummary>(START_URL, {headers: getHeaders()})
        .then(response => response.data.accounts)
        .then(accounts => accounts
          .flatMap(account => account.cards)
          .sort((first, second) => first.publicId > second.publicId ? 1 : -1)
        )
        .then(cards => {
          setCards(cards);
          dispatch(setCard(cards[0]));
        })
        .catch(error => {
            if (error instanceof Error) {
              setError(error.message)
            } else {
              setError(String(error))
            }
          }
        );
    },
    [dispatch]
  );

  async function createOrder() {
    try {
      const response = await axios.post<TOrderResponse>(
        CREATE_URL,
        {
          "ATMNUM": "387014",
          "operationType": operationType,
          "amount": amount,
          "publicId": selectedCard?.publicId,
          "commission": 0.00
        },
        {
          headers: getHeaders()
        }
      );
      if (response.status === 200 && response.data.success) {
        dispatch(setOrderId(response.data.orderId));
        navigate(pages.atmCode);
      } else {
        setError("Error while creating order");
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

  const buttonEnabled: boolean = amount > 0 &&
    selectedCard !== undefined &&
    selectedCard.balance !== undefined &&
    selectedCard.balance >= amount;

  if (error) {
    console.error(error);
    navigate(pages.error);
  }

  return (
    <Column width = "400px" margin = "16px">
      <Link to="/"><img src="/img/arrow-back-svgrepo-com.svg" alt="Назад" width="30"/></Link>
      <PageHeader text={operationName[operationType ?? ""]} />
      <CardSection header="Карта списания" selectedCard={selectedCard} allCards={cards} onClick={() => null}/>
      <AmountInputSection
        amount={amount}
        addAmount={amount => setAmount(oldAmount => oldAmount + amount)}
        setAmount={setAmount}
      />
      <CallUsSection />
      <ContinueButton
        text={CONTINUE}
        enabled={buttonEnabled}
        onClick={createOrder}
      />
    </Column>
  );
}