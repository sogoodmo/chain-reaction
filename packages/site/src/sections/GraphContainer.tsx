import ReactForceGraph2dWrapper from '@/sections/ReactForceGraph2dWrapper';

import type { State } from '../utils/GuessingGameState';

export function GraphContainer(props: {
  state: State;
  setHover: (id: string) => void;
  setClick: (id: string) => void;
}) {
  return (
    <div className="m-2 rounded-md border-2">
      <ReactForceGraph2dWrapper
        state={props.state}
        setHover={props.setHover}
        setClick={props.setClick}
      />
    </div>
  );
}
