import React from 'react';
import {connect} from "react-redux"
import BaseComponent from "../BaseComponent"
import "./style.css"

export default connect(({navigation,route}) => {
    return {
        module: navigation.module,
        clickedMenu: navigation.clickedMenu,
        activeMenu: navigation.activeMenu,
        openMenu: navigation.openMenu,
        menus: navigation.menus,
        breadcrumb_actions: route.breadcrumb_actions
    }
})(({menus, module, activeMenu, clickedMenu, breadcrumb_actions}) => {
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
    const clickedMenu1 = get_menu1(menus[module].children, activeMenu);
    console.log({clickedMenu1, clickedMenu, openMenu1, activeMenu})
    if (!clickedMenu1) return null;
    if (!openMenu1) return null;
    return (
        <BaseComponent id="content-header" className={"content-header"}>
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-8 breadcrumb_row">
                        <h1 className="m-0 text-dark" id="breadcrumb_title">{clickedMenu1.name}</h1>
                        <div className={"breadcrumb_actions"}>
                            {
                                breadcrumb_actions.map(({title,onClick,icon},i)=>{
                                    return (
                                        <button onClick={onClick} key={i} type="button" className="btn btn-sm btn-block btn-outline-primary">
                                            <i className={"fas "+icon} />
                                            {title}
                                        </button>
                                    )
                                })

                            }

                        </div>
                    </div>
                    <div className="col-sm-4">
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
