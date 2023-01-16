import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

export default function Index() {
  const Form = () => {
    return (
      <FormContainer method={'POST'} action={''}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="password_verif">Password verification</label>
        <input type="password" id="password_verif" name="password_verif" />
        <button type="submit">Sign up</button>
        <a href={'/user/login'}>Already have an account ?</a>
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
