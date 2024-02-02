import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  getvalue:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += parseInt(state.getvalue)
    },
    decrement: (state) => {
      state.value -=  parseInt(state.getvalue)
    },
    passData: (state, action) => {
        state.getvalue = action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { increment, decrement,passData } = counterSlice.actions

export default counterSlice.reducer