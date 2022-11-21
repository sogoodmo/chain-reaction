import type { GuessingGameState, State } from '../utils/GuessingGameState';
import { handleGuess } from '../utils/handleGuess';
import { inputPlaceholderText } from '../utils/inputPlaceholderText';

export function GuessInput(
  inputGuessState: string,
  state: GuessingGameState,
  setState: (state: State) => void,
  setInputGuessState: (guess: string) => void,
  setTimeLeft: (timeLeft: number) => void
) {
  return (
    <input
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleGuess(inputGuessState, state, setState, setTimeLeft);
          setInputGuessState('');
        }
      }}
      value={inputGuessState}
      className="block min-w-full rounded-md border bg-gray-50 p-3 text-center text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      placeholder={inputPlaceholderText(state)}
      onChange={(data) => setInputGuessState(data.target.value)}
    />
  );
}
