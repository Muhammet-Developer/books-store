import { configureStore, combineReducers } from '@reduxjs/toolkit';
import basket from './basket';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';

import {
  persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, persistStore
} from 'redux-persist';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket']
};
const reducers = combineReducers({
  basket,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();

export type IModule = {
  basket: ReturnType<typeof basket>;
};