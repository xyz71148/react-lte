import {base64encode} from "nodejs-base64";
import axios from 'axios';
import {get_platform, open_url} from "./utils";
import querystring from "querystring"

const get_download_url = () => {
    const platform = get_platform();
    return window.globalObject.constant.download_urls[platform]
};

export const onConnectServer = ({port, pwd, name, ip, id}, dispatch) => {
    const method = "aes-256-cfb"
    const accessKey = "ss://" + base64encode(`${method}:${pwd}@${ip}:${port}`);
    const connect_id = name + "_" + port;
    if (get_platform() === "cordova") {
        window.ss_server.init({
            host: ip,
            port,
            method,
            password: pwd,
            name,
            accessKey,
            id: connect_id
        })
        dispatch({
            type: "ss_server/setState",
            payload: {
                current_connect_status: null,
                current_connect_id: connect_id
            }
        });
        const loading = weui.loading("连接中...");
        window.ss_server.start(connect_id, ({status, msg}) => {
            loading.hide();
            console.log(JSON.stringify({status, msg}));
            if (status === "ERROR") {
                weui.toast(msg)
            } else {
                dispatch({
                    type: "ss_server/setState",
                    payload: {
                        current_connect_status: status,
                        current_connect_id: connect_id
                    }
                });
                dispatch({
                    type: "route/hidePage"
                })
            }
        })
    } else {
        //open_url(accessKey)
        const qr_code_org = `ss://${method}:${pwd}@${ip}:${port}`;
        yd_server_post(qr_code_org,(items)=>{
            dispatch({
                type:"shadowsocks/setState",
                payload:{
                    current_key:items[0]
                }
            })
        },()=>{
            weui.toast("连接失败")
            // weui.confirm('请下载并运行程序', {
            //     buttons: [{
            //         label: '取消',
            //         type: 'default',
            //         onClick: function () {
            //             console.log('no')
            //         }
            //     }, {
            //         label: '去下载',
            //         type: 'primary',
            //         onClick: function () {
            //             const {y_deng} = window.globalObject.constant;
            //             open_url(y_deng.package.mac)
            //
            //         }
            //     }]
            // });
        })
    }
}

export const yd_server_post = (qr_code_org, ok, fail) => {
    const {y_deng} = window.globalObject.constant;
    const {local_server} = y_deng;
    const data = querystring.stringify({
        ss: qr_code_org
    })
    const loading = weui.loading("连接中")
    axios.post(`http://${local_server}/shadowsocks?clean=1`, data).then(({data}) => {
        loading.hide()
        if (data.ok) {
            weui.toast("连接成功")
            window.globalObject.constant.y_deng.data = data.data
            const items = data.data;
            console.log(items)
            ok && ok(items)
        }
    }).catch((e) => {
        loading.hide()
        weui.toast("连接失败")
        window.globalObject.constant.y_deng.data = null
        fail && fail(e)
    })
}
export const yd_server_get = (ok, fail) => {
    const {y_deng} = window.globalObject.constant;
    const {local_server} = y_deng;
    axios.get(`http://${local_server}/shadowsocks`, {timeout: 1000}).then(({data}) => {
        if (data.ok) {
            window.globalObject.constant.y_deng.data = data.data
            const items = data.data;
            ok && ok(items)
        }
    }).catch((e) => {
        window.globalObject.constant.y_deng.data = null
        fail && fail(e)
    })
}

export const onConnect = (item, menus, dispatch) => {
    const {ip} = item;
    const m = [
        {
            label: "连接",
            onClick: () => {
                onConnectServer(item, dispatch)
            }
        },
        {
            label: "测速",
            onClick: () => {
                open_url("http://ping.chinaz.com/" + ip, "_blank")
            }
        }
    ];
    if (get_platform() !== "cordova") {
        m.push({
            label: "下载客户端",
            onClick: () => {
                open_url(get_download_url(), "_blank")
            }
        })
    }
    return weui.actionSheet([
        ...m,
        ...menus
    ], [], {title: ""});
}
