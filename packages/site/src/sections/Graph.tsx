// @ts-nocheck
import { useState } from 'react';
import ReactForceGraph2d from 'react-force-graph-2d';

import type {
  GameOverState,
  GuessingGameState,
} from '../utils/GuessingGameState';

const Graph = (props: {
  state: GuessingGameState | GameOverState;
  setHover: (id: string) => void;
  setClick: (id: string) => void;
}) => {
  const xOffset = 1000;
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth - xOffset);
  const displayHeight = 650;
  window.addEventListener('resize', () => {
    setDisplayWidth(window.innerWidth - xOffset);
  });
  return (
    <ReactForceGraph2d
      nodeCanvasObject={(node, ctx, globalScale) => {
        const currentNode = props.state.nodes.find(
          (item) => item.id === node.id
        );
        let label;
        if (currentNode?.type === 'title') {
          label = `🎥${currentNode.text}`;
        } else {
          label = `🎭${currentNode?.text}`;
        }

        const connections = new Set();
        try {
          props.state.edges.forEach((item) => {
            if (
              item.source.id === currentNode.id ||
              item.target.id === currentNode.id
            ) {
              if (item.source.id.startsWith('tt')) {
                connections.add(`${item.source.id}${item.target.id}`);
              } else {
                connections.add(`${item.target.id}${item.source.id}`);
              }
            }
          });
        } catch {}
        // .filter(
        //   (item) =>
        //     item.source.id === currentNode.id ||
        //     item.target.id === currentNode.id
        // ).length;
        // if(currentNode?.type === "name") numberOfConnections -= 1;
        const fontSize =
          (currentNode?.found ? 20 : Math.min(connections.size + 10.5, 20)) /
          globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(
          (n) => n + fontSize * 0.2
        ); // some padding

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        let colour;
        if (!currentNode?.found) colour = '#666666';
        else if (props.state.currentId === node.id) colour = '#2aa777';
        else colour = '#ffd700';
        ctx.fillStyle = colour;
        ctx.fillText(label, node.x, node.y);

        node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
      }}
      nodePointerAreaPaint={(node, color, ctx) => {
        ctx.fillStyle = color;
        const bckgDimensions = node.__bckgDimensions;
        bckgDimensions &&
          ctx.fillRect(
            node.x - bckgDimensions[0] / 2,
            node.y - bckgDimensions[1] / 2,
            ...bckgDimensions
          );
      }}
      onNodeHover={(node) => {
        if (node) {
          props.setHover(node?.id);
        }
      }}
      onNodeClick={(node) => {
        props.setClick(node?.id);
      }}
      backgroundColor="#ffffff"
      width={displayWidth}
      height={displayHeight}
      linkWidth={2}
      graphData={{
        nodes: props.state.nodes,
        links: props.state.edges,
      }}
    />
  );
};

export default Graph;
