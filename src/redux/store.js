import { configureStore } from '@reduxjs/toolkit';
import { dishesApi } from './dishes';

export const store = configureStore({
  reducer: {
    [dishesApi.reducerPath]: dishesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    dishesApi.middleware,
  ],
});
