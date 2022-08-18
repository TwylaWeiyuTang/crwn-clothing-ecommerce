import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/video2.mp4'
import { motion } from 'framer-motion'

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;

        @media screen and (max-width: 48em){
            object-position: center 10%;
        }
    }

    @media screen and (max-width: 30em){
            object-position: center 50%;
        }
    
`

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.3)`};
`

const Title = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: -1%;
    left: -1%;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 0, 80, 0.8);

    div {
        display: flex;
        flex-direction: row;
    }

    h1{
        /* font-family: 'Poppins', sans-serif; */
        font-size: ${props=> props.theme.fontBig};
        /* text-shadow: 1px 1px 1px ${props => props.theme.body}; */
        @media screen and (max-width: 30em){
            font-size: calc(5rem + 8vw)
        }
    }

    h2{
        font-family: 'Poppins', sans-serif;
        font-size: ${props=> props.theme.fontlg};
        color: ${props => props.theme.text};
        /* text-shadow: 1px 1px 1px ${props => props.theme.body}; */

        text-transform: capitalize;
        font-weight: 300;

        @media screen and (max-width: 30em){
            font-size: ${props => props.theme.fontmd};
            margin-top: -1.5rem;
        }
    }
`

const Title2 = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 1%;
    left: 1%;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);

    div {
        display: flex;
        flex-direction: row;
    }

    h1{
        /* font-family: 'Kaushan Script', cursive; */
        font-size: ${props=> props.theme.fontBig};
        /* text-shadow: 1px 1px 1px ${props => props.theme.body}; */
        @media screen and (max-width: 30em){
            font-size: calc(5rem + 8vw)
        }
    }
`

const Title3 = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(0, 242, 234, 0.8);

    div {
        display: flex;
        flex-direction: row;
    }

    h1{
        /* font-family: 'Kaushan Script', cursive; */
        font-size: ${props=> props.theme.fontBig};
        /* text-shadow: 1px 1px 1px ${props => props.theme.body}; */
        @media screen and (max-width: 30em){
            font-size: calc(5rem + 8vw)
        }
    }
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <DarkOverlay />
        <Title 
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
        }}
        >
            <div>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.3}}
                data-scroll data-scroll-delay='0.13' data-scroll-speed="4">V</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.6}}
                data-scroll data-scroll-delay='0.09' data-scroll-speed="4">i</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.9}}
                data-scroll data-scroll-delay='0.06' data-scroll-speed="4">b</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.2}}
                data-scroll data-scroll-delay='0.04' data-scroll-speed="4">e</motion.h1>
            </div>
            <motion.h2 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 4, ease: 'easeInOut'}}
            data-scroll data-scroll-delay='0.04' data-scroll-speed="2">Inspire. Create. Believe</motion.h2>
        </Title>
        {/* <Title2 
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
        }}
        >
            <div>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.3}}
                data-scroll data-scroll-delay='0.13' data-scroll-speed="4">V</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.6}}
                data-scroll data-scroll-delay='0.09' data-scroll-speed="4">i</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.9}}
                data-scroll data-scroll-delay='0.06' data-scroll-speed="4">b</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.2}}
                data-scroll data-scroll-delay='0.04' data-scroll-speed="4">e</motion.h1>
            </div>
        </Title2>

        <Title3 
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
        }}
        >
            <div>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.3}}
                data-scroll data-scroll-delay='0.13' data-scroll-speed="4">V</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.6}}
                data-scroll data-scroll-delay='0.09' data-scroll-speed="4">i</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 0.9}}
                data-scroll data-scroll-delay='0.06' data-scroll-speed="4">b</motion.h1>
                <motion.h1  
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.2}}
                data-scroll data-scroll-delay='0.04' data-scroll-speed="4">e</motion.h1>
            </div>
        </Title3> */}
        <video src={MainVideo} type='video/mp4' autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo