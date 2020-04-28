import { combineReducers } from "redux";
import line from "./front/lineReducer";
import instance from "./front/instanceReducer";
import app from "./front/appReducer";
import payment from "./front/paymentReducer";
import order from "./front/orderReducer";
import route from "./front/routeReducer";
import user from "./front/userReducer";
import ss_server from "./front/ssServerReducer";


import setting from "./admin/settingReducer";
import eth_address from "./admin/ethAddressReducer";

import admin_user from "../view/pages/admin/user/store";
import admin_line from "../view/pages/admin/line/store";
import admin_instance from "../view/pages/admin/instance/store";
import admin_order from "../view/pages/admin/order/store";
import sidebar from "../components/sider-menu/main-sidebar/store";

export default combineReducers({
  instance,
  line,
  order,
  user,
  payment,
  route,
  eth_address,
  setting,
  sidebar,
  ss_server,
  app,
  admin_order,
  admin_user,
  admin_line,
  admin_instance
});
