import React from 'react';

import Instance from "./instance";
import InstanceDetail from "./instance/detail";
import Plan from "./plan";
import Line from "./line";
import Orders from "./orders";
import OrderDetail from "./orders/detail";
import Account from "./account";
import Login from "./login";
import Home from "./home";

export const routes = {
    "home": {children: (<Home/>)},
    "404": {children: (<div><h1>404</h1></div>)},
    "instance": {children: (<Instance/>)},
    "instance/detail": {children: (<InstanceDetail/>)},
    "line": {children: (<Line/>)},
    "order/detail": {children: (<OrderDetail/>)},
    "plan": {children: (<Plan/>)},
    "order": {children: (<Orders/>)},
    "account": {children: (<Account/>)},
    "login": {children: (<Login/>)},
};

export const authPrefixes = ["line", "instance","order","plan","account"];
export const defaultRoute = "home";
