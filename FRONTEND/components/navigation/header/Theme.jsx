import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import styled from '@emotion/styled';

export default function Theme() {
  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    setThemeState(true);
  }, []);

  if (!themeState) {
    return null;
  }
  const renderThemeChanger = () => {
    if (theme === 'dark') {
      return (
        <MoonIcon
          className={'theme-select'}
          color={'#F5F3CE'}
          onClick={() => setTheme('light')}
        ></MoonIcon>
      );
    } else {
      return (
        <SunIcon
          className={'theme-select'}
          color={'#FDB813'}
          onClick={() => setTheme('dark')}
        ></SunIcon>
      );
    }
  };

  return <ThemeSelector>{renderThemeChanger()}</ThemeSelector>;
}

const ThemeSelector = styled.div`
  width: 48px;
  height: 48px;
  align-items: center;

  > * {
    border-width: 3px;
    border-style: solid;
    border-color: var(--fading-bg);
    background-color: var(--bg);
    border-image: initial;
    padding: 6px;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    position: relative;
    right: 4rem;
  }
`;
