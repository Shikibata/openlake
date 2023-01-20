import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';

export default function Index() {

  return (
    <PrimaryLayout>
      <ProfileContainer>
        <Infos>
          <div>
            <p></p>
            <h4>Username:</h4>
            <span>Pussiner</span>
          </div>
          <div>
            <h4>Firstname:</h4>
            <span>Human</span>
          </div>
          <div>
            <h4>Lastname:</h4>
            <span>Mark</span>
          </div>
          <div>
            <h4>Address:</h4>
            <span>Belgium</span>
          </div>
          <div>
            <h4>Balance:</h4>
            <span>25 ETH</span>
          </div>
        </Infos>
        <Logout>
          <a>Logout</a>
          <a>modifier</a>
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
