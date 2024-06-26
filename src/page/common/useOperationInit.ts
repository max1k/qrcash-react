import {useEffect, useState} from "react";
import {TCard} from "../../state/initState";
import axios from "axios";
import {TAccountSummary, TOrderResponse} from "../../type/types";
import {CREATE_URL, START_URL} from "../../common/constants";
import {getHeaders} from "../../util/sessionUtils";
import {setAmounts, setCard, setOrderId} from "../../state/transactionSlice";
import {pages} from "../../index";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useNavigate} from "react-router-dom";

export function useOperationInit() {
  const [cards, setCards] = useState<TCard[]>([]);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const operationType = useSelector((state: RootState) => state.transaction.order.operationType);
  const selectedCard = useSelector((state: RootState) => state.transaction.card);
  const atmId = useSelector((state: RootState) => state.transaction.atmId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          "ATMNUM": atmId,
          "operationType": operationType,
          "publicId": selectedCard?.publicId,
          "amount": isWithdrawal() ? amount : null,
          "commission": isWithdrawal() ? 0.00 : null,
        },
        {
          headers: getHeaders()
        }
      );
      if (response.status === 200 && response.data.success) {
        dispatch(setOrderId(response.data.orderId));
        if (isWithdrawal()) {
          dispatch(setAmounts({amount: amount, commission: response.data.commission ?? 0}));
          navigate(pages.atmCode);
        } else {
          navigate(pages.complete);
        }
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

  function isWithdrawal() {
    return operationType === "cashWithDrawal";
  }

  const buttonEnabled: boolean = amount > 0 &&
    selectedCard !== undefined &&
    selectedCard.balance !== undefined &&
    selectedCard.balance >= amount;

  if (error || operationType === undefined) {
    console.error(error);
    navigate(pages.error);
  }

  return {cards, buttonEnabled, amount, setAmount, createOrder, error };
}