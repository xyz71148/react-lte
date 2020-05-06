import axios from "axios";
export const namespace = "instance";
const initialState = {
    items: [],
    item:null,
    loading: false,
    error: null,
    showVipLines:false,
    selectedVipType:null,
    showVipLinesActionSheet:false,
    timestamp:null,
    showAddService:false
};

export default function defaultReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case "instance/setState":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export function createInstance({zone, server_type}, callBack) {
    return dispatch => {
        const loading = weui.loading("创建中...")
        return axios.post(`/compute/instance/${zone}/${server_type}`, null)
            .then(({data}) => {
                const {body, code, msg} = data
                loading.hide()
                if (code === 200) {
                    dispatch({
                        type: namespace + "/setState",
                        payload: {
                            item: body
                        }
                    })
                    dispatch(getInstance(body.id))
                    callBack && callBack()
                }else{
                    loading.hide();
                    weui.topTips(msg)
                    if(code === 501){
                        setTimeout(()=>{
                            window.location.href = "#plan";
                            window.location.reload()
                        },1000)
                    }
                }
            })
            .catch(error => {
                loading.hide()
                callBack && callBack()
            });
    };
}


export function noteInstance(instance_id, field,value,callback) {
    return dispatch => {
        clear_time_id()
        const loading = weui.loading("保存中...")
        return axios.put(`/compute/instance/change/${instance_id}`, {
            value:{field,value}
        })
            .then(({data}) => {
                loading.hide()
                if(data.code === 200){
                    callback && callback()
                }else{
                    weui.toast("保存失败")
                }
            })
            .catch(error => {
                loading.hide()
                callback && callback()
            });
    };
}

export function startInstance(instance_id, callback) {
    return dispatch => {
        clear_time_id()
        const loading = weui.loading("启动中...")
        return axios.post(`/compute/instance/status/${instance_id}/start`, null)
            .then(({data}) => {
                loading.hide()
                if(data.code === 200){
                    dispatch(getInstance(data.body.id))
                    callback && callback()
                }else{
                    weui.toast("启动失败")
                }

            })
            .catch(error => {
                loading.hide()
                callback && callback()
            });
    };
}

export function stopInstance(instance_id, callback) {
    return dispatch => {
        clear_time_id()
        const loading = weui.loading("停止中...")
        return axios.post(`/compute/instance/status/${instance_id}/stop`, null)
            .then(({data}) => {
                loading.hide()
                if(data.code === 200){
                    callback && callback()
                }else{
                    weui.toast("停止失败")
                }
            })
            .catch(error => {
                loading.hide()
                callback && callback()
            });
    };
}

export function resetInstance(instance_id, callback) {
    return dispatch => {
        clear_time_id()
        const loading = weui.loading("重启中...")
        return axios.post(`/compute/instance/status/${instance_id}/restart`, null)
            .then(({data}) => {
                loading.hide()
                if(data.code === 200){
                    dispatch(getInstance(data.body.id))
                    callback && callback()
                }else{
                    weui.toast("重启失败")
                }
            })
            .catch(error => {
                loading.hide()
                callback && callback()
            });
    };
}

export function removeInstance(instance_id, callback) {
    return dispatch => {
        clear_time_id()
        const loading = weui.loading("删除中...")
        return axios.delete(`/compute/instance/${instance_id}`, null)
            .then(({data}) => {
                loading.hide()
                callback && callback()
            })
            .catch(error => {
                loading.hide()
                callback && callback()
            });
    };
}

export function saveInstanceServices(instance, callback) {
    console.log("saveInstanceServices", instance.id)
    const {services} = instance
    const loading = weui.loading("保存中...")
    return dispatch => {
        return axios.put(`/compute/instance/services/${instance.id}`, {services})
            .then(({data}) => {
                loading.hide()
                callback && callback({data})
            })
            .catch(error => {
                loading.hide()
                callback && callback({error})
            });
    };
}

export function getInstance(instance_id, callback) {
    console.log("getInstance", instance_id)
    return dispatch => {
        //const loading = weui.loading("加载中...")
        return axios.get(`/compute/instance/${instance_id}`, {
            timeout: 25000
        })
            .then(({data}) => {
                if (callback) {
                    callback(data)
                } else {
                    console.log("res", instance_id, data.body.ip, data.body.status)
                    if (data.body.status === "OK" || data.body.status === "RUNNING") {
                        //loading.hide()
                        dispatch(fetchInstances())
                    } else {
                        setTimeout(() => {
                            dispatch(getInstance(instance_id))
                        }, 1400)
                    }
                }

            })
            .catch(error => {
                setTimeout(() => {
                    dispatch(getInstance(instance_id))
                }, 1400)
            });
    };
}

export function clear_time_id() {
    window.__time_id_fetch_instance && clearInterval(window.__time_id_fetch_instance)
}

window.globalObject.delays = {}

export function fetchInstancePortStatus(dispatch, rows) {
    return null
    // rows.map(({ip}) => {
    //     if (ip) {
    //         const start_time = +(new Date())
    //         axios.get(`http://${ip}:8001/ping`, {timeout: 1000}).then(({data}) => {
    //             const delay1 = +(new Date()) - start_time
    //             window.globalObject.delays[ip] = delay1
    //             dispatch({
    //                 type: "app/setState",
    //                 payload: {
    //                     timestamp: new Date()
    //                 }
    //             })
    //         }).catch((error) => {
    //             dispatch({
    //                 type: "app/setState",
    //                 payload: {
    //                     timestamp: new Date()
    //                 }
    //             })
    //             console.log(error)
    //             window.globalObject.delays[ip] = 0
    //         })
    //     }
    //     return {ip}
    // })
}

export function fetchInstances() {
    return dispatch => {
        const loading = weui.loading("加载中...")
        return axios.get("/compute/instances")
            .then(({data}) => {
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
                clear_time_id()
                fetchInstancePortStatus(dispatch, data.body)
                window.__time_id_fetch_instance = setInterval(() => {
                    fetchInstancePortStatus(dispatch, data.body);
                }, 3000)
                loading.hide()
            })
            .catch(error => {
                loading.hide()
            });
    };
}
