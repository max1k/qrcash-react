import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Link} from "react-router-dom";
import {Column} from "../../component/Column";
import {PageHeader} from "../../component/PageHeader";

export default function WithdrawCreatePage() {
  const operationType = useSelector((state: RootState) => state.order.operationType);

  return (
    <Column>
      <Link to="/">Назад</Link>
      <PageHeader text="Снятие наличных" />
    </Column>
  );
}