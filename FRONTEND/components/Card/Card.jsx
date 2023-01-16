import styled from '@emotion/styled';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
export default function Card() {
  return (
    <Container>
      <CardTop>
        <Hidden>
          <NameNft>Pleasure</NameNft>
          <NameArt>Pleasure #6</NameArt>
        </Hidden>
        <ImageHolder />
      </CardTop>
      <CardBottom>
        <Creator>Pusinner</Creator>
        <Price>
          <FaEthereum />
          0.80 ETH
        </Price>
      </CardBottom>
    </Container>
  );
}

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
  background-image: url('./assets/signuppage.jpeg');
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
