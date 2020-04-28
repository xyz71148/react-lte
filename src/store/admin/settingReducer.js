import axios from "axios";

export const namespace = "setting";
const initialState = {
    settings: [],
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


export function fetchRow(callback) {
    return dispatch => {
        const loading = window.weui.loading("加载中...");
        return axios.get(`/settings`)
            .then(({data}) => {
                loading.hide();
                callback && callback(data)
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        settings: data.body
                    }
                });
            })
            .catch(error => {
                loading.hide();
                callback && callback({error})
            });
    };
}


export function delRow(name, callback) {
    return dispatch => {
        const loading = window.weui.loading("删除中...");
        return axios.delete(`/setting/${name}`)
            .then(({data}) => {
                loading.hide();
                window.weui.toast("删除成功");
                dispatch(fetchRow())
                callback && callback(data)
            })
            .catch(error => {
                loading.hide();
                callback && callback({error})
            });
    };
}

export function saveRow({name, value}, callback) {
    return dispatch => {
        const loading = window.weui.loading("提交中...");
        return axios.post(`/setting/${name}`, {
            value
        })
            .then(({data}) => {
                loading.hide();
                window.weui.toast("保存成功");
                dispatch(fetchRow())
                callback && callback(data)
            })
            .catch(error => {
                loading.hide();
                callback && callback({error})
            });
    };
}

