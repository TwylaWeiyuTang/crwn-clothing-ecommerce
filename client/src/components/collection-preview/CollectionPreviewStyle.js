import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media screen and (max-width: 800px) {
      align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  width: fit-content;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 80),
    rgba(255, 0, 80) 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &::before{
  content: '';
  background: rgba(255, 0, 80);
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

&:hover {
 background-position: 0;
}

&:hover::before{
  width: 100%;
}
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;