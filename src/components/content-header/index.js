import React from 'react';
import {connect} from "react-redux"
import BaseComponent from "../BaseComponent"

export default connect(({navigation}) => {
    return {
        module: navigation.module,
        clickedMenu: navigation.clickedMenu,
        activeMenu: navigation.activeMenu,
        openMenu: navigation.openMenu,
        menus: navigation.menus
    }
})(({menus, module, activeMenu, clickedMenu, dispatch}) => {
    const get_menu = (menus, clickedMenu) => {
        const t = clickedMenu.split("/")
        t.pop()
        for (let i in menus) {
            if (menus[i].id === clickedMenu || menus[i].id === t.join("/")) {
                return menus[i]
            }
        }
        return null
    }
    const get_menu1 = (menus, clickedMenu) => {
        for (let i in menus) {
            for (let i in menus) {
                if (menus[i].id === clickedMenu) {
                    return menus[i]
                }
            }
            if (menus[i].children) {
                for (let j in menus[i].children) {
                    if (menus[i].children[j].id === clickedMenu) {
                        return menus[i].children[j]
                    }
                }
            }
        }
        return null
    }
    const openMenu1 = get_menu(menus[module].children, activeMenu);
    const clickedMenu1 = get_menu1(menus[module].children, clickedMenu);
    console.log({clickedMenu1, clickedMenu, openMenu1, activeMenu})
    if (!clickedMenu1) return null;
    if (!openMenu1) return null;
    return (
        <BaseComponent id="content-header" className={"content-header"}>
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark" id="breadcrumb_title">{clickedMenu1.name}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href={"?m=" + module}>{menus[module].name}</a></li>
                            <li className="breadcrumb-item active" id="breadcrumb">{openMenu1.name}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </BaseComponent>
    )
})
