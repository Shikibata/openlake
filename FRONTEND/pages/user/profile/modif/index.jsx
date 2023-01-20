import styled from '@emotion/styled';
import PrimaryLayout from '../../../../components/layouts/primary/PrimaryLayout';

export default function Index() {
  return (
    <PrimaryLayout>
      <Container>
        <FormContainer method={'POST'} action={''}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" name="firstname" />
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" name="lastname" />
          <label htmlFor="Country">Country</label>
          <input type="text" id="country" name="country" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Modify</button>
          <a href={'/user/signup'}></a>
        </FormContainer>
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
