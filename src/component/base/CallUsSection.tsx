import {useSelector} from "react-redux";
import {RootState} from "../../store";

export function CallUsSection() {
  const operationType = useSelector((state: RootState) => state.transaction.order.operationType);
  const operationRepresentative: string = operationType === "cashWithDrawal" ? "со снятием" : "с внесением";

  return (
    <p>Если возникли проблемы {operationRepresentative} наличных, позвоните по бесплатному номеру 8 800 123–45–67</p>
  );
}