import { Meta } from '@/layouts/Meta';

const Game = () => {
  return (
    <>
      <Meta title="Chain Reaction" description="" />
      <div className="bg-pal-900">
        <div className="mx-20 flex p-2">
          <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text py-3 text-4xl font-bold text-transparent">
            Chain Reaction
          </h1>
          <ul className="ml-auto rounded-full bg-gray-400 p-3 py-3 text-4xl  font-bold text-neutral-200">
            <li className="mx-4 inline-block">
              <a className="text-pink-600">1</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-pal-800 p-80 pb-28"></div>
    </>
  );
};

export default Game;
