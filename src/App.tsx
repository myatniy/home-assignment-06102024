import { AppStateView } from './components/app-state-view';
import { BasicNoteField } from './features/basic-note-field';
import { DiscountCodeEntry } from './features/discount-code-entry';
import { DiscountCodeGeneration } from './features/discount-code-generation';
import { RadioSelectionButtons } from './features/radio-selection-buttons';

function App() {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-3xl flex-col gap-y-2 p-4 pt-1 lg:p-0 lg:pt-1">
        <RadioSelectionButtons />
        <DiscountCodeEntry />
        <DiscountCodeGeneration />
        <BasicNoteField />
        <AppStateView />
      </div>
    </section>
  );
}

export default App;
