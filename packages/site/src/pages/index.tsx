import produce from 'immer';
import type { WritableDraft } from 'immer/dist/internal';
import { useEffect, useState } from 'react';
import type { LinkObject } from 'react-force-graph-2d';

import type {
  GetName,
  GetName_name_credits_edges,
  GetName_name_knownFor_edges,
} from '@/__generated__/GetName';
import type {
  GetTitle,
  GetTitle_title_credits_edges,
} from '@/__generated__/GetTitle';
import { Meta } from '@/layouts/Meta';
import { getRandomMovieId } from '@/utils/topThousandFilms';

import { getName } from '../queries/getName';
import { getTitle } from '../queries/getTitle';
import { makeSearchQuery } from '../queries/Search';
import { GraphContainer } from '../sections/GraphContainer';
import { GuessesDisplay } from '../sections/GuessesDisplay';
import { GuessInput } from '../sections/GuessInput';
import { getLives } from '../utils/getLives';
import type {
  GameOverState,
  GuessingGameState,
  NameNode,
  State,
  TitleNode,
} from '../utils/GuessingGameState';
import { startGame } from '../utils/startGame';

export const getCurrentNode = (state: GuessingGameState) => {
  return state.nodes.find((node) => node.id === state.currentId);
};

export const checkAndInvokeGameOver = async (
  state: GuessingGameState,
  setState: (state: State) => void
) => {
  const lives = getLives(state);
  if (lives <= 0) {
    const gameOverState = produce<GameOverState>(state as any, (draft) => {
      draft.stateName = 'gameOver';
      draft.nodes.forEach(async (node) => {
        if (node.data.type === 'loading') throw new Error('Data is loading');
        if (node.data.type === 'notLoading')
          throw new Error('Data is not loading');

        // throw new Error('Data is not loading!');
        if (node.type === 'name') {
          node.data.data.name?.knownFor?.edges.slice(0, 10).forEach((title) => {
            if (
              draft.nodes.findIndex(
                (check) => check.id === title.node.title.id
              ) === -1
            ) {
              draft.nodes.push({
                type: 'title',
                found: false,
                text: title.node.title.titleText?.text!,
                id: title.node.title.id,
                data: {
                  type: 'notLoading',
                  data: title.node.title,
                },
              });
            }
            draft.edges.push({ source: node.id, target: title.node.title.id });
          });
        } else if (node.type === 'title') {
          node.data.data.title?.credits?.edges!.slice(0, 10).forEach((name) => {
            if (
              draft.nodes.findIndex(
                (check) => check.id === name.node.name.id
              ) === -1
            ) {
              draft.nodes.push({
                type: 'name',
                found: false,
                text: name.node.name.nameText?.text!,
                id: name.node.name.id,
                data: {
                  type: 'notLoading',
                  data: name.node.name,
                },
              });
            }
            draft.edges.push({ source: node.id, target: name.node.name.id });
          });
        }
      });
    });
    console.log(gameOverState);
    setState(gameOverState);
  }
};

const displayLives = (state: State) => {
  if (state.stateName === 'pre')
    throw new Error('Cannot get lives for pre game');
  const lives = getLives(state);
  if (lives <= 0) return '';
  return Array(lives).fill('💙');
};




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

function GuessGameBar(props: {
  timeLeft: number;
  state: GuessingGameState;
  forfeit: () => void;
}) {
  return (
    <div className="m-2 flex grow items-center justify-center rounded-md bg-blue-50 text-center">
      <button
        className="m-4 rounded-md bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          props.forfeit();
        }}
      >
        Forfeit
      </button>
      <h1 className="flex-1 text-3xl opacity-70">
        {displayLives(props.state)}
      </h1>
      <h1 className="w-1/2 text-4xl text-gray-700">Chain Reaction</h1>
      <h1 className="flex-1 py-3 text-4xl text-gray-700">
        {(props.state.nodes.length - 1) * 1000} points
      </h1>
      <h1 className = " border w-16 h-15 rounded-md bg-gray-700 m-2 flex-2 countdown font-mono text-white text-3xl"> {props.timeLeft} </h1>
    </div>
  );
}


