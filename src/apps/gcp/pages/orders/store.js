import axios from "axios";

export const namespace = "order";
const initialState = {
    items: [],
    item: null,
    order_id: null,
    showDetail: false,
    order_no:null,
    loadingDetail:true
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
