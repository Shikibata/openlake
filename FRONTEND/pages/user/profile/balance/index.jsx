import PrimaryLayout from '../../../../components/layouts/primary/PrimaryLayout';
import styled from "@emotion/styled";

export default function Index() {
  return (
      <PrimaryLayout>
        <Container>
          Salut
        </Container>
      </PrimaryLayout>
  );
}

const Container = styled.div`
padding: 5rem 1rem;
`;
