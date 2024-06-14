import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Link} from "react-router-dom";
import {Column} from "../../component/Column";
import {PageHeader} from "../../component/PageHeader";
import {operationName, TCard} from "../../state/initState";
import {CardSelection} from "../../component/CardSelection";
import {useState} from "react";

const cardMock: TCard = {
  name: "Цифровая карта",
  balance: 55.55,
  cardType: "DEBET_CARD",
  maskedNumber: "123456****7890",
  paymentSystem: "",
  publicId: "A1B2C3",
  shortNumber: "4242",
  systemPlacingName: ""
}

export default function WithdrawCreatePage() {
  const operationType = useSelector((state: RootState) => state.order.operationType);
  const [card, setCard] = useState<TCard | null>(cardMock);

  return (
    <Column>
      <Link to="/"><img src="/img/arrow-back-svgrepo-com.svg" alt="Назад" width="30"/></Link>
      <PageHeader text={operationName[operationType ?? ""]} />
      <CardSelection header="Карта списания" card={card} onClick={() => null}/>
    </Column>
  );
}