import React from 'react';
import {connect} from "react-redux"
import BaseComponent from "../../BaseComponent"
import classnames from "../../../lib/classnames"


export default connect(({sidebar}) => {
    return {
        activeMenu: sidebar.activeMenu,
        clickedMenu: sidebar.clickedMenu,
        openMenu: sidebar.openMenu,
        menus: sidebar.menus
    }
})(({menus, activeMenu, openMenu, clickedMenu, dispatch}) => {
    return (
        <BaseComponent id="main-sidebar" className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#admin/order" className="brand-link">
                <img src="static/dist/img/AdminLTELogo.png" className="brand-image img-circle elevation-3"
                     style={{opacity: ".8"}}/>
                <span className="brand-text font-weight-light">App</span>
            </a>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column text-sm nav-flat nav-compact"
                        data-widget="treeview" role="menu"
                        data-accordion="false">
                        {
                            menus.map(menu => {
                                const has_tree = !!menu.children;
                                const active = (activeMenu && clickedMenu) && (activeMenu === menu.id ||
                                    activeMenu.split("/")[0] === menu.id ||
                                    menu.id === clickedMenu ||
                                    clickedMenu.split("/")[0] === menu.id);
                                const menu_open = openMenu === menu.id || activeMenu.split("/")[0] === menu.id;
                                const clz = classnames({
                                    "nav-item": true,
                                    "has-treeview": has_tree,
                                    "menu-open": menu_open
                                });

                                const clz_a = classnames({
                                    "nav-link": true,
                                    "active": activeMenu === menu.id || activeMenu.split("/")[0] === menu.id
                                });
                                const url = "#" + menu.id;
                                return (
                                    <li key={menu.id} className={clz}>
                                        <a href={url} className={clz_a} onClick={() => {
                                            const payload = {
                                                clickedMenu: menu.id,
                                            }
                                            if (menu.id === openMenu) {
                                                payload.openMenu = null
                                            } else {
                                                payload.openMenu = menu.id
                                            }
                                            if (!has_tree) {
                                                payload.activeMenu = menu.id
                                            }else{
                                                dispatch({
                                                    type: "sidebar/setState",
                                                    payload
                                                })
                                            }
                                        }}>
                                            {menu.icon && menu.icon}
                                            <p>{menu.name} {has_tree && <i className="right fas fa-angle-left"/>}</p>
                                        </a>
                                        {
                                            has_tree &&
                                            (
                                                <ul className="nav nav-treeview"
                                                    style={{display: menu_open ? undefined : "none"}}>
                                                    {
                                                        menu.children.map(child => {
                                                            const url = menu.id + "/" + child.id
                                                            const active1 = activeMenu === url || clickedMenu === url;

                                                            const clz_a1 = classnames({
                                                                "nav-link": true,
                                                                "active": active1
                                                            });

                                                            return (
                                                                <li key={child.id} className="nav-item">
                                                                    <a href={"#" + url} className={clz_a1}
                                                                       onClick={() => {
                                                                           dispatch({
                                                                               type: "sidebar/setState",
                                                                               payload: {
                                                                                   activeMenu: url,
                                                                                   clickedMenu: url
                                                                               }
                                                                           })
                                                                       }}>
                                                                        {child.icon && child.icon}
                                                                        <p>{child.name} </p>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </BaseComponent>
    )
})
