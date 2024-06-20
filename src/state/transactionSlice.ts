import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {transactionInitState, TCard, TOperationType, TTransaction} from "./initState";
import {TOperationAmounts} from "../type/types";

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: transactionInitState,
  reducers: {
    setOrderId: (state: TTransaction, action: PayloadAction<string>) => {
      state.order.orderId = action.payload;
    },

    setOperationType: (state: TTransaction, action: PayloadAction<TOperationType>) => {
      state.order.operationType = action.payload;
    },

    setCard: (state: TTransaction, action: PayloadAction<TCard>) => {
      state.card = action.payload;
    },

    setAtmId: (state: TTransaction, action: PayloadAction<string>) => {
      state.atmId = action.payload;
    },

    setAmounts: (state: TTransaction, action: PayloadAction<TOperationAmounts>) => {
      state.order.amount = action.payload.amount;
      state.order.commission = action.payload.commission;
    },

    setOtpLength: (state: TTransaction, action: PayloadAction<number>) => {
      state.otpLength = action.payload;
    }
  },
})

export const {
  setOrderId,
  setOperationType,
  setCard,
  setAtmId,
  setAmounts,
  setOtpLength,
} = transactionSlice.actions

export default transactionSlice.reducer