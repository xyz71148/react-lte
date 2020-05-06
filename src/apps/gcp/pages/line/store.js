import axios from "axios";

export const namespace = "line";
const initialState = {
    items: [],
};

export default function defaultReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case namespace+"/setState":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}


export function fetchRows() {
    return dispatch => {
        const loading = weui.loading("加载中...")
        return axios.get("/compute/lines")
            .then(({data}) => {
                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        items: data.body.rows
                    }
                });
                loading.hide()
                //clear_time_id()
                //fetchInstancePortStatus(dispatch,data.body)
                window.__time_id_fetch_instance = setInterval(() => {
                    //fetchInstancePortStatus(dispatch,data.body);
                }, 3000)
            })
            .catch(error => {
                loading.hide()
            });
    };
}
