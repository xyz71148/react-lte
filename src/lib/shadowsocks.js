import {base64encode} from "nodejs-base64";
import {get_platform, open_url} from "./utils";

const get_download_url = () => {
    const platform = get_platform();
    return window.globalObject.constant.download_urls[platform]
};
export const onConnectServer = ({host, port, pwd, name, password, ip, id}, dispatch) => {
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
            id:connect_id
        })
        dispatch({
            type: "ss_server/setState",
            payload: {
                current_connect_status: null,
                current_connect_id: connect_id
            }
        });
        const loading = window.weui.loading("连接中...");
        window.ss_server.start(connect_id, ({status,msg}) => {
            loading.hide();
            console.log(JSON.stringify({status,msg}));
            if(status === "ERROR"){
                window.weui.toast(msg)
            }else{
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
        open_url(accessKey)
    }

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
    return window.weui.actionSheet([
        ...m,
        ...menus
    ], [], {title: ""});

    // axios.get("http://127.0.0.1:1270/shadowsocks", {timeout: 1000}).then((data) => {
    //     if (data.data.ok) {
    //         const items = data.data.data
    //         let label = "连接"
    //         if (items.includes(qr_code_org)) {
    //             label = "取消连接"
    //         }
    //
    //         window.weui.actionSheet([
    //             {
    //                 label,
    //                 onClick: () => {
    //                     const data = querystring.stringify({
    //                         ss: qr_code_org
    //                     })
    //                     if (items.includes(qr_code_org)) {
    //                         axios.delete("http://127.0.0.1:1270/shadowsocks?" + data).then((data) => {
    //                             console.log("delete", data)
    //                             window.weui.toast("取消连接成功")
    //                         })
    //                     } else {
    //                         axios.post("http://127.0.0.1:1270/shadowsocks?clean=1", data).then((data) => {
    //                             console.log("post", data)
    //                             window.weui.toast("连接成功")
    //                         })
    //                     }
    //
    //                 }
    //             }, {
    //                 label: "二维码",
    //                 onClick: () => {
    //                     showQrCode(item)
    //                 }
    //             },
    //             ...menus
    //         ], [], {
    //             title: '',
    //             className: "weui-custom",
    //             onClose: function () {
    //             }
    //         })
    //     } else {
    //         showQrCode(item)
    //     }
    // }).catch((err) => {
    //     showQrCode(item)
    // })
}
