import { combineReducers } from "redux";
import navigation from "./navigation"
import route from "store/app/route"
import app from "store/app/app"

export default combineReducers({
  navigation,route,app
});
