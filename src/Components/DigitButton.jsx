import { ACTIONS } from './Cacu';

export function DigitButton({ dispatch, digit }) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  );
}
