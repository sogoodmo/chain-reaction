import Link from 'next/link';

import Card from '@/sections/Card';

const About = () => (
  <>
    <div className="bg-pal-900">
      <div className="mx-20 flex p-0">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text py-3 text-3xl font-bold text-transparent">
          Chain Reaction
        </h1>
        <ul className="ml-auto py-3 text-2xl  font-light text-neutral-200">
          <li className="mx-4 inline-block">
            <Link href="/" className="text-white">
              <a className="text-3xl font-bold text-white hover:text-pink-600">
                Play
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-30 bg-pal-800 p-20 pb-28">
      <h1 className="w-8xl text-5xl font-bold leading-10 text-white ">
        The{' '}
        <span className="truncate bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Chain
        </span>{' '}
        <span className="truncate bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Reaction
        </span>{' '}
        game
      </h1>
      <h3 className="mt-4 w-96 text-xl font-light text-neutral-400">
        Try and get the longest Actor - film streak!
      </h3>
      <div className="flex flex-col items-center justify-center bg-pal-800 pb-10 pt-20">
        <h2 className="text-5xl font-bold text-neutral-100">How to play</h2>
        <h3 className="text-xl font-light text-neutral-100">
          Let&apos;s get started
        </h3>
      </div>
      <div className="grid grid-cols-4 items-stretch gap-x-4 pt-8 text-center align-middle text-4xl ">
        {[
          { heading: 'Film', content: 'Start with a film of your choice' },
          { heading: 'Actor', content: 'Name an actor in this film' },
          { heading: 'Film', content: 'Name another film this actor was in' },
          {
            heading: 'Chain!',
            content: 'Keep going with no repeats and get the longest chain!',
          },
        ].map((item) => (
          <Card
            content={item.content}
            heading={item.heading}
            key={item.heading}
          />
        ))}
      </div>
      <div className="flex h-52 items-center justify-center pt-20 ">
        <h2 className="text-5xl text-white">
          <Link href="/">
            <a className="text-white hover:text-pink-600">
              Chain Reaction | Let&apos;s play!
            </a>
          </Link>
        </h2>
      </div>
    </div>
  </>
);

export default About;
