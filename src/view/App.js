import React, {Component} from 'react';
import axios from 'axios'
import {connect} from "react-redux";
import {get_access_token, getZoneTree, parse_url, set_access_token} from "../lib/utils"
import '../style/App.css';
import {fetchMe} from '../store/front/userActions'
import Page from '../lib/page'

import MainSidebar from "../components/sider-menu/main-sidebar";
import {routes,authPrefixes,defaultRoute} from "../config"

class App extends Component {
    state = {
        loading: true
    };
    handleUrl(url){
        const urlObject = parse_url(url);
        if (urlObject.query.jwt) {
            set_access_token("JWT " + urlObject.query.jwt);
            this.props.dispatch({
                type: "app/logged",
                payload: {
                    access_token: "JWT " + urlObject.query.jwt
                }
            });
            window.location.href = `${urlObject.protocol}//${urlObject.host}`
            window.location.reload()
        }else{
            let page_id = "404";
            const id = urlObject.hash.replace("#", "");
            if(id.length === 0){
                page_id = defaultRoute
            }else{
                if(Object.keys(routes).includes(id)){
                    page_id = id
                }else{
                    page_id = "404"
                }
            }
            this.props.dispatch({
                type: "route/setState",
                payload: {
                    page_id
                }
            });

            this.props.dispatch({
                type: "sidebar/setState",
                payload: {
                    activeMenu:page_id,
                    clickedMenu:page_id,
                    openMenu:page_id.split("/")[0],
                }
            });
            const access_token = get_access_token();
            if (access_token) {
                this.props.dispatch({
                    type: "app/logged",
                    payload: {
                        access_token
                    }
                });
                document.querySelector("#top-wrap").style.display = "none";
            }
            if(Object.keys(window.globalObject.constant).length === 0) {
                this.getConstants()
            }
            if(authPrefixes.includes(page_id.split("/")[0])){
                if(access_token === null){
                    window.location.href = `${urlObject.protocol}//${urlObject.host}/#login`
                    window.location.reload()
                    this.finishLoading()
                }else{
                    this.props.dispatch(fetchMe(()=>{
                        this.finishLoading()
                    },()=>{
                        this.finishLoading()
                    }));
                }
            }else{
                this.finishLoading()
            }
        }
    }
    finishLoading(){
        this.setState({
            loading:false
        });

        setTimeout(()=>{
            document.querySelector(".global-loading").style.display = "none";
        },700)
    }
    getConstants(){
        //const loading = window.weui.loading("加载中...")
        axios.get("/constant").then(({data}) => {
            //loading.hide();
            const {default_zone, zones, download_urls, plans, payment, zone_names} = data;
            window.globalObject.constant = {
                zones: getZoneTree(zones, zone_names),
                default_zone, payment,
                zone_names, plans, download_urls
            };
        }).catch(() => {
            //loading.hide();
            //window.weui.toast("获取配置失败")
        })
    }
    componentDidMount() {
        window.onpopstate = ()=> {
            const url = parse_url(document.location);
            this.handleUrl(url)
        };
        this.handleUrl(window.location.href)
    }

    getPageProps(id, options) {
        const {page,page_id} = this.props;
        if(page_id === id){
            console.log(page_id)
        }
        const pageDefault = {
            visible: page_id === id,
            id,
            ...options
        };
        const p = (page && page[id]) ? {...pageDefault, ...page[id], ...options, visible:page_id === id} : pageDefault;
        return p
    }

    render() {
        if(this.state.loading) return null;
        return (
            <div className={"App"}>
                {
                    Object.keys(routes).map(id => {
                        return (
                            <Page key={id} {...this.getPageProps(id, routes[id])}/>
                        )
                    })
                }
                <MainSidebar />
            </div>
        );
    }
}

export default connect(({app, route}) => ({
    toastState: app.toastState,
    page: route.page,
    page_id: route.page_id,
    index: route.index,
    actionSheetState: app.actionSheetState,
    halfScreenDialogState: app.halfScreenDialogState,
    loading: app.loading,
}))(App);
