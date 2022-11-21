import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-full bg-pal-50 px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="lg:mx-auto mx-20 p-0">
      <div className="border-b border-gray-300 inline-block">
        <div className="pt-16 pb-8">
          <div className="text-5xl font-bold text-gray-900">
            Chain Reaction
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content py-6 text-xl">{props.children}</div>

      <div className=" border-pink-600 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </div>
    </div>
  </div>
);

export { Main };
