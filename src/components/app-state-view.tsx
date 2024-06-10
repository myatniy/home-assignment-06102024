import { useAppSelector } from '../store/store-hooks';

export function AppStateView({ className = '' }: { className?: string }) {
  const appState = useAppSelector((state) => state);

  return (
    <fieldset className={[className].join(' ')}>
      <legend>Redux Store State</legend>
      <pre>{JSON.stringify(appState, null, 2)}</pre>
    </fieldset>
  );
}
