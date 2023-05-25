import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLogin = true
    },
    userLogout: (state) => {
      state.isLogin = false
    },
  },
})

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer
