import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { selectBasicNote, setBasicNoteText } from './basic-note-slice';

export function BasicNoteField({ className = '' }: { className?: string }) {
  const basicNoteText = useAppSelector(selectBasicNote);
  const dispatch = useAppDispatch();

  return (
    <fieldset className={[className].join(' ')}>
      <legend>Basic Note Field</legend>
      <textarea
        rows={4}
        placeholder="Write your thoughts here..."
        value={basicNoteText}
        onChange={(e) => dispatch(setBasicNoteText(e.target.value))}
      />
    </fieldset>
  );
}
