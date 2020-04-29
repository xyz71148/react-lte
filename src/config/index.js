import React from 'react';

import DemoDashboardDashboardV1 from "../pages/demo/dashboard/dashboard_v1";
import DemoDashboardDashboardV2 from "../pages/demo/dashboard/dashboard_v2";
import DemoDashboardDashboardV3 from "../pages/demo/dashboard/dashboard_v3";
import DemoWidgets from "../pages/demo/widgets";
import DemoChartsChartjs from "../pages/demo/charts/chartjs";
import DemoChartsFlot from "../pages/demo/charts/flot";
import DemoChartsInline from "../pages/demo/charts/inline";
import DemoUiElementsGeneral from "../pages/demo/ui_elements/general";
import DemoUiElementsIcons from "../pages/demo/ui_elements/icons";
import DemoUiElementsButtons from "../pages/demo/ui_elements/buttons";
import DemoUiElementsSliders from "../pages/demo/ui_elements/sliders";
import DemoUiElementsModalsAlerts from "../pages/demo/ui_elements/modals_alerts";
import DemoUiElementsNavbarTabs from "../pages/demo/ui_elements/navbar_tabs";
import DemoUiElementsTimeline from "../pages/demo/ui_elements/timeline";
import DemoUiElementsRibbons from "../pages/demo/ui_elements/ribbons";


import {menus} from "./menus"

export const authPrefixes = ["admin","user"];
export const defaultRoute = "demo/dashboard/dashboard_v1";

export const routes = {
    "index": {children: (<div>home</div>)},
    "404": {children: (<div>404</div>)},
    "demo/dashboard/dashboard_v1": {children: (<DemoDashboardDashboardV1 />)},
    "demo/dashboard/dashboard_v2": {children: (<DemoDashboardDashboardV2 />)},
    "demo/dashboard/dashboard_v3": {children: (<DemoDashboardDashboardV3 />)},
    "demo/widgets": {children: (<DemoWidgets />)},
    "demo/charts/chartjs": {children: (<DemoChartsChartjs />)},
    "demo/charts/flot": {children: (<DemoChartsFlot />)},
    "demo/charts/inline": {children: (<DemoChartsInline />)},
    "demo/ui_elements/general": {children: (<DemoUiElementsGeneral />)},
    "demo/ui_elements/icons": {children: (<DemoUiElementsIcons />)},
    "demo/ui_elements/buttons": {children: (<DemoUiElementsButtons />)},
    "demo/ui_elements/sliders": {children: (<DemoUiElementsSliders />)},
    "demo/ui_elements/modals_alerts": {children: (<DemoUiElementsModalsAlerts />)},
    "demo/ui_elements/navbar_tabs": {children: (<DemoUiElementsNavbarTabs />)},
    "demo/ui_elements/timeline": {children: (<DemoUiElementsTimeline />)},
    "demo/ui_elements/ribbons": {children: (<DemoUiElementsRibbons />)},
};


export const sidebar = {
    activeMenu:"admin/order",
    clickedMenu:"admin/order",
    openMenu:"admin",
    menus
};
