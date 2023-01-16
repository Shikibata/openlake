import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import SearchBar from './SearchBar';
import Theme from './Theme';

export default function Header() {
  const MENU_LIST = [
    { text: 'Explore', href: '/explore' },
    { text: 'Connect', href: '/user/login' },
  ];

  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState(false);
  const [navActive, setNavActive] = useState(null);
  const [activeId, setActiveId] = useState(-1);

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
          onClick={() => setTheme('light')}
        ></MoonIcon>
      );
    } else {
      return (
        <SunIcon
          className={'theme-select'}
          onClick={() => setTheme('dark')}
        ></SunIcon>
      );
    }
  };
  return (
    <Nav>
      <Logo>
        <Link href={'/'}>
          <Image
            priority
            src={'/assets/logo.svg'}
            height={60}
            width={60}
            alt=""
          />
        </Link>
        <WebsiteName>OpenLake</WebsiteName>
      </Logo>
      <SearchBar />
      <NavMenuBar onClick={() => setNavActive(!navActive)}>
        <div></div>
        <div></div>
        <div></div>
      </NavMenuBar>
      <NavMenuElements
        className={`${navActive ? 'active' : ''} nav__menu-list`}
      >
        {MENU_LIST.map((menu, id) => (
          <div
            onClick={() => {
              setActiveId(id);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeId === id} {...menu} />
          </div>
        ))}
        <ContainerTheme className={'theme'}>
          <Theme />
        </ContainerTheme>
      </NavMenuElements>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  height: 70px;
  justify-content: space-between;
  padding: 5px 2rem;
  background-color: transparent;
  position: fixed;
  z-index: 99;
`;

const NavMenuBar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  cursor: pointer;
  div {
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 2px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMenuElements = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  width: 288px;
  row-gap: 24px;
  right: -288px;
  padding: 24px 16px;

  @media (min-width: 768px) {
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
    width: 100%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const List = styled.nav`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1rem;
`;

const WebsiteName = styled.h1`
  display: none;
  font-family: 'Righteous', cursive;


  @media (min-width: 768px) {
    display: block;
    font-size: 1.9rem;
    margin-left: 7px;
  }
`;

const ContainerTheme = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    right: -15px;
    top: 14px;
  }
`;
