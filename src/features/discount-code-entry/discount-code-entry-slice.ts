import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface DiscountCodeEntryState {
  value: string;
  hasRegexError: boolean;
}

const initialState: DiscountCodeEntryState = {
  value: '',
  hasRegexError: false,
};

export const discountCodeEntrySlice = createSlice({
  name: 'discountCodeEntry',
  initialState,
  reducers: {
    setDiscountCodeEntry: (state, { payload: newStr }: PayloadAction<string>) => {
      /**
       * ^ - start of the string
       * [a-z]+ - one or more alphabetical characters
       * \d{4} - four digits
       * $ - end of string. In this case, if there are characters after 4th digit the match is 'false'
       * Examples of correct inputs: Discount2024, whatEVER1001, sMtH0001
       */
      const pattern = /^[a-z]+\d{4}$/im;
      if (newStr.match(pattern)) {
        state.hasRegexError = false;
      } else {
        state.hasRegexError = true;
      }
      state.value = newStr;
    },
  },
});

export const { setDiscountCodeEntry } = discountCodeEntrySlice.actions;
export const selectDiscountCodeEntry = (state: RootState) => state.discountCodeEntry;

export default discountCodeEntrySlice.reducer;
