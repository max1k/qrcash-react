export type TOperationType = "cashWithDrawal" | "cashDeposit";
export const operationName: {[key: string]: string} = {
  "cashWithDrawal": "Снятие наличных",
  "cashDeposit": "Внесение наличных"
}

export type TOrder = {
  orderId?: string,
  operationType?: TOperationType
}

export type TCard = {
  publicId: string,
  name: string,
  maskedNumber: string,
  shortNumber: string,
  balance: number,
  paymentSystem: string,
  systemPlacingName: string,
  cardType: "DEBET_CARD" | "CREDIT_CARD"
}

export type TTransaction = {
  id?: string,
  order: TOrder,
  card?: TCard
}

export const transactionInitState: TTransaction = {
  id: undefined,
  order: {
    orderId: undefined,
    operationType: undefined,
  },
  card: undefined,
}