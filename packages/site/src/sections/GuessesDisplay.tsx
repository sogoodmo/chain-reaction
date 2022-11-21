import { GameOverState, GuessingGameState } from '../utils/GuessingGameState';

export function GuessesDisplay(state: GuessingGameState | GameOverState) {
  return (
    <div className="min-h-fit grow overflow-y-auto">
      {state.guesses.map((guess, index) => {
        if (guess.correct) {
          return (
            <p
              className={`text-center text-xl text-green-300 ${
                index % 2 === 0 ? 'bg-gray-100' : ''
              } `}
              key={guess.guess}
            >
              {guess.guess}
            </p>
          );
        }

        return (
          <p
            className={`text-center text-xl text-red-400 ${
              index % 2 === 0 ? 'bg-gray-100' : ''
            } `}
            key={guess.guess}
          >
            {guess.guess}
          </p>
        );
      })}
    </div>
  );
}
