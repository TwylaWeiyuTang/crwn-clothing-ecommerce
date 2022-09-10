import styled from 'styled-components'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 25vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid grey;
    background-color: white;
    top: 80px;
    right: 70px;
    z-index: 5;

    @media screen and (max-width: 600px) {
        width: 70vw;
    }
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: auto auto;
`

export const CartItemContainer = styled.div`
    height: 46vh;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const CartDropdownButton = styled(CustomButtonComponent)`
    position: absolute;
    bottom: 0;
    align-items: center;
    margin-bottom: 15px;
`

