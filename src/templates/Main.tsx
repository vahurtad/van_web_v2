import Link from 'next/link';
import type { ReactNode } from 'react';

import { ThemeChanger } from '@/layouts/Themes';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen px-1 text-gray-700 antialiased sm:px-6 md:px-8">
    {props.meta}

    <div className=" mx-auto h-screen max-w-screen-lg px-8">
      <div className="border-b border-pink-300 ">
        <div className="pt-16 pb-8 ">
          <div className="font-pilowlava text-3xl font-bold text-pink-600 dark:text-pink-900 sm:text-6xl">
            {AppConfig.title}
          </div>
          <div className=" font-metropolis text-xl dark:text-yellow-900">
            {AppConfig.description}
          </div>
        </div>

        {/* // Menu */}
        <div className="font-nanjaunemaxi">
          <ul className=" relative flex flex-wrap text-xl  dark:text-yellow-900">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none hover:text-gray-900">home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/portfolio/">
                <a className="border-none  hover:text-gray-900">portfolio</a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none hover:text-gray-900"
                href="https://github.com/vahurtad"
                target="_blank"
                rel="noreferrer"
              >
                github
                <svg
                  className=" inline h-6 w-6 align-middle hover:text-gray-900"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
                  <path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
                </svg>
              </a>
            </li>
            <li className="mr-6">
              <a
                className="border-none hover:text-gray-900"
                href="https://github.com/vahurtad"
                target="_blank"
                rel="noreferrer"
              >
                resume
                <svg
                  className=" inline h-6 w-6 align-middle hover:text-gray-900"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
                  <path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
                </svg>
              </a>
            </li>
            <ThemeChanger />
          </ul>
        </div>
      </div>

      <div className="content py-5 text-xl ">{props.children}</div>
      {/* <div className="mt-20 text-left xl:w-2/4">{props.children}</div> */}

      <div className="border-t border-pink-300 py-8 text-center text-sm">
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
