import PrimaryLayout from '../../../../components/layouts/primary/PrimaryLayout';
import styled from "@emotion/styled";
import Wire from '../../../../components/Wire/Wire';

export default function Index() {

  return (
      <PrimaryLayout>
        <Container>
          <Wire/>
        </Container>
      </PrimaryLayout>
  );
}

const Container = styled.div`
padding: 5rem 1rem;
`;
