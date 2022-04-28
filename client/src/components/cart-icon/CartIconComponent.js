import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './CartIconStyle'

const CartIconComponent = () => {
  const itemCount = useSelector(selectCartItemsCount)
  // pull off cart state from root reducer
  // whole state gotten passed in, and it goes to selectors to reference that state
  // selectCartItemsCount refers to selectCartItems, selectCartItems refers to selectCart, which
  // uses cart state from the whole state
// this is a selector, because it gets a state, and then pull off a small portion from that state
  const dispatch = useDispatch()
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIconComponent
// make toggleCartHidden available as a props in the above component