import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { RadioSelectionOptions, selectRadioSelection, setOption } from './radio-selection-slice';

const options = Object.entries(RadioSelectionOptions);

export function RadioSelectionButtons({ className = '' }: { className?: string }) {
  const selectedOption = useAppSelector(selectRadioSelection);
  const dispatch = useAppDispatch();

  return (
    <fieldset className={[className].join(' ')}>
      <legend>Select an option</legend>
      {options.map(([key, value]) => (
        <div key={key} className="flex gap-x-1">
          <input
            type="radio"
            id={key}
            name="drone"
            value={value}
            checked={value === selectedOption}
            onChange={() => dispatch(setOption(value as RadioSelectionOptions))}
          />
          <label htmlFor={key}>{value}</label>
        </div>
      ))}
    </fieldset>
  );
}
