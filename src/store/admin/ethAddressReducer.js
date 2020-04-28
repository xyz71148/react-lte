import axios from "axios";

export const namespace = "eth_address";
const initialState = {
    items: [],
    rows:""
};

export default function defaultReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case namespace + "/setState":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}


export function fetchRows(callback) {
    return dispatch => {
        const loading = window.weui.loading("加载中...");
        return axios.get(`/payment/eth/addresses`)
            .then(({data}) => {
                loading.hide();
                callback && callback(data)
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
            })
            .catch(error => {
                loading.hide();
                callback && callback({error})
            });
    };
}


export function saveRow({rows}, callback) {
    debugger
    return dispatch => {
        const loading = window.weui.loading("提交中...");
        return axios.post(`/payment/eth/address`, {
            value:rows
        })
            .then(({data}) => {
                loading.hide();
                window.weui.toast("保存成功");
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
                callback && callback(data)
            })
            .catch(error => {
                loading.hide();
                callback && callback({error})
            });
    };
}


export function delRow(key, callback) {
    return dispatch => {
        const loading = window.weui.loading("删除中...");
        return axios.delete(`/payment/eth/address/${key}`)
            .then(({data}) => {
                loading.hide();
                window.weui.toast("删除成功");
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
                callback && callback(data)
            })
            .catch(error => {
                loading.hide();
                callback && callback({error})
            });
    };
}

