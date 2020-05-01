import { combineReducers } from "redux";
import user from './account/store'
import order from './orders/store'
import instance from './instance/store'
import payment from './plan/store'

import app from '../store/app'
import route from '../store/route'
import ss_server from '../store/ss_server'

export default combineReducers({
    user,app,order,instance,payment,route,ss_server
});
