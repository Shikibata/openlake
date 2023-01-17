import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
export default function Index() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <PrimaryLayout>
      <ContainerNew ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <h2>Newest</h2>
        <CardNew drag={'x'} dragConstraints={{ right: 0, left: -width }}>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
          <CardItself>
            <Card as={'motion.div'} />
          </CardItself>
        </CardNew>
      </ContainerNew>
      <ContainerTop>
        <h2>Most popular</h2>
        <CardTop>

      </CardTop>
        <Card />
      </ContainerTop>
    </PrimaryLayout>
  );
}

const ContainerNew = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  padding-top: 8rem;
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
  }
`;

const CardTop = styled(motion.div)``;
