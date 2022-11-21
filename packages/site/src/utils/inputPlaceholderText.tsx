import type { State } from './GuessingGameState';

export const inputPlaceholderText = (state: State) => {
  if (state.stateName !== 'guessing')
    throw new Error('Cannot get placeholder text');
  const currentNode = state.nodes.find((node) => node.id === state.currentId)!;
  switch (currentNode.type) {
    case 'name':
      return `Name a title for '${currentNode.text}'`;
    case 'title':
      return `Name a credit for '${currentNode.text}'`;
    default:
      throw new Error('Invalid node type');
  }
};
