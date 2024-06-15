import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Link} from "react-router-dom";
import {Column} from "../../component/base/Column";
import {PageHeader} from "../../component/PageHeader";
import {operationName, TCard} from "../../state/initState";
import {CardSelection} from "../../component/CardSelection";
import {useEffect, useState} from "react";
import axios from "axios";
import {setCard} from "../../state/transactionSlice";
import {START_URL} from "../../constant/constants";
import {getHeaders} from "../../util/sessionUtils";
import ErrorRoutingPage from "../ErrorRoutingPage";

type TAccount = {
  accountNumber: string,
  currency: string,
  cards: TCard[]
}

type TLimit = {
  availableDayLimit: number,
  dayLimit: number,
}

type TLimits = {
  deposit: TLimit,
  withdrawal: TLimit,
}

type TAccountSummary = {
  accounts: TAccount[],
  limit: TLimits,
  success: boolean
}

export default function WithdrawCreatePage() {
  const operationType = useSelector((state: RootState) => state.transaction.order.operationType);
  const selectedCard = useSelector((state: RootState) => state.transaction.card);
  const dispatch = useDispatch();

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
    [dispatch]);

  if (error) {
    <ErrorRoutingPage/>
  }

  return (
    <Column>
      <Link to="/"><img src="/img/arrow-back-svgrepo-com.svg" alt="Назад" width="30"/></Link>
      <PageHeader text={operationName[operationType ?? ""]} />
      <CardSelection header="Карта списания" selectedCard={selectedCard} allCards={cards} onClick={() => null}/>
    </Column>
  );
}