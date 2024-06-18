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
  success: boolean
}