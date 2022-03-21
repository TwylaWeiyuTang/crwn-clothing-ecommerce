import React from 'react'
import './customButtonStyle.scss'

const CustomButtonComponent = ({children, ...otherProps}) => {
  return (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButtonComponent