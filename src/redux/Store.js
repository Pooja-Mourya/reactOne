import { configureStore } from '@reduxjs/toolkit'
import authReducer from './userSlice'
import UserDataReducer from './UserDataSlice'

const store = configureStore({
  reducer: {
    user: authReducer,
    data: UserDataReducer,
  },
})

export default store
