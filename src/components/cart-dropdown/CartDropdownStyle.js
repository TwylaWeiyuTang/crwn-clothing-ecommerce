import styled from 'styled-components'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 70px;
    z-index: 5;
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItemContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const CartDropdownButton = styled(CustomButtonComponent)`
    margin-top: auto;
`

