import React from 'react';
import {connect} from "react-redux"
import BaseComponent from "../BaseComponent"

export default connect(({navigation}) => {
    return {
        menus: navigation.menus
    }
})(({menus}) => {

    const keys = Object.keys(menus);

    return (
        <BaseComponent id="top-header" className={"top-header"}>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars"/>
                        </a>
                    </li>
                    {
                        keys.map(key => {
                            let target = {};
                            if(menus[key].target){
                                target = {target:menus[key].target}
                            }
                            return (
                                <li key={key} className="nav-item d-none d-sm-inline-block">
                                    <a {...target} href={menus[key].href ? menus[key].href : "?m=" + key}
                                       className="nav-link">{menus[key].name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <ul className="navbar-nav ml-auto hide">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src="static/dist/img/user1-128x128.jpg" alt="User Avatar"
                                         className="img-size-50 mr-3 img-circle"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger"><i
                                                className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                            Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src="static/dist/img/user8-128x128.jpg" alt="User Avatar"
                                         className="img-size-50 img-circle mr-3"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i
                                                className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                            Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src="static/dist/img/user3-128x128.jpg" alt="User Avatar"
                                         className="img-size-50 img-circle mr-3"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning"><i
                                                className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                            Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"
                           role="button"><i
                            className="fas fa-th-large"></i></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i className="flag-icon flag-icon-us"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right p-0" style={{left: "inherit", right: 0}}>
                            <a href="#" className="dropdown-item active">
                                <i className="flag-icon flag-icon-us mr-2"></i> English
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="flag-icon flag-icon-de mr-2"></i> German
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="flag-icon flag-icon-fr mr-2"></i> French
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="flag-icon flag-icon-es mr-2"></i> Spanish
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown user-menu">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <img src="./static/assets/dist/img/user2-160x160.jpg"
                                 className="user-image img-circle elevation-2" alt="User Image"/>
                            <span className="d-none d-md-inline">Alexander Pierce</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
                            style={{left: "inherit", right: 0}}>
                            <li className="user-header bg-primary">
                                <img src="./static/assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2"
                                     alt="User Image"/>
                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <li className="user-body">
                                <div className="row">
                                    <div className="col-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                    <div className="col-4 text-center">
                                        <a href="#">Sales</a>
                                    </div>
                                    <div className="col-4 text-center">
                                        <a href="#">Friends</a>
                                    </div>
                                </div>
                            </li>
                            <li className="user-footer">
                                <a className="btn btn-default btn-flat">Profile</a>
                                <a href="login.html" onClick={() => {
                                    localStorage.removeItem("access_token")
                                }} className="btn btn-default btn-flat float-right">Sign out</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </BaseComponent>
    )
})
