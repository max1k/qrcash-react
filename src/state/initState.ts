export type TOperationType = "cashWithDrawal" | "cashDeposit";

export type TOrder = {
  orderId?: string,
  operationType?: TOperationType
}

export const orderInitState: TOrder = {
  orderId: undefined,
  operationType: undefined,
}