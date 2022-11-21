import { getMovieId as getTodaysMovieId } from '@/utils/topThousandFilms';

import { getTitle } from '../queries/getTitle';
import type { State } from './GuessingGameState';

export const startGame = async (
  setState: (state: State) => void,
  setHoverId: (hoverId: string) => void,
  titleId?: string
) => {
  const response = await getTitle(titleId ?? getTodaysMovieId()!);
  const id = response.title?.id!;
  setHoverId(id);
  const titleText = response.title?.titleText?.text!;

  const newState: State = {
    incorrect: 0,
    stateName: 'guessing',
    currentId: id,
    rootId: id,
    nodes: [
      {
        id,
        type: 'title',
        text: titleText,
        found: true,
        data: { type: 'loaded', data: response },
      },
    ],
    edges: [],
    guesses: [],
    streak: 0,
  };
  console.log(newState);
  setState(newState);
};
