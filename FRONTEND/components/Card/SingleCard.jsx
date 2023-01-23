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
    const userID = localStorage.getItem('profile_id');
    setLoggedUserID(userID);
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
      {nft.profile_id == loggedUserID ? (
        <Link href={{ pathname: `/closeTrade/[id]`, query: { id: _id } }}>
          Sell
        </Link>
      ) : (
        <Link href={{ pathname: `/openTrade/[id]`, query: { id: _id } }}>Buy</Link>
      )}
    </div>
  );
}
