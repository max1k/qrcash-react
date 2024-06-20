import {TCard} from "../state/initState";

export type TAccount = {
  accountNumber: string,
  currency: string,
  cards: TCard[]
}

export type TLimit = {
  availableDayLimit: number,
  dayLimit: number,
}

export type TLimits = {
  deposit: TLimit,
  withdrawal: TLimit,
}

export type TAccountSummary = {
  accounts: TAccount[],
  limit: TLimits,
  success: boolean
}

export type TOrderResponse = {
  orderId: string,
  commission: number,
  success: boolean
}

export type TCodeCheckResponse = {
  success: boolean,
  messageType?: "INVALID_ATM_CODE" | "INVALID_OTP_CODE" | "SERVER_ERROR",
  messageCode?: number,
  attemptsRemain?: number
}

export type TOperationAmounts = {
  amount: number,
  commission: number
}

export type TWithdrawConfirmResponse = {
  success: boolean,
  messageType?: "SERVER_ERROR",
  messageCode?: number,
  needOtp?: boolean,
  countNum?: number
}