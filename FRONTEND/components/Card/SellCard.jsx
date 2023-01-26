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
  const [sold, setSold] = useState(false);

  const handleSubmit = (e) => {
    const nftSell = nft._id;

    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/closeTrade',
      data: {
        nftSell,
        profile_id: localStorage.getItem('profile_id'),
      },
    };
    // prevent the form from refreshing the whole page
    axios(configuration)
      .then((result) => {
        console.log(result);
        setSold(true);
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
    fetchCard();
  }, []);

  return (
    <Container>
      <ContainerTrade>
        <p>
          Sell {nft.title} for {nft.price} ETH?
        </p>
        {sold ? (
          <Link href={{ pathname: `/explore` }}>
            {nft.title} was sold for {nft.price} ETH. Click to go back to index.
          </Link>
        ) : (
          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Yes
            </button>
            <a href="../explore">No</a>
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
    margin: 0;
    align-items: center;
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
  }
`;
