import Link from 'next/link';
import type { ReactNode } from 'react';

import { ThemeChanger } from '@/layouts/Themes';
import { FontChanger } from '@/layouts/ToggleFont';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

type ILinkType = {
  name: string;
  link: string;
  target?: string;
  rel?: string;
  type?: string;
};

// TODO: link text not centered
// TODO:

const Links: ILinkType[] = [
  { name: 'home', link: '/' },
  { name: 'portofolio', link: '/portofolio/' },
  {
    name: 'github',
    link: 'https://github.com/vahurtad',
    target: '_blank',
    rel: 'noreferrer',
    type: 'url',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/hurtadovanessa/',
    target: '_blank',
    rel: 'noreferrer',
    type: 'url',
  },
  {
    name: 'resume',
    link: 'https://docs.google.com/document/d/1WSqRFM8AG0JWHQutYZZj4P3sAvGTp_I7MXvPOpToNKc/edit?usp=sharing',
    target: '_blank',
    rel: 'noreferrer',
    type: 'url',
  },
];

function LinkSVG() {
  return (
    <svg
      className="inline h-5 w-5 align-middle"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
      <path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
    </svg>
  );
}

function LinkItem({ name, link, target, rel, type }: ILinkType) {
  return (
    <li className="my-2 mr-6">
      <Link
        passHref
        href={link}
        className="border-none hover:text-pink-600 dark:hover:text-pink-900"
        target={target}
        rel={rel}
      >
        <button className="flex h-10 w-32 items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-center text-lg text-white transition-colors duration-300 hover:bg-pink-700 dark:bg-pink-900 dark:text-pink-100">
          {name}
          {type === 'url' ? <LinkSVG /> : null}
        </button>
      </Link>
    </li>
  );
}

const Main = ({ meta, children }: IMainProps) => (
  <div className="h-screen px-1 text-gray-700 antialiased sm:px-6 md:px-8">
    {meta}

    <div className="mx-auto h-screen max-w-screen-lg px-8">
      <div className="border-b border-pink-300 pb-8 pt-16">
        <div
          id="content"
          className="font-pilowlava text-2xl font-bold text-pink-600 dark:font-nanjaunemaxi dark:text-pink-900 sm:text-3xl md:text-6xl"
        >
          <FontChanger name={AppConfig.title} />
        </div>

        <ul className="relative flex flex-wrap font-nanjaunemaxi text-xl dark:text-yellow-900">
          {Links.map((link) => (
            <LinkItem key={link.name} {...link} />
          ))}

          <ThemeChanger />
        </ul>
      </div>

      <div className="content py-5 text-xl ">{children}</div>

      <footer className="border-t border-pink-300 py-8 text-center text-sm">
        <p>
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
          <Link
            href="https://github.com/ixartz/Next-js-Boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 transition-colors duration-300 hover:text-pink-600"
          >
            CreativeDesignsGuru
          </Link>
        </p>
      </footer>
    </div>
  </div>
);

export { Main };
// Boilerplate: CreativeDesignsGuru
// https://github.com/ixartz/Next-js-Boilerplate
