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
  }, []);

  return (
      <div>
        
        {
        
            nft.length > 0 ?
         
          nft.map((nfti, id) => <ImageNft key={nfti._id} src={nfti.image} />) 

          :

          <div>No NFT.</div>
        }
      </div>)
}

const ImageNft = styled.img`
  width: 100px;
`;
