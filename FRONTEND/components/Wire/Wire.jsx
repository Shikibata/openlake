import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Wire() {
  const router = useRouter();
  const profile_id = router.query.profile_id;
  const [balance, setBalance] = useState([]);
  const [amount, setAmount] = useState(0);
  const [added, setAdded] = useState(false);
  const [withdrawed, setWithdrawed] = useState(false);
  const [manipulatedAmount, setManipulatedAmount] = useState('');

  const getBalance = async () => {
    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/currentBalance',
      data: {
        user_id: localStorage.getItem('user_id'),
        profile_id: localStorage.getItem('profile_id'),
      },
    };
    // prevent the form from refreshing the whole page
    axios(configuration)
      .then((result) => {
        setBalance(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  //add funds
    const addFunds = async() => {
      let amountInt = parseFloat(amount)
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
      let amountInt = parseFloat(amount)
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
      router.push('../user/login');
    }
  }, []);

  useEffect(() => {
    if (router.isReady && window.localStorage.getItem('profile_id')) {
      getBalance();
    }
  }, [router.isReady]);

  return (
      <Container>
        <ContainerWire>
          {balance == 0 ? <div>0 ETH available.</div> :
          <div>{balance} ETH available.</div>}

      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        name="amount"
        min="0"
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <button onClick={(e) => addFunds(e)}>Deposit funds</button>
        <button onClick={(e) => withdrawFunds(e)}>Withdraw funds</button>
      </div>

      {added && !withdrawed ? (
        <div>Added {manipulatedAmount} ETH.</div>
      ) : (
        <div></div>
      )}

      {withdrawed && !added ? (
        <div>Withdrawed {manipulatedAmount} ETH.</div>
      ) : (
        <div></div>
      )}
        </ContainerWire>
      </Container>
  );
}

const Container = styled.div`
  padding: 1rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2rem;
  }
`;

const ContainerWire = styled.div`
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
    font-size: 1.1rem;
  }
  a,
  button {
    margin: 0;
    align-items: center;
    font-size: 1.1rem;
    width: 20%;
    text-align: center;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    box-sizing: border-box;
    background-color: var(--bg);
    cursor: pointer;

    :hover {
      background-color: var(--main);
      color: var(--fg);
    }
  }
  label {
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    font-size: 1.1em;
  }
  input {
    appearance: textfield;
    border-radius: 10px;
    border-color: var(--fg);
    padding: 0.3rem;

    :focus {
      outline-color: var(--main);
    }

  }

  
`;