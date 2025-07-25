import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from '../api/booksApi';
import { borrowsApi } from '@/api/borrowApi';


export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [borrowsApi.reducerPath]: borrowsApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(booksApi.middleware, borrowsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
