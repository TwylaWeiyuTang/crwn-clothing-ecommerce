// rootReducer represents all the states of our application
// it combines all the other states together in one file
import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers ({
    user: userReducer, // this is a big json object that is only about user
    cart: cartReducer
})