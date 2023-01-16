import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SecondaryLayout from '../components/layouts/secondary/SecondaryLayout';
import styled from '@emotion/styled';
export default function Home() {
  const { locale } = useRouter();

  return (
    <SecondaryLayout>
      <Container>
          <Left>
              <h2>Open</h2>
          </Left>
          <Middle><img src={"./assets/vagabond-min.png"} /></Middle>
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
  display:flex;
  flex-direction:column;
  height: 100vh;
  width: 100%;
  overflow: hidden;


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
    -webkit-text-stroke: 10px var(--bg);
    paint-order: stroke fill;
  }
  
  @media (min-width: 1024px) {
    height: 100%;
    align-items: center;
    
    h2 {
      z-index: 0;
      width: 100%;
      font-size:20vw;
      text-align: right;
      color: var(--fg)
    }
  }
`;

const Middle = styled.div`

  img {
    display:none;
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
    align-items: center;
    
  }

  @media (min-width: 1024px) {
    height: 100%;
    align-items: center;


    h2 {
      -webkit-text-stroke: 10px var(--bg);
      paint-order: stroke fill;
      z-index: 999;
      width: 100%;
      font-size:20vw;
      text-align: left;
      color: var(--fg)
    }
  }
`;

