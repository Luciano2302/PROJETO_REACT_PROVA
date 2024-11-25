// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer'; // Certifique-se de que o reducer esteja importado corretamente

const store = configureStore({
  reducer: {
    users: userReducer, // Reducer para os dados dos usuários
  },  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Dispatch = typeof store.dispatch;

export default store;
