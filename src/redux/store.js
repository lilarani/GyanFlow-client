import { configureStore } from '@reduxjs/toolkit';
import authSlics from './authSlice'
import loadingSlice from './loadingSlice'
import apiSlice from './ApiCalling/apiClice';


const store = configureStore({
  reducer: {
    authUser: authSlics,
    loader: loadingSlice,
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  // midelware for api calling (built-in)
  middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
