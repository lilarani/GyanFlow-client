import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import loadingSlice from './loadingSlice';
import apiSlice from './ApiCalling/apiClice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // LocalStorage ব্যবহার করব
import { combineReducers } from 'redux';

// persistReducer কনফিগারেশন
const persistConfig = {
  key: 'root', // এই কী দিয়ে পersisted স্টেট চিহ্নিত হবে
  storage, // আমরা LocalStorage ব্যবহার করছি
  whitelist: ['authUser'], // শুধুমাত্র 'authUser' স্টেট পpersist করা হবে
};

const rootReducer = combineReducers({
  authUser: authReducer,
  loader: loadingSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

// persistReducer দিয়ে rootReducer কে wrap করলাম
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware),
});

export const persistor = persistStore(store); 
export default store;
