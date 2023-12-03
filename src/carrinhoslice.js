// carrinhoSlice.js
import { createSlice } from '@reduxjs/toolkit'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: {
    itens: []
  },
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      state.itens.push(action.payload)
    }
    // Outras ações do carrinho podem ser adicionadas aqui
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
