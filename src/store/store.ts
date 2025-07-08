import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// 👇 Export types for use across app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
