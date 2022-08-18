import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const NavContainer = styled(motion.div)`
    width: 100vw;
    z-index: 6;
    position: absolute;
    top: 0;
    font-family: 'Poppins', sans-serif;

    display: flex;
    justify-content: right;
    align-items: right;

    transition: all 0.3s ease;

    @media screen and (max-width: 40em){
        top: ${props => props.click? '0' : `calc(-50vh - 4rem)`};
    }  
`

const MenuItems = styled(motion.ul)`
    position: relative;
    height: ${props => props.theme.navHeight};
    color: ${props => props.theme.text};
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 40%;

    @media screen and (max-width: 40em){
        flex-direction: column;
        padding: 2rem 0;
        height: 50vh;
    }  
`

const MenuItem = styled(motion.li)`
    text-transform: uppercase;
    color: ${props => props.theme.text};
    cursor: pointer;

    @media screen and (max-width: 40em){
        flex-direction: column;
        padding: 0.5rem 0;
    }  
`
const Navbar = () => {

    const [click, setClick] = useState(false)

    const {scroll} =useLocomotiveScroll()

    const handleScroll = (id) => {
        let elem = document.querySelector(id)
        setClick(!click)
        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0.0, 0.35, 1.0]
            })
    }


  return (
    <NavContainer 
    >
        <MenuItems 
        >
            <MenuItem
            onClick={() => handleScroll('#home')}
            whileHover={{scale: 1.1, y: -5}}
            whileTap={{scale: 0.9, y: 0}}>
                Home
            </MenuItem>
            <MenuItem
            onClick={() => handleScroll('.about')}
            whileHover={{scale: 1.1, y: -5}}
            whileTap={{scale: 0.9, y: 0}}>
                about
            </MenuItem>
            <MenuItem
            onClick={() => handleScroll('#shop')}
            whileHover={{scale: 1.1, y: -5}}
            whileTap={{scale: 0.9, y: 0}}>
                shop
            </MenuItem>
            <MenuItem
            onClick={() => handleScroll('#new-arrival')}
            whileHover={{scale: 1.1, y: -5}}
            whileTap={{scale: 0.9, y: 0}}>
                new arrival
            </MenuItem>
        </MenuItems>
    </NavContainer>
  )
}

export default Navbar