import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// https://bestofreactjs.com/repo/pacocoursey-next-themes-react-nextjs-extensions
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold dark:text-white">
        The current theme is: {theme} The system theme is: {resolvedTheme}{' '}
      </h1>
      <ul>
        <li>
          <button onClick={() => setTheme('light')}>Light Mode</button>{' '}
        </li>
        <li>
          <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </li>
      </ul>
    </div>
  );
};
export { ThemeChanger };
