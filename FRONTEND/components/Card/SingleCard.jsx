import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SingleCard() {
  const [nft, setNft] = useState([]);
  const [profile, setProfile] = useState([]);
  const router = useRouter();
  const _id = router.query.id
  console.log(_id);
  const [loggedUserID, setLoggedUserID] = useState("");

  const fetchCard = async () => {
    const data = await axios.get(`http://localhost:3500/explore/${_id}`);
    setNft(data.data);
  };

  useEffect(() => {
    if(router.isReady){
    setLoggedUserID(localStorage.getItem("profile_id"))
    fetchCard();}

  }, [router.isReady]);

  return (
    <Container>
      <ImageHolder>
          <img src={nft.image}/>
      </ImageHolder>
      <Infos>
        <span>{nft.title}</span>
        <span>{nft.creator}</span>
        <span>{nft.price}</span>
      </Infos>
      {nft.profile_id == loggedUserID ? (
        <Link href={{ pathname: `/closeTrade/[id]`, query: { id: _id } }}>
          Sell
        </Link>
      ) : (
        <Link href={{ pathname: `/openTrade/[id]`, query: { id: _id } }}>Buy</Link>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  @media (min-width: 768px) {
    padding: 5rem 1rem;
    flex-direction: row;
  }
`;

const ImageHolder = styled.div`
  margin-bottom: 32px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    width: 50%;
  }
  
  img {
    width: 90%;
    max-width: 650px;
  }
`;

const Infos = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
    max-width: 800px;
  }
`;