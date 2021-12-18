import { configureStore } from '@reduxjs/toolkit';
import { editorSlice } from './editor/slice';

export const store = configureStore({
  reducer: {
    editor: editorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
