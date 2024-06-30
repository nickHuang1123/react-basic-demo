import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      if (state.value > 0) {
        state.value -= 1
      }
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

export default counterSlice.reducer