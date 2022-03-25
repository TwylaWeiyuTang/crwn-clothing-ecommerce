import React from 'react'
import { connect } from 'react-redux'
import './cartIconStyle.scss'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { ReactComponent as ShoppingIcon} from '../../assets/bag.svg'

const CartIconComponent = ({toggleCartHidden}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) // trigger the toggleCartHidden in cart reducer

export default connect (null, mapDispatchToProps)(CartIconComponent)
// make toggleCartHidden available as a props in the above component