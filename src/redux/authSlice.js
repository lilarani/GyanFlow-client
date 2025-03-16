import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
});

export const setUser = authSlice.actions.setUser;

export default authSlice.reducer;
