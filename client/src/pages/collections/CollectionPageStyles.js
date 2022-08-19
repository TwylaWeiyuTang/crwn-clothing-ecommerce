import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding-top: 8rem;
  margin: 0 3rem 0 3rem;

  @media screen and (max-width: 800px) {
      align-items: center;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 4rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;