import React from 'react';

// import Login from "../view/pages/Login";
// import Setting from "../view/pages/admin/Setting";
// import EthAddress from "../view/pages/admin/EthAddress";
// import AdminOrder from "../view/pages/admin/order/Order";
// import AdminLine from "../view/pages/admin/line/Line";
// import AdminInstance from "../view/pages/admin/instance/Instance";
// import AdminUser from "../view/pages/admin/user/User";
import AdminDashboardDashboardV1 from "../pages/admin/dashboard/dashboard_v1";
import AdminDashboardDashboardV2 from "../pages/admin/dashboard/dashboard_v2";
import AdminDashboardDashboardV3 from "../pages/admin/dashboard/dashboard_v3";


import {menus} from "./menus"

export const authPrefixes = ["admin","user"];
export const defaultRoute = "admin/dashboard/dashboard_v3";

export const routes = {
    "index": {children: (<div>home</div>)},
    "404": {children: (<div>404</div>)},
    //login": {children: (<Login/>)},
    // "admin/setting": {children: (<Setting/>)},
    // "admin/eth-address": {children: (<EthAddress/>)},
    // "admin/order": {children: (<AdminOrder/>)},
    // "admin/line": {children: (<AdminLine/>)},
    // "admin/instance": {children: (<AdminInstance/>)},
    // "admin/user": {children: (<AdminUser/>)},
    "admin/dashboard/dashboard_v1": {children: (<AdminDashboardDashboardV1 />)},
    "admin/dashboard/dashboard_v2": {children: (<AdminDashboardDashboardV2 />)},
    "admin/dashboard/dashboard_v3": {children: (<AdminDashboardDashboardV3 />)},
    "admin/widgetsnew": {children: (<div>admin/widgetsnew</div>)},
};


export const sidebar = {
    activeMenu:"admin/order",
    clickedMenu:"admin/order",
    openMenu:"admin",
    menus
};
