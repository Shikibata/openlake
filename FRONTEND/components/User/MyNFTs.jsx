import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MyNFTs({ ...profile }) {
  const [nft, setNft] = useState([]);
  const router = new useRouter();
  const [profileID, setProfileID] = useState('');

  const fetchCards = async () => {
    const data = await axios.get(
      `http://localhost:3500/myNFTs/${profile._id}`,
      { params: { id: profile._id } }
    );
    setNft(data.data);
    console.log(nft);
  };

  useEffect(() => {
    if (profile._id) {
      fetchCards();
    }
  }, [profile._id]);
  return (
    <Container>
      <SectionTitle>Collection</SectionTitle>
      <ContainerCards>
      {nft.map((nfti, id) => (
        <ClickHolder
          key={nfti._id}
          href={{ pathname: `/explore/[id]`, query: { id: nfti._id } }}
        >
          <ImageNft src={nfti.image} />
        </ClickHolder>
      ))}
      </ContainerCards>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;


const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageNft = styled.img`
  width: 10rem;
  margin: 5px;
`;

const SectionTitle = styled.h3`
  text-align: center;
`;

const ClickHolder = styled(Link)``;
