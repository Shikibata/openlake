import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Wire() {
    const router = useRouter()
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
      let amountInt = parseInt(amount)
        const configuration = {
            method: 'post',
            url: 'http://localhost:3500/wire',
            data: {
                user_id: localStorage.getItem('user_id'),
                profile_id: localStorage.getItem('profile_id'),
                withdrawal: false,
                amount: amountInt
            },
          };
        // prevent the form from refreshing the whole page
        axios(configuration)
          .then((result) => {
            getBalance()
            setAdded(true)
            setWithdrawed(false)
            setManipulatedAmount(amountInt)
          })
          .catch((error) => {
            error = new Error();
          });
    }

  //withdraw funds

    const withdrawFunds = async() => {
      let amountInt = parseInt(amount)
        const configuration = {
            method: 'post',
            url: 'http://localhost:3500/wire',
            data: {
                user_id: localStorage.getItem('user_id'),
                profile_id: localStorage.getItem('profile_id'),
                withdrawal: true,
                amount: amountInt
            },
          };
        // prevent the form from refreshing the whole page
        axios(configuration)
          .then((result) => {
            getBalance()
            setAdded(false)
            setWithdrawed(true)
            setManipulatedAmount(amountInt)
          })
          .catch((error) => {
            error = new Error();
          });
    }
  

    useEffect(() => {
      if (!window.localStorage.profile_id) {
        router.push("../user/login")
    }
    }, []);

    useEffect(() => {
      if(router.isReady && window.localStorage.getItem("profile_id")){
      getBalance()
      }
  
    }, [router.isReady]);

  return (
    <div>
      <div>{balance} ETH available.</div>

            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" min="0" onChange={(e) => setAmount(e.target.value)}/>
            
            <div>
                <button onClick={(e) => addFunds(e)}>Deposit funds</button>
                <button onClick={(e) => withdrawFunds(e)}>Withdraw funds</button>
            </div>
            
            {
              added && !withdrawed ? <div>Added {manipulatedAmount} ETH.</div> : <div></div>
            }

            {
              withdrawed && !added ? <div>Withdrawed {manipulatedAmount} ETH.</div> : <div></div>
            }

        </div>
    )
}
