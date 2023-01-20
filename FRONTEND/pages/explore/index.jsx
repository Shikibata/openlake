import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import CardNewest from "../../components/Card/CardNewest";
import CardPopular from "../../components/Card/CardPopular";
export default function Index() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth / 2);
  }, []);
  return (
    <PrimaryLayout>
      <ContainerNew ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <h2>Newest</h2>
        <CardNew drag={'x'} dragConstraints={{ right: 0, left: -width }}>
          <CardItself>
            <CardNewest as={'motion.div'} />
          </CardItself>
        </CardNew>
      </ContainerNew>
      <ContainerTop ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <h2>Hottest</h2>
        <CardTop drag={'x'} dragConstraints={{ right: 0, left: -width }}>
          <CardItself>
            <CardPopular as={'motion.div'} />
          </CardItself>
        </CardTop>
      </ContainerTop>
      <ContainerIndex ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <h2>Index</h2>
        <CardIndex  drag={'x'} dragConstraints={{ right: 0, left: -width }}>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
        </CardIndex>
      </ContainerIndex>

    </PrimaryLayout>
  );
}

const ContainerIndex = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  padding-bottom: 5rem;
  padding-left: 1rem;

  h2 {
    text-align: center;
    font-size: 3rem;
  }
`;

const CardIndex = styled(motion.div)`
  display: flex;
`;



const ContainerNew = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  padding-top: 5rem;
  padding-left: 1rem;

  h2 {
    text-align: center;
    font-size: 3rem;
  }
`;

const CardNew = styled(motion.div)`
  display: flex;
`;

const CardItself = styled(motion.div)``;

const ContainerTop = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  padding-top: 2rem;
  padding-left: 1rem;

  h2 {
    text-align: center;
    font-size: 3rem;
  }
`;

const CardTop = styled(motion.div)`
  display: flex;
  margin-bottom: 5rem;
`;
