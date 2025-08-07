import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'showChat',
  initialState: {
    value: false,
  },
  reducers: {
    setShowChat: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setShowChat } = chatSlice.actions

export default chatSlice.reducer