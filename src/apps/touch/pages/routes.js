import React from 'react';

import Home from "./home";

export const routes = {
    "home": {children: (<Home/>)},
    "404": {children: (<div><h1>404</h1></div>)},
};

export const authPrefixes = [];
export const defaultRoute = "home";
