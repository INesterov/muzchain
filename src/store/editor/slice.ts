import { createSlice } from '@reduxjs/toolkit';

export type EditorState = {
  isPlaying: boolean;
}

const initialState: EditorState = {
  isPlaying: false,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    startPlaying: (state) => {
      state.isPlaying = true;
    },
    stopPlaying: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { startPlaying, stopPlaying } = editorSlice.actions;
