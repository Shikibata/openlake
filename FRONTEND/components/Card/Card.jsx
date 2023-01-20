import styled from '@emotion/styled';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
import axios from "axios";
import {useEffect, useState} from "react";
export default function Card() {

  const [nft, setNft] = useState([]);


  const fetchCards = async () => {
    const data = await axios.get('http://localhost:3500/explore')

    setNft(data.data.NFTs);
  }
  useEffect( () => {
    fetchCards();
  })

  const mapCardPopular = () => {
    return (
        nft.map((nfti, id) => (
            <Container key={id}>
              <CardTop>
                <Hidden>
                  <NameNft>{nfti.name}</NameNft>
                  <NameArt>{nfti.name}</NameArt>
                </Hidden>
                <ImageHolder style={{backgroundImage: `url(${nfti.image})`}} />
              </CardTop>
              <CardBottom>
                <Creator>{nfti.creator}</Creator>
                <Creator>{nfti.title}</Creator>
                <Price>
                  <FaEthereum />
                  {nfti.price} ETH
                </Price>
              </CardBottom>
            </Container>
        ))
    )
  }

  return (
      <ContainerAll>
        {mapCardPopular()}
      </ContainerAll>
  )
}

const ContainerAll = styled.div`
display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  height: 360px;
  margin: 20px;
  pointer-events: none;
`;

const ImageHolder = styled.div`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  bottom: 242px;
  right: 10px;
  z-index: 0;
  height: 252px;
  width: 240px;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: center center;

  :hover {
    opacity: 0.65;
  }
`;

const CardTop = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  padding: 10px;
`;

const Hidden = styled.div`
  width: 100%;
  height: 100%;
`;

const NameNft = styled.div``;

const NameArt = styled.div`
  position: relative;
  bottom: -195px;
`;

const CardBottom = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  background-color: var(--fading-bg);
  border-radius: 0px 0px 10px 10px;
  align-items: baseline;
  justify-content: space-between;
  padding: 1rem 1rem;
`;

const Creator = styled.div``;

const Price = styled.span``;
