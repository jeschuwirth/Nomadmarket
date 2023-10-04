import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: Array<CartItem>
  price: number
  local: Local|undefined
}

const initialState: CartState = {
  items: [],
  price: 0,
  local: undefined
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLocal: (state, action: PayloadAction<Local|undefined>) => {
      state.local = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLocal } = cartSlice.actions
export default cartSlice.reducer