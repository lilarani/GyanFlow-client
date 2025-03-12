import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser : (state, action) => {
      // console.log('hello')
      // console.log(action.payload)
      state.user = action.payload
    }
  },
});

export const setUser = authSlice.actions.setUser;

export default authSlice.reducer;

