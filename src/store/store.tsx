import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import addMenuSlice from '../features/addMenuSlice'; // example slice

export const store = configureStore({
  reducer: {
    addMenu: addMenuSlice,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom typed hooks for use in components
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();