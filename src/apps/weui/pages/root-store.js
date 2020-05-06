import { combineReducers } from "redux";

import app from 'store/app/app'
import route from 'store/app/route'

export default combineReducers({
    app,route
});
