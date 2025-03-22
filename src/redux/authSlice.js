import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loader : true ,
    error : null,
  },
  reducers: {
    setUser : (state, action) => {
      console.log("my action = " , action )
      console.log("my action payload = " , action.payload )
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
