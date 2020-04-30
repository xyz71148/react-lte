import React from 'react';

import DemoDashboardDashboardV1 from "./demo/dashboard/dashboard_v1";
import DemoDashboardDashboardV2 from "./demo/dashboard/dashboard_v2";
import DemoDashboardDashboardV3 from "./demo/dashboard/dashboard_v3";
import DemoWidgets from "./demo/widgets";
import DemoChartsChartjs from "./demo/charts/chartjs";
import DemoChartsFlot from "./demo/charts/flot";
import DemoChartsInline from "./demo/charts/inline";
import DemoUiElementsGeneral from "./demo/ui_elements/general";
import DemoUiElementsIcons from "./demo/ui_elements/icons";
import DemoUiElementsButtons from "./demo/ui_elements/buttons";
import DemoUiElementsSliders from "./demo/ui_elements/sliders";
import DemoUiElementsModalsAlerts from "./demo/ui_elements/modals_alerts";
import DemoUiElementsNavbarTabs from "./demo/ui_elements/navbar_tabs";
import DemoUiElementsTimeline from "./demo/ui_elements/timeline";
import DemoUiElementsRibbons from "./demo/ui_elements/ribbons";
import DemoFormsGeneral from "./demo/forms/general";
import DemoFormsAdvanced from "./demo/forms/advanced";
import DemoFormsValidation from "./demo/forms/validation";
import DemoFormsEditors from "./demo/forms/editors";
import DemoTables1 from "./demo/tables/simple_tables";
import DemoTables2 from "./demo/tables/datatables";
import DemoProjects from "./demo/pages/projects";
import DemoProjectAdd from "./demo/pages/projects/add";
import DemoProjectEdit from "./demo/pages/projects/edit";
import DemoProjectDetail from "./demo/pages/projects/detail";
import DemoProfile from "./demo/pages/profile";
import DemoInvoice from "./demo/pages/invoice";
import DemoEcommerce from "./demo/pages/e-commerce";
import DemoContacts from "./demo/pages/contacts";

export const routes = {
    "index": {children: (<div>home</div>)},
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
    "demo/pages/projects": {children: (<DemoProjects />)},
    "demo/pages/project_add": {children: (<DemoProjectAdd />)},
    "demo/pages/project_edit": {children: (<DemoProjectEdit />)},
    "demo/pages/project_detail": {children: (<DemoProjectDetail />)},
    "demo/pages/profile": {children: (<DemoProfile />)},
    "demo/pages/invoice": {children: (<DemoInvoice />)},
    "demo/pages/e-commerce": {children: (<DemoEcommerce />)},
    "demo/pages/contacts": {children: (<DemoContacts />)},
};

export const authPrefixes = ["admin","user"];
export const defaultRoute = "demo/dashboard/dashboard_v1";


