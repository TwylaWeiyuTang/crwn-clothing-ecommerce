import styled, {css} from 'styled-components'

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

const googleSignInStyles = css`
    background-color: rgba(255, 0, 80);
    color: white;
    border: none;

    &:hover {
      background-color: #FF3977;
      border: none;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) { // if googleSignIn props is true
        return googleSignInStyles // return this style
    }

    return props.inverted ? invertedButtonStyle : buttonStyles
    // if inversted props is true, if true, return invertedButtonStyle, otherwise return buttonStyles

}

export const CustomButtonContainer = styled.button `
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Encode Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center; /* To make sure the text in the button is always aligned in the center */

  ${getButtonStyles}

  @media screen and (max-width: 600px) {
       font-size: 15px;
       padding: 0;
    }
`