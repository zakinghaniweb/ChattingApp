import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './Slices/chatSlice'

export default configureStore({
  reducer: {
    showChat: chatSlice
  },
})