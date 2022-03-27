import { CartActionTypes } from "./cartTypes"
import { addItemToCart } from "./cartUtils"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case CartActionTypes.ADD_ITEM:
            return {
                 ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // action.payload here is the item we want to add into our cart
            }

        default:
            return state
    } 
}

export default cartReducer