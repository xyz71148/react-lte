import axios from "axios";
import queryString from "query-string"

export const namespace = "admin_order";
export const field_key = "order_no";

const initialState = {
    data: {
        rows: [],
        total: 0,
        page: 1,
        limit: 10,
        fields:{}
    },
    fetching: false,
    row: null
};

export default function defaultReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case namespace + "/setDataState":
            const {data} = action.payload;
            const {rows} = data;
            console.log({
                ...state.data.rows,
                ...rows
            })
            var s = {
                ...state,
                ...{
                    data:{
                        ...data,
                        rows:[
                            ...state.data.rows,
                            ...rows
                        ]
                    }
                }
            };
            console.log(s)
            return s
        case namespace + "/setState":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}


export function fetchRows({page = 1, limit = 10, sort = "-created_at"}, ok, fail) {
    return dispatch => {
        dispatch({
            type: namespace + "/setState",
            payload: {fetching: true}
        });
        const query = queryString.stringify({page, limit, sort});
        return axios.get(`/admin/${namespace.replace("admin_", "")}s?${query}`)
            .then(({data}) => {
                dispatch({
                    type: namespace + "/setState",
                    payload: {fetching: false}
                });
                if (data.code === 200) {
                    dispatch({
                        type: namespace + "/setDataState",
                        payload: {
                            data: data.body
                        }
                    });
                } else {
                    window.weui.topTips(data.msg);
                    fail && fail(data)
                }
            })
            .catch(error => {
                dispatch({
                    type: namespace + "/setState",
                    payload: {fetching: false}
                });
                fail && fail({error})
            });
    }
}

export function fetchRow(row_id, ok, fail) {
    return dispatch => {
        const loading = window.weui.loading("加载中...");
        return axios.get(`/admin/${namespace.replace("admin_", "")}/${row_id}`)
            .then(({data}) => {
                loading.hide();
                if (data.code === 200) {
                    dispatch({
                        type: namespace + "/setState",
                        payload: {
                            row: data.body
                        }
                    });
                    ok && ok(data)
                } else {
                    window.weui.topTips(data.msg);
                    fail && fail(data)
                }
            })
            .catch(error => {
                loading.hide();
                fail && fail({error})
            });
    };
}

export function delRow(row_id, ok, fail) {
    return dispatch => {
        const loading = window.weui.loading("删除中...");
        return axios.delete(`/admin/${namespace.replace("admin_", "")}/${row_id}`)
            .then(({data}) => {
                loading.hide();
                if (data.code === 200) {
                    window.weui.toast("删除成功");
                    dispatch(fetchRows())
                    ok && ok(data)
                } else {
                    window.weui.topTips(data.msg);
                    fail && fail(data)
                }
            })
            .catch(error => {
                loading.hide();
                fail && fail({error})
            });
    };
}

export function changeRow({row_id, field, value}, ok, fail) {
    return dispatch => {
        const data = {}
        data[field] = value
        const loading = window.weui.loading("提交中...");

        return axios.put(`/admin/${namespace.replace("admin_", "")}/${row_id}`, {
            data
        })
            .then(({data}) => {
                loading.hide();
                if (data.code === 200) {
                    window.weui.toast("保存成功");
                    dispatch({
                        type: namespace + "/setState",
                        payload: {
                            row: data.body
                        }
                    });
                    dispatch(fetchRows())
                    ok && ok(data)
                } else {
                    window.weui.topTips(data.msg);
                    fail && fail(data)
                }
            })
            .catch(error => {
                loading.hide();
                fail && fail({error})
            });
    };
}

