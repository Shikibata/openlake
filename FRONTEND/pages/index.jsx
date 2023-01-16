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
  
  @media (min-width: 768px) {
    
    flex-direction: row;
  }
`;

const Left = styled.div`
  min-height: 50%;
  width: 100%;
  background: var(--fading-bg);
  
  h2 {
    z-index: 999;
    width: 100%;
    font-size: 23em;
    text-align: right;
    color: var(--fg)

  }
  
  @media (min-width: 768px) {
    height: 100%;
  }
  
  
`;

const Middle = styled.div`
  
  
  img {
    position: absolute;
    top: 15%;
    left: 50%;
    width: 30%;
    margin-left: -15%;
    z-index: 0;
  }
  
`;

const Right = styled.div`
  height: 50%;
  width: 100%;
  background: var(--main-soft);

  h2 {
    z-index: 999;
    width: 100%;
    font-size: 23em;
    text-align: left;
    color: var(--fg)
  }
  
  @media (min-width: 768px) {
  height: 100%;
}
`;

