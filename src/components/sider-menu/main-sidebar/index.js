import React from 'react';
import {connect} from "react-redux"
import BaseComponent from "../../BaseComponent"
import classnames from "../../../lib/classnames"

export default connect(({navigation}) => {
    return {
        activeMenu: navigation.activeMenu,
        module: navigation.module,
        clickedMenu: navigation.clickedMenu,
        openMenu: navigation.openMenu,
        menus_1: navigation.menus
    }
})(({menus_1, activeMenu, module, openMenu, clickedMenu, dispatch}) => {
    const menus = menus_1[module].children;
    // console.log({activeMenu, openMenu, clickedMenu,module})
    return (
        <BaseComponent id="main-sidebar" className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#" className="brand-link">
                <img src="./static/dist/img/AdminLTELogo.png"
                     alt="AdminLTE Logo"
                     className="brand-image img-circle elevation-3"
                     style={{opacity: ".8"}}/>
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview" role="menu"
                        data-accordion="false">
                        {
                            menus.map(menu => {
                                if (menu.header) {
                                    return (
                                        <li className="nav-header">{menu.name}</li>
                                    )
                                }
                                const has_tree = !!menu.children;
                                const menu_open = openMenu === menu.id || activeMenu.indexOf(menu.id) === 0;
                                const clz = classnames({
                                    "nav-item": true,
                                    "has-treeview": has_tree,
                                    "menu-open": menu_open
                                });
                                const clz_a = classnames({
                                    "nav-link": true,
                                    "active": activeMenu === menu.id || activeMenu.indexOf(menu.id) === 0
                                });
                                const url = menu.href ? menu.href : "#" + menu.id;
                                let target1 = undefined
                                if (menu.target) {
                                    target1 = {
                                        target: menu.target
                                    }
                                }
                                return (
                                    <li key={menu.id} className={clz}>
                                        <a {...target1} href={url} className={clz_a} onClick={() => {
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
                                            } else {
                                                dispatch({
                                                    type: "navigation/setState",
                                                    payload
                                                })
                                            }
                                        }}>
                                            {menu.icon && (
                                                <i className={"nav-icon fas " + menu.icon}/>
                                            )}
                                            <p>{menu.name} {has_tree && <i className="right fas fa-angle-left"/>}</p>
                                        </a>
                                        {
                                            has_tree &&
                                            (
                                                <ul className="nav nav-treeview"
                                                    style={{display: menu_open ? undefined : "none"}}>
                                                    {
                                                        menu.children.map(child => {
                                                            const url = child.href ? child.href : "#" + child.id;
                                                            const active1 = activeMenu === child.id || clickedMenu === child.id;
                                                            let target = undefined
                                                            if (child.target) {
                                                                target = {
                                                                    target: child.target
                                                                }
                                                            }
                                                            const clz_a1 = classnames({
                                                                "nav-link": true,
                                                                "active": active1
                                                            });
                                                            return (
                                                                <li key={child.id} className="nav-item">
                                                                    <a href={url} {...{target}} className={clz_a1}
                                                                       onClick={() => {
                                                                           dispatch({
                                                                               type: "navigation/setState",
                                                                               payload: {
                                                                                   activeMenu: url,
                                                                                   clickedMenu: url
                                                                               }
                                                                           })
                                                                       }}>
                                                                        {child.icon && (
                                                                            <i className={"far nav-icon " + child.icon}/>
                                                                        )}
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
