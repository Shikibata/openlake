import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Wire() {
    const router = new useRouter()
    const profile_id = router.query.profile_id
    const [balance, setBalance] = useState([])
    const [withdrawal, setWithdrawal] = useState(false)
    const [launchWire, setLaunchWire] = useState(false)

    const getBalance = async() => {
        const configuration = {
            method: 'post',
            url: 'http://localhost:3500/currentBalance',
            data: {
                user_id: localStorage.getItem('user_id'),
                profile_id: localStorage.getItem('profile_id')
            },
          };
        // prevent the form from refreshing the whole page
        axios(configuration)
          .then((result) => {
            setBalance(result.data)
          })
          .catch((error) => {
            error = new Error();
          });
    }

    useEffect(() => {
        if(router.isReady){
        getBalance()
        }
    
      }, [router.isReady]);

    return(
        <div>
            <div>{balance} ETH available.</div>
            {launchWire === false ?
            <div>
                <button onClick={() => setLaunchWire(true)}>Deposit funds</button>
                <button>Withdraw funds</button>
            </div>
            :
                (
                    withdrawal ? 
                    <div>
                        lol
                    </div>
                    :
                    <div>
                        lol
                    </div>
                )
            }
        </div>
    )
}