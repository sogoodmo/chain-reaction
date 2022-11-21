import dynamic from 'next/dynamic';

import type { State } from '../utils/GuessingGameState';

const ReactForceGraph2d = dynamic(() => import('./Graph'), {
  ssr: false,
});

function ReactForceGraph2dWrapper(props: {
  state: State;
  setHover: (id: string) => void;
  setClick: (id: string) => void;
}) {
  if (
    props.state.stateName !== 'gameOver' &&
    props.state.stateName !== 'guessing'
  )
    throw new Error('Incorrect game state found');

  return (
    <ReactForceGraph2d
      state={props.state}
      setHover={props.setHover}
      setClick={props.setClick}
    />
  );
}

export default ReactForceGraph2dWrapper;
