import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {transactionInitState, TCard, TOperationType, TTransaction} from "./initState";

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

    setCard(state: TTransaction, action: PayloadAction<TCard>) {
      state.card = action.payload;
    }
  },
})

export const {setOrderId, setOperationType, setCard,} = transactionSlice.actions

export default transactionSlice.reducer