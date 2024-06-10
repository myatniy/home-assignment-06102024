import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface BasicNoteState {
  value: string;
}

const initialState: BasicNoteState = {
  value: '',
};

export const basicNoteSlice = createSlice({
  name: 'basicNoteField',
  initialState,
  reducers: {
    setBasicNoteText: (state, { payload: newStr }: PayloadAction<string>) => {
      state.value = newStr;
    },
  },
});

export const { setBasicNoteText } = basicNoteSlice.actions;
export const selectBasicNote = (state: RootState) => state.basicNote.value;

export default basicNoteSlice.reducer;
