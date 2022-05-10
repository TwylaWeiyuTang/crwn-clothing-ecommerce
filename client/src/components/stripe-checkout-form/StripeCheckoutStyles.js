import styled from "styled-components";
import CustomButtonComponent from "../custom-button/CustomButtonComponent";

export const CardContainer = styled.div`
    width: 30vw;

    @media screen and (max-width: 800px) {
        width: 80vw;
    }
`

export const PayButtonContainer = styled(CustomButtonComponent)`
width: 40%;
  opacity: 0.7;
  margin-left: auto;
  margin-right: auto;


  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
  }
`