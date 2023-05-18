import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import CustomAnimation from '@/layouts/AnimatedText';

type IToggleProps = {
  name: string;
};

// https://bestofreactjs.com/repo/pacocoursey-next-themes-react-nextjs-extensions
const FontChanger = (props: IToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return currentTheme === 'dark' ? (
      // https://yidaoj.github.io/react-moving-text/

      <CustomAnimation
        animationType="bounce"
        duration="1900ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        {props.name}
      </CustomAnimation>
    ) : (
      <CustomAnimation
        animationType="jelly"
        duration="1700ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        {props.name}
      </CustomAnimation>
    );
  };

  if (!mounted) return null;

  return <div>{toggleTheme()}</div>;
};
export { FontChanger };
