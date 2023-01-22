import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Card from '../../components/Card/Card';
import CardNewest from '../../components/Card/CardNewest';
import CardPopular from '../../components/Card/CardPopular';

export default function Index() {
  return (
    <PrimaryLayout>
      <ContainerNew>
        <h2>Newest</h2>
        <CardNew>
          <CardItself>
            <CardNewest />
          </CardItself>
        </CardNew>
      </ContainerNew>
      <ContainerTop>
        <h2>Hottest</h2>
        <CardTop>
          <CardItself>
            <CardPopular />
          </CardItself>
        </CardTop>
      </ContainerTop>
      <ContainerIndex>
        <h2>Index</h2>
        <CardIndex>
          <CardItself>
            <Card />
          </CardItself>
        </CardIndex>
      </ContainerIndex>
    </PrimaryLayout>
  );
}

const ContainerIndex = styled(motion.div)`
  padding-bottom: 5rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardIndex = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const ContainerNew = styled(motion.div)`
  padding-top: 5rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardNew = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const CardItself = styled(motion.div)``;

const ContainerTop = styled(motion.div)`
  padding-top: 1rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardTop = styled(motion.div)`
  display: flex;
  margin-bottom: 5rem;
  justify-content: center;
`;
