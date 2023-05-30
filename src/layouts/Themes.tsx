import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { ToggleButton } from '@/layouts/ToggleButton';

// https://bestofreactjs.com/repo/pacocoursey-next-themes-react-nextjs-extensions
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return <ToggleButton toggle={currentTheme === 'dark' ? 'light' : 'dark'} />;
  };

  if (!mounted) return null;

  return (
    <div className="mt-4">
      <div className="h-12 w-12">{toggleTheme()}</div>
    </div>
  );
};

export { ThemeChanger };
