import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
` // because we need to use this style for different type of tags, Link and div
// so we write a general css that can be shared in different styled components

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;

    position: absolute;
    top: 0;
    z-index: 12;

    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`

export const LogoContainer = styled(Link)` // this is a styled link component
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: inherit;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`

export const OptionLink = styled(Link) `
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`