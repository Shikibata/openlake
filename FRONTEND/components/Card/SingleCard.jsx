
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import axios from "axios";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router'





export default function SingleCard() {
    const [nft, setNft] = useState([]);
    const [profile, setProfile] = useState([]);
    const router = useRouter()
    const id = "63c6bcda7f2faa98d06b2668"
    console.log(id)
    let loggedUserID

    useEffect(() => {
        // Perform localStorage action
        loggedUserID = localStorage.getItem('profile_id')
    }, [])
    

    const fetchCard = async () => {
        
        const data = await axios.get(`http://localhost:3500/explore/${id}`)
        setNft(data.data);
    }

    useEffect( () => {
        fetchCard();
    }, [])

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
            {nft.profile_id === loggedUserID ? <Link href={{ pathname: `/closeTrade/`, query: { id: id } }}>Sell</Link> :
            <Link href={{ pathname: `/openTrade/`, query: { id: id } }}>Buy</Link>
            }
        
        
        </div>
    )
}