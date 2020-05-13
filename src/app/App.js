import React, {Component} from 'react';
import axios from 'axios'
import {connect} from "react-redux";
import {get_access_token, getZoneTree, go_login, parse_url, set_access_token} from "lib/utils"
import 'style/App.css';
import {fetchMe} from 'store/app/user'
import Page from 'components/page'
import MainSidebar from "components/sider-menu/main-sidebar";
import Footer from "components/footer";
import Header from "components/header";
import ContentHeader from "components/content-header";
import {authPrefixes, routes} from "./pages/routes"
import {navigation} from "./pages/navigation"

class App extends Component {
    state = {
        loading: true
    };

    handleMenu(urlObject,page_id){
        const module = urlObject.query.m ? urlObject.query.m : "admin";
        const {menus} = navigation;
        let module_ = module
        if (!Object.keys(menus).includes(module_)) {
            module_ = "admin";
        }
        const menus_ = menus[module_].children;
        let openMenu;
        for (let i in menus_) {
            if (menus_[i].id === page_id) {
                openMenu = menus_[i].id
            }
        }
        if (!openMenu) {
            const t = page_id.split("/");
            t.pop()
            openMenu = t.join("/")
        }
        if(menus[module_].children.length === 1){
            openMenu = menus[module_].children[0].id
        }

        this.props.dispatch({
            type: "navigation/setState",
            payload: {
                activeMenu: page_id,
                clickedMenu: page_id,
                module: module_,
                openMenu
            }
        });
    }

    getDefaultRoute(urlQuery){
        let {menus,module} = navigation;
        const {m} = urlQuery;
        if(m){
            module = m;
        }
        return menus[module].defaultRouter
    }
    handlePageId(urlObject){
        let page_id = "404";
        let id = urlObject.hash.replace("#", "");
        window.urlQuery = {};
        if (id.indexOf("?") > 0) {
            window.urlQuery = parse_url(id).query;
            id = id.split("?")[0]
        }else{
            window.urlQuery = urlObject.query;
        }
        if (id.length === 0) {
            page_id = this.getDefaultRoute(window.urlQuery)
        } else {
            if (Object.keys(routes).includes(id)) {
                page_id = id
            } else {
                page_id = "404"
            }
        }
        const pages_history_l  = window.pages_history.length
        if(pages_history_l > 0 && window.pages_history[pages_history_l -1 ] === page_id){
            console.log("go -1");
            window.go_1 = true
        }else{
            window.go_1 = false;
            window.pages_history.push(page_id);
        }

        this.props.dispatch({
            type: "route/setState",
            payload: {
                page_id,
                pages_history:window.pages_history,
                go_1:window.go_1
            }
        });
        return page_id;
    }

    go_login(urlObject){
        const {pathname} = window.location
        const t = pathname.split("/")
        const path_dir = pathname.substring(0, pathname.length - t[t.length - 1].length)
        return go_login(`${urlObject.protocol}//${urlObject.host}${path_dir}login.html`)
    }
    handleUrl(url) {
        const urlObject = parse_url(url);

        if(urlObject.hash.indexOf("#login") >= 0){
            return this.go_login(urlObject)
        }

        window.urlObject = urlObject
        console.log(urlObject)
        if (urlObject.query.jwt) {
            set_access_token("JWT " + urlObject.query.jwt);
            this.props.dispatch({
                type: "app/logged",
                payload: {
                    access_token: "JWT " + urlObject.query.jwt
                }
            });
            window.location.href = `${urlObject.protocol}//${urlObject.host}${urlObject.pathname}${urlObject.hash}`
        } else {
            const page_id = this.handlePageId(urlObject)
            this.handleMenu(urlObject,page_id)
            const access_token = get_access_token();
            document.querySelector("#top-wrap").style.display = "none";
            if (access_token) {
                this.props.dispatch({
                    type: "app/logged",
                    payload: {
                        access_token
                    }
                });
            }
            if (Object.keys(window.globalObject.constant).length === 0) {
                //this.getConstants()
            }
            if (authPrefixes.includes(page_id.split("/")[0])) {
                if (access_token === null) {
                    return this.go_login(urlObject)
                } else {
                    this.props.dispatch(fetchMe(() => {
                        this.finishLoading()
                    }, () => {
                        this.finishLoading()
                    }));
                }
            } else {
                this.finishLoading()
            }
        }
    }
    finishLoading() {
        this.setState({
            loading: false
        });
        setTimeout(() => {
            document.querySelector(".global-loading").style.display = "none";
        }, 700)
    }

    getConstants() {
        //const loading = weui.loading("加载中...")
        axios.get("/constant").then(({data}) => {
            //loading.hide();
            const {default_zone, zones, download_urls, plans, payment, zone_names} = data;
            window.globalObject.constant = {
                zones: getZoneTree(zones, zone_names),
                default_zone, payment,
                zone_names, plans, download_urls
            };
            this.props.dispatch({
                type: "app/setState",
                payload: {
                    constant:window.globalObject.constant
                }
            });
        }).catch(() => {
            //loading.hide();
            //weui.toast("获取配置失败")
        })
    }

    componentDidMount() {
        window.onpopstate = () => {
            const url = parse_url(document.location);
            this.handleUrl(url)
        };
        this.handleUrl(window.location.href)
    }

    getPageProps(id, options) {
        const {page, page_id} = this.props;
        if (page_id === id) {
            console.log(page_id)
        }
        const pageDefault = {
            visible: page_id === id,
            id,
            ...options
        };
        const p = (page && page[id]) ? {...pageDefault, ...page[id], ...options, visible: page_id === id} : pageDefault;
        return p
    }

    render() {
        if (this.state.loading) return null;
        // const {constant} = this.props
        // if (!constant) return null;
        return (
            <div className={"App"}>
                <Header/>
                <ContentHeader/>
                {
                    Object.keys(routes).map(id => {
                        return (
                            <Page key={id} {...this.getPageProps(id, routes[id])}/>
                        )
                    })
                }
                <MainSidebar/>
                <Footer/>
            </div>
        );
    }
}

export default connect(({app, route}) => ({
    page: route.page,
    page_id: route.page_id,
    index: route.index,
    constant: app.constant
}))(App);
