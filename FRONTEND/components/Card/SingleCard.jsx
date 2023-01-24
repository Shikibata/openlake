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
    fetchCard();
    }

  }, [router.isReady]);

  return (
      <Container>
        <ImageHolder>
          <img src={nft.image}/>
        </ImageHolder>
        <Infos>
          <InfosTop>
            <Creator>{nft.creator}</Creator>
            <Title>{nft.title}</Title>
          </InfosTop>
          <InfosBottom>
            <Price><FaEthereum />{nft.price}</Price>
            <BuyAndSell>
              {nft.profile_id && nft.profile_id != loggedUserID ?
              
              <div>Not available.</div>
              
              :
              (nft.profile_id == loggedUserID ? (
                  <Link href={{ pathname: `/closeTrade/[id]`, query: { id: _id } }}>
                    Sell
                  </Link>
              ) : (
                  <Link href={{ pathname: `/openTrade/[id]`, query: { id: _id } }}>Buy</Link>
              ))}
            </BuyAndSell>
          </InfosBottom>
        </Infos>

    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 1rem;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;

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
    border-radius: 10px;
  }
`;

const Infos = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
    max-width: 800px;
    height: 80%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const InfosTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10rem;
`;

const Creator = styled.h2`
  font-size: 2.6rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
`;

const InfosBottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

const Price = styled.span`
  display: flex;
  align-items: center;
  font-size: 2.6rem;
`;

const BuyAndSell = styled.div`
  font-size: 1.4rem;
  width: 20%;
  text-align: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: var(--bg);
  cursor: pointer;
  margin-bottom: 1rem;

  :hover {
    background-color: var(--main);
    color: var(--fg);
  }
`;