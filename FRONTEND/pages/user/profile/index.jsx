import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function Index() {

  const [user, setUser] = useState({})
  const [profile, setProfile] = useState({})
  const router = useRouter();

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
        })
        .catch((error) => {
          error = new Error();
        });
    
  };

  const handleLogout= async() =>  {
    
    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/auth/logout',
      data: {
          user_id: localStorage.getItem('user_id'),
          profile_id: localStorage.getItem('profile_id')
      },
    };
  // prevent the form from refreshing the whole page
  await axios(configuration)
  window.localStorage.removeItem("profile_id")
  window.localStorage.removeItem("user_id")

  router.push('/')
  }

  useEffect(() => {
    if(router.isReady){
    fetchUser();}
  }, [router.isReady]);


  return (
    <PrimaryLayout>
      <ProfileContainer>
        <Infos>
          <div>
            <h4>Email:</h4>
            <span>{user.email}</span>
          </div>
          <div>
            <h4>Firstname:</h4>
            <span>{profile.first_name}</span>
          </div>
          <div>
            <h4>Lastname:</h4>
            <span>{profile.last_name}</span>
          </div>
          <div>
            <h4>Address:</h4>
            <span>{profile.address}</span>
          </div>
          <div>
            <h4>Balance:</h4>
            <span>{profile.balance}</span>
            <Link href={{ pathname: `/user/profile/balance`, query: { user_id: user._id, profile_id: profile._id } }}>Add/withdraw funds</Link>
          </div>
        </Infos>
        <Logout>
          <button type="button" onClick={(e) => handleLogout(e)}>Logout</button>
          <Link href={{ pathname: `/user/profile/modif`, query: { user_id: user._id, profile_id: profile._id } }}>Modify</Link>
        </Logout>
      </ProfileContainer>
    </PrimaryLayout>
  );
}

const ProfileContainer = styled.div`
  height: 100%;
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Infos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--fading-bg);
  width: 50%;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 5rem;
    padding: 0.5rem 0.5rem;
    align-items: center;

    h4 {
      font-size: 1.5em;
      width: 20%;
    }

    span {
      font-size: 1.5em;
    }
  }
`;

const Logout = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 50%;
  a {
    font-size: 1.4em;
  }
`;
