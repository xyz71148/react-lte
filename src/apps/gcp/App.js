import React, {Component} from 'react';
import axios from 'axios'
import {connect} from "react-redux";
import {get_access_token,go_login, getZoneTree, parse_url, set_access_token} from "lib/utils"
import 'style/App.css';
import Page from 'components/page'
import {routes,authPrefixes,defaultRoute} from "./pages/routes"
import {fetchMe} from "./pages/account/store"

class App extends Component {
    state = {
        loading: true
    };
    handlePageId(urlObject){
        let page_id = "404";
        let id = urlObject.hash.replace("#", "");
        if(id.indexOf("?")){
            window.urlQuery = parse_url(id).query;
            id = id.split("?")[0]
        }
        if (id.length === 0) {
            page_id = defaultRoute
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
    handleUrl(url) {
        const urlObject = parse_url(url);
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
            const access_token = get_access_token();
            if (access_token) {
                this.props.dispatch({
                    type: "app/logged",
                    payload: {
                        access_token
                    }
                });
            }
            if (Object.keys(window.globalObject.constant).length === 0) {
                this.getConstants()
            }
            if (authPrefixes.includes(page_id.split("/")[0])) {
                if (access_token === null) {
                    go_login()
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
            console.log("onpopstate")
            this.handleUrl(url)
        };
        this.handleUrl(window.location.href)
    }

    getPageProps(id, options) {
        const {page, page_id} = this.props;
        let showHeader = true;
        if(id === "home"){
            showHeader = false;
        }

        const pageDefault = {
            visible: page_id === id,
            id,
            showHeader,
            ...options
        };

        const p = (page && page[id]) ? {...pageDefault, ...page[id], ...options, visible: page_id === id} : pageDefault;
        return p
    }

    render() {
        if (this.state.loading) return null;
        const {constant} = this.props
        if (!constant) return null;
        return (
            <div className={"App"}>
                {
                    Object.keys(routes).map(id => {
                        return (
                            <Page key={id} {...this.getPageProps(id, routes[id])}/>
                        )
                    })
                }
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
