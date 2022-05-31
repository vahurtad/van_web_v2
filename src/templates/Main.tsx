import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="light:text-red-900 text-3xl font-bold text-red-800 dark:text-pink-900">
            {AppConfig.title}
          </div>
          <div className="text-xl dark:text-yellow-900">
            {AppConfig.description}
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl font-bold dark:text-yellow-900">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="border-none  hover:text-gray-900">About</a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by{' '}
        <a href="https://github.com/ixartz/Next-js-Boilerplate">
          CreativeDesignsGuru
        </a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
