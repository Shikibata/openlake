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
        Newest
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
      Most popular
      <ContainerTop>
        <Card />
      </ContainerTop>
    </PrimaryLayout>
  );
}

const ContainerNew = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  margin: 1rem;
`;

const CardNew = styled(motion.div)`
  display: flex;
`;

const CardItself = styled(motion.div)``;
const ContainerTop = styled(motion.div)``;
