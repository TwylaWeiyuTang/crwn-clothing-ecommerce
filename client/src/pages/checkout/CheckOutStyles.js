import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 75%;
  min-height: 100vh;
  position: relative;

  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    margin: 30px auto 0;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 600px) {
    &:nth-child(1) {
      width: 20%;
    }
  }
  
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

export const WarningContainer = styled.div`
  background-color: rgba(255, 213, 63, 40%);
  border: 1px solid rgba(255, 213, 63);
  border-radius: 15px;
  width: 50vw;
  text-align: center;

  margin-top: 60px;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 24px;
  color: red;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    width: 70vw;
  }
`;