import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: {[key: string]: CartItem},
  local: Local|undefined
}

const initialState: CartState = {
  items: {},
  local: undefined
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLocal: (state, action: PayloadAction<Local|undefined>) => {
      state.local = action.payload
      state.items = {}
    },
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.items[action.payload.product.sku] = action.payload
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLocal, addCartItem, removeCartItem } = cartSlice.actions
export default cartSlice.reducer