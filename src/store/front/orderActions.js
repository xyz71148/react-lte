import axios from "axios";

import {namespace} from "./orderReducer"


export function fetchRows(callback) {
    return dispatch => {
        const loading = window.weui.loading("加载中...")
        return axios.get("/orders")
            .then(({data}) => {
                loading.hide()
                callback && callback(data);
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
            })
            .catch(error => {
                loading.hide()
                callback && callback({error})
            });
    };
}

export function fetchRow(id, callback) {
    return dispatch => {
        return axios.get("/order/" + id)
            .then(({data}) => {
                callback && callback(data)
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        item: data.body,
                        loadingDetail: false
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        item: null,
                        loadingDetail: false
                    }
                });
                callback && callback({error})
            });
    };
}
