import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {orderInitState, TOperationType, TOrder} from "./initState";

export const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitState,
  reducers: {
    setOrderId: (state: TOrder, action: PayloadAction<string>) => {
      state.orderId += action.payload;
    },

    setOperationType: (state, action: PayloadAction<TOperationType>) => {
      state.operationType = action.payload;
    },
  },
})

export const {setOrderId, setOperationType } = orderSlice.actions

export default orderSlice.reducer