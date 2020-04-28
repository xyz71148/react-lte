import React from 'react';

import Login from "../view/pages/Login";
import Setting from "../view/pages/admin/Setting";
import EthAddress from "../view/pages/admin/EthAddress";
import AdminOrder from "../view/pages/admin/order/Order";
import AdminLine from "../view/pages/admin/line/Line";
import AdminInstance from "../view/pages/admin/instance/Instance";
import AdminUser from "../view/pages/admin/user/User";
import {MdBookmark, MdKeyboardArrowRight} from "react-icons/md";

const size = "1.3em";
const Icons = {
    "MdKeyboardArrowRight": (<MdKeyboardArrowRight size={size}/>),
    "MdBookmark": (<MdBookmark size={size}/>)
}

export const authPrefixes = ["admin","user"];
export const defaultRoute = "admin/instance";

export const routes = {
    "index": {children: (<div>home</div>)},
    "404": {children: (<div>404</div>)},
    "login": {children: (<Login/>)},
    "admin/setting": {children: (<Setting/>)},
    "admin/eth-address": {children: (<EthAddress/>)},
    "admin/order": {children: (<AdminOrder/>)},
    "admin/line": {children: (<AdminLine/>)},
    "admin/instance": {children: (<AdminInstance/>)},
    "admin/user": {children: (<AdminUser/>)}
};


export const sidebar = {
    activeMenu:"admin/order",
    clickedMenu:"admin/order",
    openMenu:"admin",
    menus:[
        {
            id: "admin",
            name: "admin",
            icon: Icons['MdBookmark'],
            children: [
                {
                    id: "order",
                    name: "order",
                    icon: Icons['MdKeyboardArrowRight'],
                },
                {
                    id: "user",
                    name: "user",
                    icon: Icons['MdKeyboardArrowRight'],
                },
                {
                    id: "instance",
                    name: "instance",
                    icon: Icons['MdKeyboardArrowRight'],
                },
                {
                    id: "line",
                    name: "line",
                    icon: Icons['MdKeyboardArrowRight'],
                },
                {
                    id: "eth-address",
                    name: "eth-address",
                    icon: Icons['MdKeyboardArrowRight'],
                },
                {
                    id: "setting",
                    name: "setting",
                    icon: Icons['MdKeyboardArrowRight'],
                }
            ]
        }
    ]
};