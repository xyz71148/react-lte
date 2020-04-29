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
import DemoFormsGeneral from "../pages/demo/forms/general";
import DemoFormsAdvanced from "../pages/demo/forms/advanced";
import DemoFormsValidation from "../pages/demo/forms/validation";
import DemoFormsEditors from "../pages/demo/forms/editors";
import DemoTables1 from "../pages/demo/tables/simple_tables";
import DemoTables2 from "../pages/demo/tables/datatables";
import DemoTables3 from "../pages/demo/tables/jsgrid";


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
    "demo/forms/general": {children: (<DemoFormsGeneral />)},
    "demo/forms/advanced": {children: (<DemoFormsAdvanced />)},
    "demo/forms/validation": {children: (<DemoFormsValidation />)},
    "demo/forms/editors": {children: (<DemoFormsEditors />)},
    "demo/tables/simple_tables": {children: (<DemoTables1 />)},
    "demo/tables/datatables": {children: (<DemoTables2 />)},
    "demo/tables/jsgrid": {children: (<DemoTables3 />)},
};


export const sidebar = {
    activeMenu:"admin/order",
    clickedMenu:"admin/order",
    openMenu:"admin",
    menus
};
