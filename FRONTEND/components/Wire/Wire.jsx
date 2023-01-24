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
    const [amount, setAmount] = useState(0)
   

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

    //add funds

    const addFunds = async() => {
        const configuration = {
            method: 'post',
            url: 'http://localhost:3500/wire',
            data: {
                user_id: localStorage.getItem('user_id'),
                profile_id: localStorage.getItem('profile_id'),
                withdrawal: false,
                amount
            },
          };
        // prevent the form from refreshing the whole page
        axios(configuration)
          .then((result) => {
            setBalance((balance + amount))
            console.log(result)
          })
          .catch((error) => {
            error = new Error();
          });
    }

    //withdraw funds

    const withdrawFunds = async() => {
        const configuration = {
            method: 'post',
            url: 'http://localhost:3500/wire',
            data: {
                user_id: localStorage.getItem('user_id'),
                profile_id: localStorage.getItem('profile_id'),
                withdrawal: true,
                amount
            },
          };
        // prevent the form from refreshing the whole page
        axios(configuration)
          .then((result) => {
            setBalance((balance - amount))
            console.log(result)
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

            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" onChange={(e) => setAmount(e.target.value)}/>
            
            <div>
                <button onClick={(e) => addFunds(e)}>Deposit funds</button>
                <button onClick={(e) => withdrawFunds(e)}>Withdraw funds</button>
            </div>
            
        </div>
    )
}