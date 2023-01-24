import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Index() {
  const Form = () => {
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [register, setRegister] = useState(false);

    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/users',
      data: {
        email,
        password,
        lastName,
        firstName,
        address,
      },
    };
    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      axios(configuration)
        .then((result) => {
          setRegister(true);
        })
        .catch((error) => {
          error = new Error();
        });
      this.props.history.push('/');
    };

    return (
      <FormContainer method={'post'}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Sign up
        </button>
        <a href={'/user/login'}>Already have an account ?</a>
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </FormContainer>
    );
  };

  return (
    <Container>
      <LeftContainer>
        <Logo>
          <Link href={'/'}>
            <Image
              priority
              src={'/assets/logo.svg'}
              height={60}
              width={60}
              alt=""
            />
          </Link>
        </Logo>
      </LeftContainer>
      <RightContainer>
        <FormTextAbove>
          <h3>Join the boat</h3>
          <span>Sign up and explore the awesome world of OpenLake !</span>
        </FormTextAbove>
        <Form />
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 1920px;
`;

const LeftContainer = styled.div`
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 600px;
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 35%;
    background-image: url('/assets/signuppage.jpeg');
    background-size: cover;
    background-position: center center;
  }
`;

const Logo = styled.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  height: 70px;
  flex-flow: row nowrap;
`;

const RightContainer = styled.div`
  margin: auto 0;
  width: 100%;

  @media (min-width: 578px) {
    max-width: 75%;
    margin: 125px auto;
  }

  @media (min-width: 912px) {
    padding: 0px 100px;
    max-width: 686px;
  }
`;
const FormContainer = styled.form`
  display: table;
  min-width: 350px;
  margin: 0 auto;
  padding: 1rem;

  label {
    display: table;
    width: 100%;
    margin-bottom: 0.7rem;
    color: var(--fg);
  }
  input {
    display: table;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 1.4rem;
    border: none;
    background-color: var(--fading-bg);
  }
  input:focus {
    outline-color: var(--main);
  }

  button {
    display: table;
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    box-sizing: border-box;
    background-color: var(--main);
    color: #fff;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  button:hover {
    background-color: var(--fg);
    color: var(--bg);
  }

  a {
    margin-top: 15px;
  }
  a:hover {
    color: var(--main);
  }
`;

const FormTextAbove = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 40px;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 14px;
    text-align: center;
  }

  span {
    margin: 20px auto;
  }
`;

const ThemeSelector = styled.div`
  position: absolute;
  right: -15px;
  top: 14px;
`;
