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
            "target":"_blank"
        },
        {
            "id": "demo/extras/register",
            "href": "register.html",
            "name": "Register",
            "icon": "fa-circle",
            "target":"_blank"
        },
        {
            "id": "demo/extras/forgot_password",
            "name": "Forgot Password",
            "href": "forgot-password.html",
            "icon": "fa-circle",
            "target":"_blank"
        },
        {
            "id": "demo/extras/recover_password",
            "name": "Recover Password",
            "icon": "fa-circle",
            "href": "recover-password.html",
            "target":"_blank"
        },
        {
            "id": "demo/extras/lockscreen",
            "name": "Lockscreen",
            "icon": "fa-circle",
            "target":"_blank",
            "href": "pages/lockscreen.html",
        },
        {
            "id": "demo/extras/error_404",
            "name": "Error 404",
            "icon": "fa-circle",
            "href": "pages/404.html",
            "target":"_blank"
        },
        {
            "id": "demo/extras/error_500",
            "name": "Error 500",
            "href": "pages/500.html",
            "icon": "fa-circle",
            "target":"_blank"
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
            "id": "demo/layout options6",
            "name": "Layout Options6",
            "icon": "fa-copy",
            "children": [
                {
                    "id": "demo/layout options6/top_navigation",
                    "name": "Top Navigation",
                    "icon": "fa-circle",
                    "target":"_blank"
                },
                {
                    "id": "demo/layout options6/top_navigation + sidebar",
                    "name": "Top Navigation + Sidebar",
                    "icon": "fa-circle",
                    "target":"_blank"
                },
                {
                    "id": "demo/layout options6/boxed",
                    "name": "Boxed",
                    "icon": "fa-circle",
                    "target":"_blank"
                },
                {
                    "id": "demo/layout options6/fixed_sidebar",
                    "name": "Fixed Sidebar",
                    "icon": "fa-circle",
                    "target":"_blank"
                },
                {
                    "id": "demo/layout options6/fixed_navbar",
                    "name": "Fixed Navbar",
                    "icon": "fa-circle",
                    "target":"_blank"
                },
                {
                    "id": "demo/layout options6/fixed_footer",
                    "name": "Fixed Footer",
                    "icon": "fa-circle",
                    "target":"_blank"
                },
                {
                    "id": "demo/layout options6/collapsed_sidebar",
                    "name": "Collapsed Sidebar",
                    "icon": "fa-circle",
                    "target":"_blank"
                }
            ]
        }
export const demo_menus = [
    demo_dashboard,
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
        "id": "demo/calendar2",
        "name": "Calendar2",
        "icon": "fa-calendar-alt"
    },
    {
        "id": "demo/gallery",
        "name": "Gallery",
        "icon": "fa-image"
    },
    {
        "id": "demo/mailbox",
        "name": "Mailbox",
        "icon": "fa-envelope",
        "children": [
            {
                "id": "demo/mailbox/inbox",
                "name": "Inbox",
                "icon": "fa-circle"
            },
            {
                "id": "demo/mailbox/compose",
                "name": "Compose",
                "icon": "fa-circle"
            },
            {
                "id": "demo/mailbox/read",
                "name": "Read",
                "icon": "fa-circle"
            }
        ]
    },
    {
        "id": "demo/documentation",
        "name": "Documentation",
        "icon": "fa-file",
        "href":"https://adminlte.io",
        "target":"_blank"
    },
];
export const navigation = {
    activeMenu:"",
    clickedMenu:"",
    openMenu:"",
    module:"home",
    menus:{
        "home":{
            name:"Home",
            children:[
                demo_dashboard
            ]
        },
        "demo": {
            name: "Demo",
            children: demo_menus
        },
        "demo_extra": {
            name: "Extra",
            children: [
                demo_extra,
            ]
        },
        "demo_page": {
            name: "Page",
            children: [
                demo_page
            ]
        },
        "demo_layout": {
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