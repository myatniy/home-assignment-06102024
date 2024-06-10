import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export enum RadioSelectionOptions {
  OptionA = 'Option A',
  OptionB = 'Option B',
  OptionC = 'Option C',
}

// type RadioSelectionOptionsStrings = keyof typeof RadioSelectionOptions;

interface RadioSelectionState {
  value: RadioSelectionOptions | null;
}

const initialState: RadioSelectionState = {
  value: null,
};

export const radioSelectionSlice = createSlice({
  name: 'radioSelectionSlice',
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<RadioSelectionOptions>) => {
      state.value = action.payload;
    },
  },
});

export const { setOption } = radioSelectionSlice.actions;
export const selectRadioSelection = (state: RootState) => state.radioSelection.value;

export default radioSelectionSlice.reducer;
