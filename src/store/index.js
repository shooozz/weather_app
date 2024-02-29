import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../api'

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
})
