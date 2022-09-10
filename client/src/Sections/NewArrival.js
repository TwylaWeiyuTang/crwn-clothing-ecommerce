import React, {useRef, useLayoutEffect} from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import img1 from '../assets/images/new-shirts.jpg'
import img2 from '../assets/images/new-coat.jpg'
import img3 from '../assets/images/new-hat.jpg'
import img4 from '../assets/images/new-jwellery.jpg'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;

    margin: 0 auto;
    justify-content: center;
    align-items: center;

    /* background-color: yellow; */
`

const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -50%);
    width: 75vw;
    height: 80vh;

    box-shadow: 0 0 0 6vw ${props => props.theme.text};
    border-width: 10px 10px 100px 50vw;
    border-style: solid;
    border-color: #FF3977;
    z-index: 11;

    @media screen and (max-width: 600px) {
        width: 100vw !important;
        left: unset !important;
        transform: translate(0%, -50%);

        box-shadow: 0 0 0 10vh ${props => props.theme.text};
    }
`

const Overlay2 = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-41%, -60%);
    width: 30vw;
    height: 80vh;

    /* box-shadow: 0 0 0 4vw ${props => props.theme.text}; */
    border: 5px solid rgba(0, 242, 234, 0.8);
    z-index: 11;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Roboto', sans-serif;;
    font-weight: 300;

    text-shadow: 1px 1px 1px ${props => props.theme.text};
    color: ${props => props.theme.body};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`
const Text = styled.div`
    font-size: 1.2rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;

    width: 25%;
    position: absolute;
    padding: 2rem;
    top: 10;
    right: 0;
    z-index: 11;

    @media screen and (max-width: 600px) {
        left: 0;
        right: unset !important;
        width: 50vw !important;
        font-size: 1rem !important;
        top: unset;
    }
`

const Container = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-12%, 0);
    width: 25vw;
    height: auto;

    /* width: 65%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 49vw;
        transform: translate(-1%, 0);
    }
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;

    img {
        width: 100%;
        height: auto;
        z-index: 0;
    }
`

const Product = ({img, title=''}) => {
    return(
        <Item
        >
            <img src={img} alt={title}/>
            <h1>{title}</h1>
        </Item>
    )
}

const NewArrival = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const ScrollingRef = useRef(null)

    useLayoutEffect(() => {
        let element = ref.current
        let scrollingElement = ScrollingRef.current
        let tl = gsap.timeline()

        setTimeout(() => {
            tl.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.App', // locomotive element
                    scrub: true,
                    pin: true,
                    // markers: true
                },
                // we need to increase the scrolling height of this element same as scrolling width
                ease: 'none',
            })

            // Vertical scrolling
            tl.fromTo(scrollingElement, 
                {
                    y:'0'
                },
                {
                    y: '-100%',
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: 'bottom top',
                    scroller: '.App', // locomotive element
                    scrub: true,
                },
                // we need to increase the scrolling height of this element same as scrolling width
                
            })

            ScrollTrigger.refresh()
        }, 1000)

        return () => {
            // Let's clear instances
            tl.kill()
            // ScrollTrigger.kill()
        }
    })
  return (
    <div>
    <Section ref={ref} id='new-arrival'>
        <Overlay />
        {/* <Overlay2 /> */}
        <Title data-scroll data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        >New Arrivals
        </Title>
        
        <Container ref={ScrollingRef}>
            <Product img={img1} title='Shirts' />
            <Product img={img2} title='Coats' />
            <Product img={img3} title='Hats' />
            <Product img={img4} title='Accessories' />
        </Container>

        <Text data-scroll  data-scroll-speed="-2">
        There is new collection available for cool clothes in all sizes. 
        This collection is a great way to find a new look for you. 
        It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
        <br/>
        <br/>
        <br/>
        The first line of clothing you will see on this collection is for men. 
        The collection also includes three new styles for women.
        <br/>
        <br/>
        <br/>
        Give it a try and experience a new look.
        </Text>
    </Section>
    </div>
  )
}

export default NewArrival