const getPoints = (state: GuessingGameState | GameOverState) => {
  return (state.nodes.filter((node) => node.found).length - 1) * 1000;
};

function GameOverGameBar(props: {
  state: GameOverState;
  startGame: (titleId?: string) => void;
  setStatePre: () => void;
  setSearch: (search: string) => void;
  search: () => void;
}) {
  return (
    <div className="mx-2 flex grow items-center justify-center rounded-md bg-blue-50 text-center">
      <button
        className="m-4 rounded-md bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          props.setStatePre();
          props.startGame(getRandomMovieId());
        }}
      >
        Randomize
      </button>
      <button
        className="m-4 h-10 rounded-md bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          props.setStatePre();
          props.startGame();
        }}
      >
        Daily Challenge
      </button>
      <div className="mx-4 flex flex-row rounded-md border-2">
        <input
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              props.search();
            }
          }}
          className="block  h-10 rounded-l-lg py-2 pl-2 font-medium text-gray-900"
          placeholder="Enter your own movie"
          onChange={(data) => props.setSearch(data.target.value)}
        />
        <button
          className="rounded-r-md border border-blue-200 bg-blue-500 px-4 font-bold text-white"
          onClick={props.search}
        >
          Submit
        </button>
      </div>

      <h1
        className="m-4 w-1/3 text-4xl font-bold text-gray-700 decoration-blue-600 hover:text-pink-600 hover:underline"
        onClick={() => props.startGame()}
      >
        Chain Reaction
      </h1>
      <h1 className="text-bold flex-1 py-3 text-4xl text-gray-700">
        {getPoints(props.state)} points
      </h1>
    </div>
  );
}

function HoverDetailTitle(
  hoverNode: TitleNode,
  props: { state: GuessingGameState | GameOverState; hoverId: string }
) {
  if (hoverNode.data.type !== 'loaded') return <></>;

  return (
    <div className="m-2 flex w-[24rem] flex-col items-center rounded-md border-2 p-2">
      <a
        target="_blank"
        href={hoverNode.data.data.title?.canonicalUrl!}
        rel="noopener noreferrer"
      >
        <h1 className="text-2xl text-gray-800 hover:text-blue-600">
          {hoverNode?.text}
          &nbsp;({hoverNode.data.data.title?.releaseDate?.year}) -{' '}
          {hoverNode.data.data.title?.ratingsSummary?.aggregateRating}
          <span className="text-[16px] text-gray-500">/10</span>
        </h1>
      </a>
      <p className="py-2 text-gray-700">
        {hoverNode.data.data.title?.plots?.edges[0]?.node.plotText?.plainText}
      </p>

      <div className="flex flex-row">
        {hoverNode.data.data.title?.titleGenres?.genres
          .slice(0, 4)
          .map((genre) => (
            <span
              className="mx-2 rounded-full border-2 p-1 text-[14px] text-gray-500"
              key={genre.genre.displayableProperty.value.plainText!}
            >
              {genre.genre.displayableProperty.value.plainText}
            </span>
          ))}
      </div>
      <img
        className={`max-h-[450px] p-4 ${props.state.stateName === 'guessing' ? 'blur-sm' : ''
          }`}
        src={hoverNode?.data.data.title?.primaryImage?.url!}
        alt={`${hoverNode.data.data.title?.titleText?.text} Poster`}
      />
    </div>
  );
}

function HoverDetailsName(hoverNode: NameNode) {
  if (hoverNode.data.type !== 'loaded')
    throw new Error('Cannot render unloaded name');
  return (
    <div className="m-2 flex w-[24rem] flex-col items-center rounded-md border-2 p-2">
      <a
        target="_blank"
        href={hoverNode.data.data.name?.canonicalUrl!}
        rel="noopener noreferrer"
      >
        <h1 className="text-2xl text-gray-800 hover:text-blue-600">
          {hoverNode?.text}
        </h1>
      </a>
      {hoverNode.data.data.name?.awardNominations?.edges.length! > 0 ? (
        <div className="py-2 text-gray-700">
          <h1 className="text-xl">Awards won:</h1>
          <div className="flex flex-wrap items-center">
            {hoverNode.data.data.name?.awardNominations?.edges
              .slice(0, 9)
              .map((award) => (
                <span
                  key={award.node.award.text}
                  className="m-1 rounded-full border-2 p-1 text-[14px] text-gray-500"
                >
                  {award.node.award.text}
                </span>
              ))}
          </div>
        </div>
      ) : (
        <h1 className="text-xl">No Awards Won</h1>
      )}
      {hoverNode.data.data.name?.knownFor?.edges
        .flatMap((item) =>
          item.node.summary.principalCharacters?.map((char) => char.name)
        )
        .filter(Boolean).length && (
          <div className="py-2 text-gray-700">
            <h1 className="text-xl">Characters Played:</h1>
            <div className="flex flex-wrap items-center">
              {[
                ...new Set(
                  hoverNode.data.data.name?.knownFor?.edges
                    .flatMap((item) =>
                      item.node.summary.principalCharacters?.map(
                        (char) => char.name
                      )
                    )
                    .filter(Boolean)
                ),
              ]
                .slice(0, 10)
                .map((char) => (
                  <span
                    key={char}
                    className="m-1 rounded-full border-2 p-1 text-[14px] text-gray-500"
                  >
                    {char}
                  </span>
                ))}
            </div>
          </div>
        )}
    </div>
  );
}

