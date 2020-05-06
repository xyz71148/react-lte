const demo_dashboard = {
    "id": "demo/dashboard",
    "name": "Dashboard",
    "icon": "fa-tachometer-alt",
    "children": [
        {
            "id": "demo/dashboard/dashboard_v1",
            "name": "Dashboard v1",
            "icon": "fa-circle"
        },
        {
            "id": "demo/dashboard/dashboard_v2",
            "name": "Dashboard v2",
            "icon": "fa-circle"
        },
        {
            "id": "demo/dashboard/dashboard_v3",
            "name": "Dashboard v3",
            "icon": "fa-circle"
        }
    ]
}
const demo_extra = {
    "id": "demo/extras",
    "name": "Extras",
    "icon": "fa-plus-square",
    "children": [
        {
            "id": "demo/extras/login",
            "href": "login.html",
            "name": "Login",
            "icon": "fa-circle",
            "target": "_blank"
        },
        {
            "id": "demo/extras/register",
            "href": "register.html",
            "name": "Register",
            "icon": "fa-circle",
            "target": "_blank"
        },
        {
            "id": "demo/extras/forgot_password",
            "name": "Forgot Password",
            "href": "forgot-password.html",
            "icon": "fa-circle",
            "target": "_blank"
        },
        {
            "id": "demo/extras/recover_password",
            "name": "Recover Password",
            "icon": "fa-circle",
            "href": "recover-password.html",
            "target": "_blank"
        },
        {
            "id": "demo/extras/lockscreen",
            "name": "Lockscreen",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "pages/lockscreen.html",
        },
        {
            "id": "demo/extras/error_404",
            "name": "Error 404",
            "icon": "fa-circle",
            "href": "pages/404.html",
            "target": "_blank"
        },
        {
            "id": "demo/extras/error_500",
            "name": "Error 500",
            "href": "pages/500.html",
            "icon": "fa-circle",
            "target": "_blank"
        }
    ]
}
const demo_page = {
    "id": "demo/pages",
    "name": "Pages",
    "icon": "fa-book",
    "children": [
        {
            "id": "demo/pages/invoice",
            "name": "Invoice",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/profile",
            "name": "Profile",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/e-commerce",
            "name": "E-commerce",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/projects",
            "name": "Projects",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/project_add",
            "name": "Project Add",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/project_edit",
            "name": "Project Edit",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/project_detail",
            "name": "Project Detail",
            "icon": "fa-circle",
        },
        {
            "id": "demo/pages/contacts",
            "name": "Contacts",
            "icon": "fa-circle",
        }
    ]
};
const demo_layout = {
    "id": "demo/layout",
    "name": "Layout",
    "icon": "fa-copy",
    "children": [
        {
            "id": "demo/layout/top_navigation",
            "name": "Top Navigation",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/top-nav.html"
        },
        {
            "id": "demo/layout/top_navigation_sidebar",
            "name": "Top Navigation",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/top-nav-sidebar.html"
        },
        {
            "id": "demo/layout/boxed",
            "name": "Boxed",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/boxed.html"
        },
        {
            "id": "demo/layout/fixed_sidebar",
            "name": "Fixed Sidebar",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/fixed-sidebar.html"
        },
        {
            "id": "demo/layout/fixed_navbar",
            "name": "Fixed Navbar",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/fixed-navbar.html"
        },
        {
            "id": "demo/layout/fixed_footer",
            "name": "Fixed Footer",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/fixed-footer.html"
        },
        {
            "id": "demo/layout/collapsed_sidebar",
            "name": "Collapsed Sidebar",
            "icon": "fa-circle",
            "target": "_blank",
            "href": "layout/collapsed-sidebar.html"
        }
    ]
}
export const demo_menus = [
    {
        "id": "demo/widgets",
        "name": "WidgetsNew",
        "icon": "fa-th"
    },
    {
        "id": "demo/charts",
        "name": "Charts",
        "icon": "fa-chart-pie",
        "children": [
            {
                "id": "demo/charts/chartjs",
                "name": "ChartJS",
                "icon": "fa-circle"
            },
            {
                "id": "demo/charts/flot",
                "name": "Flot",
                "icon": "fa-circle"
            },
            {
                "id": "demo/charts/inline",
                "name": "Inline",
                "icon": "fa-circle"
            }
        ]
    },
    {
        "id": "demo/ui_elements",
        "name": "UI Elements",
        "icon": "fa-tree",
        "children": [
            {
                "id": "demo/ui_elements/general",
                "name": "General",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/icons",
                "name": "Icons",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/buttons",
                "name": "Buttons",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/sliders",
                "name": "Sliders",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/modals_alerts",
                "name": "Modals & Alerts",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/navbar_tabs",
                "name": "Navbar & Tabs",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/timeline",
                "name": "Timeline",
                "icon": "fa-circle"
            },
            {
                "id": "demo/ui_elements/ribbons",
                "name": "Ribbons",
                "icon": "fa-circle"
            }
        ]
    },
    {
        "id": "demo/forms",
        "name": "Forms",
        "icon": "fa-edit",
        "children": [
            {
                "id": "demo/forms/general",
                "name": "General Elements",
                "icon": "fa-circle"
            },
            {
                "id": "demo/forms/advanced",
                "name": "Advanced Elements",
                "icon": "fa-circle"
            },
            {
                "id": "demo/forms/editors",
                "name": "Editors",
                "icon": "fa-circle"
            },
            {
                "id": "demo/forms/validation",
                "name": "Validation",
                "icon": "fa-circle"
            }
        ]
    },
    {
        "id": "demo/tables",
        "name": "Tables",
        "icon": "fa-table",
        "children": [
            {
                "id": "demo/tables/simple_tables",
                "name": "Simple Tables",
                "icon": "fa-circle"
            },
            {
                "id": "demo/tables/datatables",
                "name": "DataTables",
                "icon": "fa-circle"
            }
        ]
    },
    {
        "name": "Example",
        "header": true
    },
    {
        "id": "demo/documentation",
        "name": "Documentation",
        "icon": "fa-file",
        "href": "https://adminlte.io",
        "target": "_blank"
    },
];
export const navigation = {
    activeMenu: "",
    clickedMenu: "",
    openMenu: "",
    module: "admin",
    menus: {
        "admin": {
            name: "Home",
            children: [
                demo_dashboard
            ]
        },
        "demo": {
            name: "Demo",
            children: demo_menus
        },
        "extra": {
            name: "Extra",
            children: [
                demo_extra,
            ]
        },
        "pages": {
            name: "Pages",
            children: [
                demo_page
            ]
        },
        "layout": {
            name: "Layout",
            children: [
                demo_layout
            ]
        }
    }
};
export const namespace = "navigation";
const initialState = {
    ...navigation
};
export default function defaultReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case namespace + "/setState":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
