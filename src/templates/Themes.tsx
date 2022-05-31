import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// https://bestofreactjs.com/repo/pacocoursey-next-themes-react-nextjs-extensions
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <ul>
        <li>
          <button
            className="dark:text-yellow-900"
            onClick={() => setTheme('light')}
          >
            Light Mode
          </button>{' '}
        </li>
        <li>
          <button
            className="dark:text-yellow-900"
            onClick={() => setTheme('dark')}
          >
            Dark Mode
          </button>
        </li>
      </ul>
    </div>
  );
};
export { ThemeChanger };
