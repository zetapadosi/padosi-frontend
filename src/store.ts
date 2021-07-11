import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import { padosiApi } from "./api/padosiApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [padosiApi.reducerPath]: padosiApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(padosiApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
