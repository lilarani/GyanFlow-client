import { configureStore } from '@reduxjs/toolkit';
import authSlics from './authSlice'
import loadingSlice from './loadingSlice'

const store = configureStore({
  reducer: {
    authUser: authSlics ,
    loader : loadingSlice ,
  },
});

export default store;
