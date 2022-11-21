import type { State } from './GuessingGameState';

export const getLives = (state: State) => {
  const MAX_NUMBER_OF_LIVES = 3;
  if (state.stateName === 'pre')
    throw new Error('Cannot get lives for pre game');
  return MAX_NUMBER_OF_LIVES - state.incorrect;
};
