import React, { useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import jQuery from 'jquery'

import './checkoutSuccessStyle.scss'

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SuccessTag = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: ${props => props.theme.fontxl};

  display: inline-block;
`

const CheckoutSuccess = () => {
  useEffect(() => {
    // for the animation above 'home' button
    function confetti() {
        $.each($(".particletext.confetti"), function(){
        var confetticount = ($(this).width()/50)*10;
        for(var i = 0; i <= confetticount; i++) {
            $(this).append('<span class="particle c' + $.rnd(1,10) + '" style="top:' + $.rnd(40,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,12) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
        }
        });
    }

    jQuery.rnd = function(m,n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor( Math.random() * (n - m + 1) ) + m;
    }

    confetti()

  })

  return (
    <Section>
      <div className="particletext confetti"> </div>
        <SuccessTag>Thank you for you order!</SuccessTag>
    </Section>
  )
}

export default CheckoutSuccess