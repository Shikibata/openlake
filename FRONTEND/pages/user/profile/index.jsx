import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import MyNFTs from '../../../components/User/MyNFTs';
import MyTrades from '../../../components/User/MyTrades';

export default function Index() {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const router = useRouter();

  const fetchUser = async () => {
    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/profile',
      data: {
        user_id: localStorage.getItem('user_id'),
        profile_id: localStorage.getItem('profile_id'),
      },
    };
    // prevent the form from refreshing the whole page
    axios(configuration)
      .then((result) => {
        setUser(result.data.user);
        setProfile(result.data.profile);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const handleLogout = async () => {
    const configuration = {
      method: 'post',
      url: 'http://localhost:3500/auth/logout',
      data: {
        user_id: localStorage.getItem('user_id'),
        profile_id: localStorage.getItem('profile_id'),
      },
    };
    // prevent the form from refreshing the whole page
    await axios(configuration);
    window.localStorage.removeItem('profile_id');
    window.localStorage.removeItem('user_id');

    router.push('/');
  };

  useEffect(() => {
    if (!window.localStorage.profile_id) {
      router.push('../user/login');
    }
  }, []);

  useEffect(() => {
    if (router.isReady && window.localStorage.profile_id) {
      fetchUser();
    }
  }, [router.isReady]);

  console.log(profile);

  return (
    <PrimaryLayout>
      <ProfileContainer>
        <Logout>
          <button type="button" onClick={() => handleLogout()}>
            Logout
          </button>
          <Link
            href={{
              pathname: `/user/profile/modif`,
              query: { user_id: user._id, profile_id: profile._id },
            }}
          >
            Modify
          </Link>
        </Logout>
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
            <span>{profile.balance} ETH </span>
          </div>
          <div>
            <Withdraw
              href={{
                pathname: `/user/profile/balance`,
                query: { user_id: user._id, profile_id: profile._id },
              }}
            >
              Add/withdraw funds
            </Withdraw>
          </div>
        </Infos>
        <SectionMy>
          <MyNFTs {...profile} />
          <MyTrades {...profile} />
        </SectionMy>
      </ProfileContainer>
    </PrimaryLayout>
  );
}

const ProfileContainer = styled.div`
  height: auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: hidden;
`;

const Withdraw = styled(Link)`
  font-size: 1em;
  width: 100%;
  text-align: center;

  :hover {
    color: var(--main);
  }
`;

const Infos = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
  }
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

    @media (max-width: 1024px) {
      padding: 0.5rem 0rem;
    }

    h4 {
      font-size: 1em;
      width: 20%;
    }

    span {
      font-size: 1em;
    }
  }
`;

const Logout = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 50%;
  a {
    font-size: 1em;
  }

  button {
    border: none;
    background: none;
    font-size: 1em;
  }

  button:hover,
  a:hover {
    color: var(--main);
    cursor: pointer;
  }
`;

const SectionMy = styled.div`
  margin-top: 2rem;
  display: flex;
  max-width: 1920px;
  width: 90%;
  justify-content: center;
`;
