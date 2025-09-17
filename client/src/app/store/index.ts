import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

import formSlice from "@/shared/slices/formSlice";

export const store = configureStore({
  reducer: {
    formSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