const HoverDetails = (props: {
  state: GuessingGameState | GameOverState;
  hoverId: string;
}) => {
  const hoverNode = props.state.nodes.find((node) => node.id === props.hoverId);
  if (
    !hoverNode ||
    hoverNode?.data.type === 'loading' ||
    hoverNode.data.type === 'notLoading'
  ) {
    return (
      <div className="m-2 flex w-96 flex-col rounded-md border-2 text-center ">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (hoverNode?.type === 'title') {
    return HoverDetailTitle(hoverNode, props);
  }

  if (hoverNode?.type === 'name') {
    return HoverDetailsName(hoverNode);
  }
  return <></>;
};

const fixEdges = (id: string, edges: LinkObject[]) => {
  edges.forEach((edge) => {
    // @ts-expect-error
    if (edge.source.id === id) edge.source = id;
    // @ts-expect-error
    else if (edge.target.id === id) edge.target = id;
  });
};

const handleHover = async (
  hoverId: string,
  state: State,
  setState: (state: State) => void
) => {
  if (state.stateName !== 'gameOver' && state.stateName !== 'guessing') return;

  const hoverNode = state.nodes.find((node) => node.id === hoverId)!;
  if (!hoverNode) return;
  if (hoverNode.data.type === 'notLoading') {
    if (hoverNode.type === 'title') {
      const newState = await produce(state, async (draft) => {
        const hoverIndex = draft.nodes.findIndex((node) => node.id === hoverId);
        draft.nodes[hoverIndex]!.data.data = await getTitle(hoverId);
        draft.nodes[hoverIndex]!.data.type = 'loaded';
        fixEdges(hoverId, draft.edges);
        // draft.edges = fixEdges(hoverId, draft.edges);
      });
      setState(newState);
      // hoverNode.data.data = await getTitle(hoverNode.id);
      // hoverNode.data.type = 'loaded';
    } else if (hoverNode.type === 'name') {
      const newState = await produce(state, async (draft) => {
        const hoverIndex = draft.nodes.findIndex((node) => node.id === hoverId);
        draft.nodes[hoverIndex]!.data.data = await getName(hoverId);
        draft.nodes[hoverIndex]!.data.type = 'loaded';
        fixEdges(hoverId, draft.edges);
        // draft.edges = fixEdges(hoverId, draft.edges);
      });
      setState(newState);
      // hoverNode.data.data = await getName(hoverNode.id);
      // hoverNode.data.type = 'loaded';
    }
  }
};
const MAX_ADD = 10;

const handleClickTitleStateChanges = (
  credits: GetTitle_title_credits_edges[],
  draft: WritableDraft<GameOverState>,
  clickId: string
) => {
  let added = 0;
  const addedIds: string[] = [];
  credits.forEach((credit) => {
    // console.log('Credit', credit.node.name.id, { credit });
    if (
      draft.nodes.findIndex((node) => node.id === credit.node.name.id) === -1
    ) {
      added += 1;
      if (added >= MAX_ADD) return;
      // console.log(credit.node.name.nameText?.text);
      draft.nodes.push({
        type: 'name',
        found: false,
        text: credit.node.name.nameText?.text!,
        data: { type: 'notLoading', data: credit.node.name },
        id: credit.node.name.id,
      });
      draft.edges.push({ source: clickId, target: credit.node.name.id });
      addedIds.push(credit.node.name.id);
    }
  });
  draft.nodes.forEach((node) => {
    if (node.type === 'title') {
      if (node.data.type === 'loaded') {
        node.data.data.title?.credits?.edges!.forEach((credit) => {
          if (addedIds.includes(credit.node.name.id)) {
            draft.edges.push({
              source: (node.data.data as GetTitle).title?.id,
              target: credit.node.name.id,
            });
          }
        });
      }
    }
  });
};

const handleClickNameStateChanges = (
  credits: GetName_name_knownFor_edges[] | GetName_name_credits_edges[],
  draft: WritableDraft<GameOverState>,
  clickId: string
) => {
  let added = 0;
  const addedIds: string[] = [];
  credits.forEach((credit) => {
    // console.log('Credit', credit.node.name.id, { credit });
    if (
      draft.nodes.findIndex((node) => node.id === credit.node.title.id) === -1
    ) {
      // console.log(credit.node.name.nameText?.text);
      added += 1;
      console.log(added);
      if (added >= MAX_ADD) return;
      draft.nodes.push({
        type: 'title',
        found: false,
        text: credit.node.title.titleText?.text!,
        data: { type: 'notLoading', data: credit.node.title },
        id: credit.node.title.id,
      });
      draft.edges.push({ source: clickId, target: credit.node.title.id });
      addedIds.push(credit.node.title.id);
    }
  });

  draft.nodes.forEach((node) => {
    if (node.type === 'name') {
      if (node.data.type === 'loaded') {
        node.data.data.name?.credits?.edges.forEach((credit) => {
          if (addedIds.includes(credit.node.title.id)) {
            draft.edges.push({
              source: (node.data.data as GetName).name?.id,
              target: credit.node.title.id,
            });
          }
        });
      }
    }
  });
};

const handleClickNode = async (
  clickId: string,
  state: State,
  setState: (id: State) => void
) => {
  if (state.stateName !== 'gameOver') return;

  const clickNode = state.nodes.find((node) => node.id === clickId)!;
  const newState = await produce(state, async (draft) => {
    if (clickNode.type === 'title' && clickNode.data.type === 'notLoading') {
      const res = await getTitle(clickNode.id! as string);
      handleClickTitleStateChanges(res.title?.credits?.edges!, draft, clickId);
    } else if (clickNode.type === 'title' && clickNode.data.type === 'loaded') {
      handleClickTitleStateChanges(
        clickNode.data.data.title?.credits?.edges!,
        draft,
        clickId
      );
    } else if (
      clickNode.type === 'name' &&
      clickNode.data.type === 'notLoading'
    ) {
      const res = await getName(clickNode.id! as string);
      handleClickNameStateChanges(res.name?.knownFor?.edges!, draft, clickId);
      handleClickNameStateChanges(res.name?.credits?.edges!, draft, clickId);
    } else if (clickNode.type === 'name' && clickNode.data.type === 'loaded') {
      handleClickNameStateChanges(
        clickNode.data.data.name?.knownFor?.edges!,
        draft,
        clickId
      );
      handleClickNameStateChanges(
        clickNode.data.data.name?.credits?.edges!,
        draft,
        clickId
      );
    }
  });
  setState(newState);
};

const setStatePre = (setState: (state: State) => void) => {
  setState({ stateName: 'pre' });
};

const setIncorrect = (
  setState: (state: State) => void,
  state: State,
  incorrect: number
) => {
  if (state.stateName !== 'guessing')
    throw new Error('Cannot set lives, in incorrect game state');
  const newState = produce(state, (draft) => {
    draft.incorrect = incorrect;
  });
  setState(newState);
  return newState;
};

const Index = () => {
  const initialState: State = {
    stateName: 'pre',
  };

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState<State>(initialState);
  const [inputGuessState, setInputGuessState] = useState('');
  const [hoverId, setHoverId] = useState('');
  const [clickId, setClickId] = useState('');
  const [search, setSearch] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (state.stateName === 'pre')
    {
      setTimeLeft(30);
      return;
    }

    const myInterval = () => {
      if (state.stateName === 'guessing')
      {
        setTimeLeft(state => state - 1);
      }
    } 

    const interval = setInterval(myInterval, 1000);
    return () => {
      clearInterval(interval);
    }

  }, [state.stateName])

  useEffect(() => {
    handleHover(hoverId, state, setState);
  }, [hoverId]);
  useEffect(() => {
    handleClickNode(clickId, state, setState);
  }, [clickId]);

  useEffect(() => {
    if (state.stateName === 'pre') {
      setTimeLeft(30);
      startGame(setState, setHoverId);
    }
  }, []);

  useEffect(() => {
    if(state.stateName  === "guessing") {
      if (timeLeft <= 0) {
        const newState = setIncorrect(setState, state, 3);
        checkAndInvokeGameOver(newState, setState);
      }
    }
  }, [timeLeft])


  if (state.stateName === 'pre') {
    return <h1 className="p-32 text-center text-4xl">Loading...</h1>;
  }

  if (state.stateName === 'guessing') {

    console.log(timeLeft);

    return (
      <>
        <Meta title="Chain Reaction" description="Home" />
        <div className="m-24 flex flex-col">
          <GuessGameBar
            state={state}
            forfeit={() => {
              const newState = setIncorrect(setState, state, 3);
              checkAndInvokeGameOver(newState, setState);
            }}
            timeLeft={timeLeft}
          />
          <div className="relative flex max-h-[700px] min-w-full max-w-fit flex-row">
            <HoverDetails state={state} hoverId={hoverId} />
            <GraphContainer
              state={state}
              setHover={setHoverId}
              setClick={setClickId}
            />

           
            <div className="m-2 flex min-h-full w-[8rem] grow flex-col rounded-md border-2">
              {GuessesDisplay(state)}
              <div className="m-2 ">
                {GuessInput(
                  inputGuessState,
                  state,
                  setState,
                  setInputGuessState,
                  setTimeLeft
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  

  if (state.stateName === 'gameOver') {
    return (
      <>
        <Meta title="Chain Reaction" description="Home" />
        <div className="m-24 flex flex-col">
          <GameOverGameBar
            state={state}
            startGame={(titleId?: string) =>
              startGame(setState, setHoverId, titleId)
            }
            setStatePre={() => setStatePre(setState)}
            setSearch={setSearch}
            search={async () => {
              setStatePre(setState);
              const searchResults = await makeSearchQuery(search);
              const topSearchResult =
                searchResults.mainSearch?.edges[0]?.node.entity;
              // eslint-disable-next-line no-underscore-dangle
              if (topSearchResult?.__typename === 'Title') {
                startGame(setState, setHoverId, topSearchResult.id);
              }
            }}
          />
          <div className="relative flex max-h-[700px] min-w-full max-w-fit flex-row">
            <HoverDetails state={state} hoverId={hoverId} />
            <GraphContainer
              state={state}
              setHover={setHoverId}
              setClick={setClickId}
            />
            <div className="m-2 flex min-h-full grow flex-col rounded-md border-2">
              {GuessesDisplay(state)}
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default Index;
