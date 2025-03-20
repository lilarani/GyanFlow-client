import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser : (state, action) => {
      state.user = action.payload

    },
    setLoader : (state , action) =>{
      state.loader = action.payload
    },
    setError : (state , action)=>{
      state.error = action.payload 
    }
  },
  
  
});


export const {setUser , setLoader , setError} = authSlice.actions;

export default authSlice.reducer;
