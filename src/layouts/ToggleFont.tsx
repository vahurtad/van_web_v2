import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const MovingComponent = require('react-moving-text');

type IToggleProps = {
  name: string;
};

const FontChanger = ({ name }: IToggleProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = (type: any) => (
    <MovingComponent
      type={type}
      duration="900ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
    >
      {name}
    </MovingComponent>
  );

  return mounted ? (
    <div>
      {theme === 'dark'
        ? toggleTheme('bounce')
        : toggleTheme('slideInFromLeft')}
    </div>
  ) : null;
};

export { FontChanger };
