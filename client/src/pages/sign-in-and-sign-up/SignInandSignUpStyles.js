import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 70vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 8rem;

  @media screen and (max-width: 800px) {
    width: 100vw !important;
    flex-direction: column !important;
    justify-content: center !important;
  }
`;