import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MyNFTs({ ...profile }) {
  const [trades, setTrades] = useState([]);
  const router = new useRouter();

  const fetchTrades = async () => {
    const data = await axios.get(
        `http://localhost:3500/myTrades/${profile._id}`,
        {params: {id: profile._id}}
    );
    setTrades(data.data);
    console.log(trades);
  };

  useEffect(() => {
    if (profile._id) {
      fetchTrades();
    }
  }, [profile._id]);

  return (
      <Container>
        <SectionTitle>History</SectionTitle>
        <ContainerHistory>
        {trades.length ? (trades.map((trade, id)=> (
            <div key={id}>
              {!trade.close_datetime ? (
                  <div key={trade._id}>
                    {' '}
                    Bought {trade.nft_title} for {trade.open_price} ETH.
                  </div>
              ) : (
                  <div key={trade._id}>
                    {' '}
                    Sold {trade.nft_title} for {trade.open_price} ETH.
                  </div>
              )}
            </div>))) : <div>No trades.</div>
        }
        </ContainerHistory>
      </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const SectionTitle = styled.h3`
  text-align: center;
`;

const ContainerHistory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClickHolder = styled(Link)``;
