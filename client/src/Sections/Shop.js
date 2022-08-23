import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import img1 from '../assets/images/men-basic.jpg'
import img2 from '../assets/images/womens.jpg'
import img3 from '../assets/images/dress.jpg'
import img4 from '../assets/images/coats.jpg'
import img5 from '../assets/images/blazers.jpg'
import img6 from '../assets/images/shirts.jpg'
import img7 from '../assets/images/accessories.jpg'
import img8 from '../assets/images/shoes.jpg'
import img9 from '../assets/images/hats.jpg'
import img10 from '../assets/images/occasion wear.jpg'

import { motion } from 'framer-motion'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    text-shadow: 2px 2px 2px rgba(0, 242, 234, 0.8);
    color: rgba(255, 0, 80, 0.8);
    position: absolute;
    writing-mode: vertical-lr;
    z-index: 11;
`
const Left = styled.div`
    width: 20rem;
    background-color: #FFED4E;

    min-height: 100vh;
    z-index: 5;

    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
`

const Right = styled.div`
    position: absolute;
    left: 30%;
    min-height: 100vh;

    background-color: none;
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 5rem;
        margin: 0 2rem;
    }
`

const Item = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin-right: 6rem;

    img {
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    h1 {
        display: inline-block;
        width: fit-content;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
`

const Product = ({img, title=''}) => {
    return(
        <Item
        initial={{filter: 'grayscale(100%)'}}
        whileInView={{filter: 'grayscale(0%)'}}
        transition={{duration: 0.5}}
        viewport={{once: false, amount: 'all'}}
        >
            <img src={img} alt={title}/>
            <h1>{title}</h1>
        </Item>
    )
}

const Shop = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const horizontalRef = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current
        let scrollingElement = horizontalRef.current

        let pinWrapWidth = scrollingElement.offsetWidth

        let tl = gsap.timeline()

        setTimeout(() => {
            tl.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App', // locomotive element
                    scrub: true,
                    pin: true,
                    // markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none',
            })

            // horizontal scrolling
            tl.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App', // locomotive element
                    scrub: true,
                    // markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                x: -pinWrapWidth,
                ease: 'none',
            })

            ScrollTrigger.refresh()
        }, 1000)

        return () => {
            // Let's clear instances
            tl.kill()
        }
    })
  return (
    <div>
    <Section ref={ref}>
        {/* <Title data-scroll data-scroll-speedd="-1">New Collection</Title> */}
        <Left>
            <Title>New Collection</Title>
        </Left>

        <Right ref={horizontalRef}>
            <Product img={img1} title='Mens' />
            <Product img={img2} title='Womens' />
            <Product img={img3} title='Dresses' />
            <Product img={img4} title='Coats' />
            <Product img={img5} title='Blazers' />
            <Product img={img6} title='Shirts' />
            <Product img={img7} title='Jwellery' />
            <Product img={img8} title='Shoes' />
            <Product img={img9} title='Hats' />
            <Product img={img10} title='Special Edition' />
        </Right>
    </Section>
    </div>
  )
}

export default Shop