import React from 'react';

import Instance from "./instance";
import Plan from "./plan";
import Orders from "./orders";
import Account from "./account";
import Login from "./login";
import Home from "./home";

export const routes = {
    "index": {children: (<Home/>)},
    "instance": {children: (<Instance/>)},
    "plan": {children: (<Plan/>)},
    "order": {children: (<Orders/>)},
    "account": {children: (<Account/>)},
    "login": {children: (<Login/>)},
};

export const authPrefixes = ["admin", "user"];
export const defaultRoute = "index";
