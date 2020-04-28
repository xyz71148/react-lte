import axios from "axios";
import {namespace} from "./lineReducer"
import {clear_time_id, fetchInstancePortStatus} from "./instanceActions";
export function fetchRows() {
    return dispatch => {
        const loading = window.weui.loading("加载中...")
        return axios.get("/compute/lines")
            .then(({data}) => {
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
                loading.hide()
                clear_time_id()
                fetchInstancePortStatus(dispatch,data.body)
                window.__time_id_fetch_instance = setInterval(() => {
                    fetchInstancePortStatus(dispatch,data.body);
                }, 3000)
            })
            .catch(error => {
                loading.hide()
            });
    };
}
