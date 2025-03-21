import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import loadingSlice from './loadingSlice';
import apiSlice from './ApiCalling/apiClice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root', 
  storage, 
  whitelist: ['authUser'], 
};

const rootReducer = combineReducers({
  authUser: authReducer,
  loader: loadingSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware),
});

export const persistor = persistStore(store); 
export default store;
