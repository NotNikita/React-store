import { combineReducers } from "redux"

import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})
//This component combines all our else
//states 2ghether