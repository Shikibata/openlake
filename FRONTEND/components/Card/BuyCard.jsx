import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BuyCard() {
  const [nft, setNft] = useState([]);
  const [profile, setProfile] = useState([]);
  const router = useRouter();
  const _id = router.query.id;
  console.log(_id);
  const [bought, setBought] = useState(false);

  const handleSubmit = (e) => {
    const nftBuy = nft._id;
    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/openTrade',
      data: {
        nftBuy,
        profile_id: localStorage.getItem('profile_id'),
      },
    };
    // prevent the form from refreshing the whole page
    axios(configuration)
      .then((result) => {
        console.log(result);
        setBought(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const fetchCard = async () => {
    const data = await axios.get(`http://localhost:3500/explore/${_id}`);
    setNft(data.data);
  };
  useEffect(() => {
    if (router.isReady) {
      fetchCard();
    }
  }, [router.isReady]);

  return (
    <Container>
      <ContainerTrade>
        <p>
          Buy {nft.title} for {nft.price} ETH?
        </p>
        {bought ? (
          <Link href={{ pathname: `/explore` }}>
            {nft.title} was bought for {nft.price} ETH. Click to go back to
            index.
          </Link>
        ) : (
          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Yes
            </button>
            <Link href={{ pathname: `/explore` }}>No</Link>
          </div>
        )}
      </ContainerTrade>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2rem;
  }
`;

const ContainerTrade = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  a,
  button {
    font-size: 1.4rem;
  }
  button {
    width: 3rem;
  }
`;
