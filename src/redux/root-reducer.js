import { combineReducers } from "redux"

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})
//This component combines all our else
//states 2ghether