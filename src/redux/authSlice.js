import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser : (state, action) => {
      state.user = action.payload
    }
  },
  
  
});

export const setUser = authSlice.actions.setUser;

export default authSlice.reducer;
