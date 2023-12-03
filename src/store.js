// store.js
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export default store
