import Link from 'next/link';
import styled from '@emotion/styled';
const NavItem = ({ text, href }) => {
  return (
    <a href={href} className={'nav__link'}>
      {text}
    </a>
  );
};
export default NavItem;

const NavLink = styled.a`
  .nav__link {
    font-size: 18px;
    position: relative;
    transition: ease-in-out 0.8s;
  }

  @media (min-width: 768px) {
    .nav__link::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 3px;
      bottom: -10px;
      left: 0;
      background-color: var(--main);
      transition: ease-in-out 0.8s;
    }

    .nav__link:hover:before {
      width: 100%;
    }
  }
`;
