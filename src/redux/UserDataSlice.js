import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: '',
}

export const UserDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userData: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { userData } = UserDataSlice.actions

export default UserDataSlice.reducer
