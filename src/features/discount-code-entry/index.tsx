import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { selectDiscountCodeEntry, setDiscountCodeEntry } from './discount-code-entry-slice';

export function DiscountCodeEntry({ className = '' }: { className?: string }) {
  const { value: discountCodeEntry, hasRegexError } = useAppSelector(selectDiscountCodeEntry);
  const dispatch = useAppDispatch();

  return (
    <fieldset className={[className].join(' ')}>
      <legend>Discount Code Entry</legend>
      <p className="tip-text">*pattern: word + 4 numbers</p>
      <input
        value={discountCodeEntry}
        onChange={(e) => dispatch(setDiscountCodeEntry(e.target.value))}
        type="text"
        placeholder="e.g. DISCOUNT2024"
      />
      {hasRegexError && discountCodeEntry.length > 0 && (
        <p className="tip-text text-red-500">
          Pattern of discount code doesn't match with your input
        </p>
      )}
    </fieldset>
  );
}
