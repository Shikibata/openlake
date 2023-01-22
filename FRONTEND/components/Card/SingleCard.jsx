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
  const _id = '63caa826a01d1c7e144fd1e9';
  console.log(_id);
  let loggedUserID;

  useEffect(() => {
    // Perform localStorage action
    loggedUserID = localStorage.getItem('profile_id');
  }, []);

  const fetchCard = async () => {
    const data = await axios.get(`http://localhost:3500/explore/${_id}`);

    setNft(data.data);

  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <span>{nft.title}</span>
      <br />
      <span>{nft.image}</span>
      <br />
      <span>{nft.creator}</span>
      <br />
      <span>{nft.price}</span>
      <br />
      {nft.profile_id === loggedUserID ? (
        <Link href={{ pathname: `/closeTrade/`, query: { id: _id } }}>
          Sell
        </Link>
      ) : (
        <Link href={{ pathname: `/openTrade/`, query: { id: _id } }}>Buy</Link>
      )}
    </div>
  );
}
