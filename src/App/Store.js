import { configureStore } from '@reduxjs/toolkit'
import Counterslice from './Reduxer/Counterslice'
export const store = configureStore({
  reducer: {
    counter:Counterslice,
  },
})