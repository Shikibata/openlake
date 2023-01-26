'use client';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = new useRouter();
  const clickPoint = useRef();
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    clickPoint.current.style.display = 'none';
  };

  const handleBlur = () => {
    clickPoint.current.style.display = 'block';
  };

  const handleAnswerChange = (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('search', search);
        router.push(`../explore/search`);
    }
  };

  return (
    <Searchbar>
      <Container>
        <Input
          type="text"
          placeholder="Looking for something ?"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={(e) => handleAnswerChange(e)}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button ref={clickPoint}>
          <Svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </Svg>
        </Button>
      </Container>
    </Searchbar>
  );
}
const Searchbar = styled.div`
  display: flex;
  padding-left: 2rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  margin-right: 0.75rem;
  width: 100%;
`;

const Button = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
`;

const Svg = styled.svg`
  color: var(--fg);
  width: 1.2rem;
  height: 1.2rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 30rem;
  padding-left: 2.5rem;
  height: 40px;
  border-radius: 15px;
  background: var(--fading-bg);
  color: var(--fg);
  border: none;

  :focus {
    outline-color: var(--main);
  }
`;
