import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    serviceList: serviceListSlice,
    serviceByID: serviceByIDSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
