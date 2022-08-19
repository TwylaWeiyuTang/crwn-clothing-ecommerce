import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 8rem;

  @media screen and (max-width: 800px) {
    width: 100vw;
    flex-direction: column;
  }
`;