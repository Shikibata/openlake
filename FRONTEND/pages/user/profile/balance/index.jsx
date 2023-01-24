import PrimaryLayout from '../../../../components/layouts/primary/PrimaryLayout';
import styled from "@emotion/styled";
import Wire from '../../../../components/Wire/Wire';
import {useEffect, useState} from "react";
import {router} from "next/client";

export default function Index() {

    const [profileId, setProfileId ] = useState(null)


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
