import { CartActionTypes } from "./cartTypes";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

// payload is optional, because we are not passing payload into our cart reducer, so we don't need
// to set up payload here

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})