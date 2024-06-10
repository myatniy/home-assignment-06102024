import { configureStore } from '@reduxjs/toolkit';
import radioSelection from '../features/radio-selection-buttons/radio-selection-slice';
import discountCodeEntry from '../features/discount-code-entry/discount-code-entry-slice';
import basicNote from '../features/basic-note-field/basic-note-slice';

export const store = configureStore({
  reducer: {
    radioSelection,
    discountCodeEntry,
    basicNote,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
