import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './Slices/chatSlice'
import userSlice from './Slices/userSlice'

export default configureStore({
  reducer: {
    showChat: chatSlice,
    User: userSlice
  },
})