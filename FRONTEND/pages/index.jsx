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
          <Left></Left>
          <Middle><img src={"./assets/vagabond-min.png"} /></Middle>
          <Right></Right>
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
;
  
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
  }
  
`;

const Right = styled.div`
  height: 50%;
  width: 100%;
  background: var(--main-soft);
;
  
  @media (min-width: 768px) {
  height: 100%;
}
`;

