import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function MyNFTs({...profile}) {

    const [trades, setTrades] = useState([])
    const router = new useRouter()
    


    const fetchTrades = async () => {
        const data = await axios.get(`http://localhost:3500/myTrades/${profile._id}`, { params: { id: profile._id } });
        setTrades(data.data)
        console.log(trades)
    };

    
    useEffect(() => {
        if(profile._id){
        fetchTrades();
    }
    
    }, [profile._id]);

    


        return trades.map((trade, id) => (
        <div>
            {!trade.close_datetime ?
            <div key={trade._id}> Bought {trade.nft_title} for {trade.open_price} ETH.</div>
            :
            <div key={trade._id}> Sold {trade.nft_title} for {trade.open_price} ETH.</div>  
            }
        </div>))
}