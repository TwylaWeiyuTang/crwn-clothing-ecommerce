import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    touch-action: none;
    overflow: hidden;

    width: 100vw;
    height: 100vh;

    z-index: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props=> props.theme.body};
    color: ${props=> props.theme.text};

    svg {
        width: 10vw;
        height: auto;
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g {
            path{
                stroke: ${props => props.theme.text};
            }
        }
    }
`
const Text = styled(motion.span)`
    font-size: ${props => props.theme.fontxl};
    color: ${props => props.theme.text};
    padding-top: 0.5rem;
`

const Loader = () => {
  return (
    <Container>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="none">
            <g></g>
            <g><motion.path initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 2,
                ease: 'easeInOut'
            }}
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
            <Text initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
                yoyo: Infinity,
                ease: 'easeInOut'
            }}
            >
                Wibe Studio
            </Text>
    </Container>
  )
}

export default Loader