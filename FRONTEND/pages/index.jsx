import { useRouter } from 'next/router';
import SecondaryLayout from '../components/layouts/secondary/SecondaryLayout';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const { locale } = useRouter();

  return (
    <SecondaryLayout>
      <Container>
        <Left>
          <h2>Open</h2>
          <SmallTextLeft>
            <p>
              Sign up now on OpenLake and discover a whole new world of
              possibilities. Create your account and start exploring today!
            </p>
          </SmallTextLeft>
        </Left>

        <Middle>
          <img src={'./assets/vagabond-min.png'} />
        </Middle>
        <Right>
          <h2>Lake</h2>
        </Right>
      </Container>
    </SecondaryLayout>
  );
}

Home.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
  max-width: 1920px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  height: 50%;
  width: 100%;
  background: var(--fading-bg);
  display: flex;
  align-items: end;
  justify-content: center;

  h2 {
    font-family: 'Righteous', cursive;
    z-index: 999;
    font-size: 10em;
    text-align: center;
    color: var(--fg);
    align-items: center;
    -webkit-text-stroke: 3px var(--bg);
    paint-order: stroke fill;
  }

  @media (min-width: 1024px) {
    height: 100%;
    align-items: center;

    h2 {
      z-index: 1000;
      width: 100%;
      font-size: 20vw;
      text-align: right;
      transform: rotate(-3deg);
    }
  }
`;

const SmallTextLeft = styled.div`
  display: flex;
  position: absolute;
  left: 2%;
  right: 0%;
  top: 15%;
  transform: rotate(-5deg);

  p {
    font-size: 1.3em;
  }

  @media (min-width: 1024px) {
    top: 15%;
    right: 60%;
  }
`;

const Middle = styled.div`
  img {
    display: none;
  }

  @media (min-width: 1024px) {
    img {
      display: block;
      position: absolute;
      top: 7.5%;
      left: 50%;
      width: 35%;
      margin-left: -15%;
      z-index: 0;
    }
  }
`;

const Right = styled.div`
  height: 50%;
  width: 100%;
  background: var(--main);
  display: flex;
  align-items: baseline;
  justify-content: center;

  h2 {
    z-index: 999;
    font-family: 'Righteous', cursive;
    font-size: 10em;
    text-align: center;
    color: var(--fg);
    -webkit-text-stroke: 3px var(--bg);
    align-items: center;
    paint-order: stroke fill;
  }

  @media (min-width: 1024px) {
    height: 100%;
    align-items: center;

    h2 {
      z-index: 999;
      width: 100%;
      font-size: 20vw;
      text-align: left;
      transform: rotate(3deg);
    }
  }
`;

