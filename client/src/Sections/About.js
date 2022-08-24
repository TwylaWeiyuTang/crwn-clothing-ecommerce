import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/images/image1.jpg'
import img2 from '../assets/images/image2.jpg'
import img3 from '../assets/images/image3.jpg'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    display: flex;

    margin: 0 auto;
    margin-bottom: 5rem;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`
const Title2 = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: rgba(255, 0, 80, 0.6);

    position: absolute;
    top: 1rem;
    left: 4%;
    z-index: 5;
`

const Left = styled.div`
    font-size: ${props => props.theme.fontlg};
    font-weight: 200;
    width: 50%;
    position: relative;
    z-index: 5;
    margin-top: 20%;
    text-align: left;
    font-family: 'Roboto', sans-serif;
`
const Right = styled.div`
    width: 50%;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }

    .small-img-1 {
        width: 40%;
        position: absolute;
        right: 95%;
        bottom: 10%;
    }

    .small-img-2 {
        width: 40%;
        position: absolute;
        left: 80%;
        bottom: 30%;
    }
`

const About = () => {
  return (
    <Section id="fixed-target" className='about'>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            About Us
        </Title>
        <Title2 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            About Us
        </Title2>
        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We're fashion studio based in california. 
        We create unique designs that will blow your mind. We also design unique jewellary pieces. 
        Fashion is an ART that can not be grasped by everyone.
        <br/>
        <br/>
        <br/>
        We are very dedicated to making our products. 
        We offer unique and creative products to a wide range of people. 
        We have a variety of styles, but for most people, all of the options are in the box. 
        We specialize in making things that make you happy.
        <br/>
        <br/>
        <br/>
        We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. 
        We are always looking to make something that is easy for everyone.
        </Left>
        <Right>
            <img src={img1} alt='about us' />
            <img src={img2} data-scroll data-scroll-speed="5" alt='about us' className='small-img-1'/>
            <img src={img3} data-scroll data-scroll-speed="-2" alt='about us' className='small-img-2'/>
        </Right>
    </Section>
  )
}

export default About