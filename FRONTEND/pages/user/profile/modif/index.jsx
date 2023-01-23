import styled from '@emotion/styled';
import PrimaryLayout from '../../../../components/layouts/primary/PrimaryLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';


export default function Index() {
  const router = new useRouter()
  const [user, setUser] = useState({})
  const [profile, setProfile] = useState({})
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [updated, setUpdated] = useState(false);
    const [_id, set_ID] = useState()


    useEffect(() => {
      // Perform localStorage action
      set_ID(localStorage.getItem('user_id'))
    }, [])


    const configurationUpdate = {
      method: 'patch',
      url: 'http://localhost:3500/users',
      data: {
        _id,
        email,
        password,
        lastName,
        firstName,
        address,
      },
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      // prevent the form from refreshing the whole page
      axios(configurationUpdate)
        .then((result) => {
          setUpdated(true);
        })
        .catch((error) => {
          error = new Error();
        });
      
    };


  const fetchUser = async () => {   
  
    const configuration = {
        method: 'post',
        url: 'http://localhost:3500/profile',
        data: {
            user_id: localStorage.getItem('user_id'),
            profile_id: localStorage.getItem('profile_id')
        },
      };
    // prevent the form from refreshing the whole page
    axios(configuration)
      .then((result) => {
        setUser(result.data.user)
        setProfile(result.data.profile)
        setEmail(result.data.user.email)
        setFirstName(result.data.profile.first_name)
        setLastName(result.data.profile.last_name)
        setAddress(result.data.profile.address)
      })
      .catch((error) => {
        error = new Error();
      });
  
};

useEffect(() => {
  if(router.isReady){
  fetchUser();}
}, [router.isReady]);

  return (
    <PrimaryLayout>
      <Container>
      {!updated?
        <FormContainer method={'POST'} action={''}>
          <label htmlFor="username">Email</label>
          <input type="text" id="username" name="username" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" name="firstname" defaultValue={profile.first_name} onChange={(e) => setFirstName(e.target.value)}/>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" name="lastname" defaultValue={profile.last_name} onChange={(e) => setLastName(e.target.value)}/>
          <label htmlFor="Country">Address</label>
          <input type="text" id="country" name="country" defaultValue={profile.address} onChange={(e) => setAddress(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" defaultValue={user.password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
          Modify
          </button>
        </FormContainer>
        : <Link href="/">Profile was updated. Click to go back to homepage.</Link>}
      </Container>
    </PrimaryLayout>
  );
}

const Container = styled.div`
  padding-top: 10rem;
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
