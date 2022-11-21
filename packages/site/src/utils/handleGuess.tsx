import produce from 'immer';

import type {
  GetName_name_credits_edges,
  GetName_name_knownFor_edges,
} from '@/__generated__/GetName';
import { makeQuery } from '@/utils/graphqlQuery';

import type { GetTitle, GetTitleVariables } from '../__generated__/GetTitle';
import { checkAndInvokeGameOver, getCurrentNode } from '../pages/index';
import { getName } from '../queries/getName';
import { getTitleQuery } from '../queries/getTitleQuery';
import type { NameNode, State, TitleNode } from './GuessingGameState';

export const handleGuess = async (
  guessText: string,
  state: State,
  setState: (state: State) => void,
  setTimeLeft: (timeLeft: number) => void, 
) => {
  if (state.stateName !== 'guessing')
    throw new Error('Invalid game state found');
  const currentNode = getCurrentNode(state)!;
  if (currentNode.data.type === 'loading') return;
  if (currentNode.data.type === 'notLoading') return;
  console.log({ currentNode });
  switch (currentNode.type) {
    case 'title': {
      const userTraversal = currentNode.data.data.title?.credits?.edges!.find(
        // make this fuzzy search
        (credit) => credit.node.name.nameText?.text === guessText
      );
      if (userTraversal) {
        const newState = produce(state, (draft) => {
          draft.nodes.push({
            type: 'name',
            id: userTraversal.node.name.id!,
            found: true,
            text: userTraversal.node.name.nameText?.text!,
            data: {
              data: userTraversal.node.name,
              type: 'loading',
            },
          });
          draft.edges.push({
            source: draft.currentId,
            target: userTraversal.node.name.id!,
          });
          draft.currentId = userTraversal.node.name.id!;
          draft.guesses.push({
            correct: true,
            guess: guessText,
            link: userTraversal.node.name.canonicalUrl!,
          });
          draft.streak += 1;
        });
        console.log({ newState }, 'returning!');
        setState(newState);
        const nameId = userTraversal.node.name.id;
        const nameData = await getName(nameId);
        const nameCurrentNode = getCurrentNode(newState)! as NameNode;
        const finalState = produce(newState, (draft) => {
          const currentNodeIndex = draft.nodes.findIndex(
            (item) => item.id === nameCurrentNode.id
          );
          draft.nodes[currentNodeIndex] = {
            ...nameCurrentNode,
            data: {
              type: 'loaded',
              data: nameData,
            },
          };
          const lastEdge = draft.edges.length - 1;
          draft.edges[lastEdge]!.target = draft.nodes[currentNodeIndex]?.id;
        });
        setState(finalState);
        setTimeLeft(30);
        console.log({ finalState });
      } else {
        const newState = produce(state, (draft) => {
          draft.incorrect += 1;
          draft.guesses.push({
            correct: false,
            guess: guessText,
          });
          draft.streak = 0;
        });
        setState(newState);
        checkAndInvokeGameOver(newState, setState);
      }
      break;
      // handle incorrect guess case
    }
    case 'name': {
      console.log(currentNode.data.data);
      let userTraversal:
        | GetName_name_knownFor_edges
        | GetName_name_credits_edges;
      userTraversal = currentNode.data.data.name?.knownFor?.edges.find(
        // make this fuzzy search
        (title) => title.node.title.titleText?.text === guessText
      )!;
      if (!userTraversal) {
        userTraversal = currentNode.data.data.name?.credits?.edges.find(
          // make this fuzzy search
          (title) => title.node.title.titleText?.text === guessText
        )!;
      }
      console.log({ userTraversal });
      if (userTraversal) {
        const newState = produce(state, (draft) => {
          draft.nodes.push({
            type: 'title',
            found: true,
            text: userTraversal.node.title.titleText?.text!,
            id: userTraversal.node.title.id,
            data: {
              type: 'loading',
              data: userTraversal.node.title!,
            },
          });
          draft.edges.push({
            source: draft.currentId,
            target: userTraversal.node.title.id!,
          });
          draft.currentId = userTraversal.node.title.id!;
          draft.guesses.push({
            correct: true,
            guess: guessText,
            link: userTraversal.node.title.canonicalUrl!,
            imageUrl: userTraversal.node.title.primaryImage?.url!,
          });
          draft.streak += 1;
        });
        setState(newState);
        console.log({ newState });

        const titleId = userTraversal.node.title.id;
        const titleData = await makeQuery<GetTitle, GetTitleVariables>(
          getTitleQuery,
          { id: titleId }
        );
        const titleCurrentNode = getCurrentNode(newState)! as TitleNode;
        const finalState = produce(newState, (draft) => {
          const currentNodeIndex = draft.nodes.findIndex(
            (item) => item.id === titleCurrentNode.id
          );
          draft.nodes[currentNodeIndex] = {
            ...titleCurrentNode,
            data: {
              type: 'loaded',
              data: titleData,
            },
          };
          const lastEdge = draft.edges.length - 1;
          draft.edges[lastEdge]!.target = draft.nodes[currentNodeIndex]?.id;
        });
        setState(finalState);
        setTimeLeft(30);
        break;
      } else {
        const newState = produce(state, (draft) => {
          draft.incorrect += 1;
          draft.guesses.push({
            correct: false,
            guess: guessText,
          });
          draft.streak = 0;
        });
        setState(newState);
        checkAndInvokeGameOver(newState, setState);
      }
      break;
    }

    default:
      throw new Error('Unexpected case');
  }
};
