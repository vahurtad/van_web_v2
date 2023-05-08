import { useTheme } from 'next-themes';

type ToggleProps = {
  toggle: 'light' | 'dark';
};

const ToggleButton = ({ toggle }: ToggleProps) => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute top-0 right-0 mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in">
      <div className="flex items-center justify-center">
        <span
          className={`group mx-auto block max-w-xs space-y-3 rounded-lg border-none p-1 hover:text-${
            toggle === 'light' ? 'yellow-900' : 'pink-600'
          }`}
        >
          <svg
            className={`h-6 w-6  rounded-md hover:animate-${
              toggle === 'light' ? 'spin' : 'pulse'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setTheme(toggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                toggle === 'light'
                  ? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              }
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export { ToggleButton };
