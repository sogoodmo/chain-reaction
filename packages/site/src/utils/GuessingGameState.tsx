import type { LinkObject, NodeObject } from 'react-force-graph-2d';

import type {
  GetName,
  GetName_name_credits_edges_node_title,
} from '../__generated__/GetName';
import type {
  GetTitle,
  GetTitle_title_credits_edges_node_name,
} from '../__generated__/GetTitle';

interface TitleDataLoaded {
  type: 'loaded';
  data: GetTitle;
}
interface TitleDataLoading {
  type: 'loading';
  data: GetName_name_credits_edges_node_title;
}
export interface TitleNode extends NodeObject {
  type: 'title';
  text: string;
  found: boolean;
  data: TitleDataLoading | TitleDataLoaded | TitleNotLoading;
}
interface NameDataLoading {
  type: 'loading';
  data: GetTitle_title_credits_edges_node_name;
}
interface NameDataLoaded {
  type: 'loaded';
  data: GetName;
}

interface NameNotLoading {
  type: 'notLoading';
  data: GetTitle_title_credits_edges_node_name;
}

interface TitleNotLoading {
  type: 'notLoading';
  data: GetName_name_credits_edges_node_title;
}
export interface NameNode extends NodeObject {
  type: 'name';
  text: string;
  found: boolean;
  data: NameDataLoading | NameDataLoaded | NameNotLoading;
}
type GameNode = TitleNode | NameNode;
interface PreGameState {
  stateName: 'pre';
}
interface BaseGuess {
  guess: string;
  correct: boolean;
}
interface CorrectGuess extends BaseGuess {
  correct: true;
  link: string;
  imageUrl?: string;
}
interface IncorrectGuess extends BaseGuess {
  correct: false;
}
type Guess = CorrectGuess | IncorrectGuess;

export interface GuessingGameState {
  stateName: 'guessing';
  nodes: Array<GameNode>;
  edges: Array<LinkObject>;
  rootId: string;
  currentId: string;
  incorrect: number;
  guesses: Guess[];
  streak: number;
}

export interface GameOverState {
  stateName: 'gameOver';
  nodes: Array<GameNode>;
  edges: Array<LinkObject>;
  rootId: string;
  guesses: Guess[];
  currentId: string;
  incorrect: number;
}

export type State = PreGameState | GuessingGameState | GameOverState;
