import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './Slice';

export const store = configureStore({
  reducer: {
    component: componentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;