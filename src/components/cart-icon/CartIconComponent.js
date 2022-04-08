import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './CartIconStyle'

const CartIconComponent = ({toggleCartHidden, itemCount}) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) // trigger the toggleCartHidden in cart reducer

const mapStateToProps = createStructuredSelector ({ // pull off cart state from root reducer
  itemCount: selectCartItemsCount
  // whole state gotten passed in, and it goes to selectors to reference that state
  // selectCartItemsCount refers to selectCartItems, selectCartItems refers to selectCart, which
  // uses cart state from the whole state
})
// this is a selector, because it gets a state, and then pull off a small portion from that state

export default connect (mapStateToProps, mapDispatchToProps)(CartIconComponent)
// make toggleCartHidden available as a props in the above component