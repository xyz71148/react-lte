import { combineReducers } from "redux";
import app from "./front/appReducer";
import route from "./front/routeReducer";
import user from "./front/userReducer";
import navigation from "../pages/navigation"

export default combineReducers({
  user,
  route,
  navigation,
  app,
});
