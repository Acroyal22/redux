import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Counter/CounterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
})