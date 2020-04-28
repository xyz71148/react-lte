import axios from "axios";

import {namespace} from "./userReducer"

export function fetchMe(ok, fail) {
    return dispatch => {
        const loading = window.weui.loading("加载中...")
        return axios.get("/me")
            .then(({data}) => {
                loading.hide()
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        me: data.body
                    }
                });
                ok && ok(data)
            })
            .catch(error => {
                loading.hide()
                fail && fail({error})
            });
    };
}
