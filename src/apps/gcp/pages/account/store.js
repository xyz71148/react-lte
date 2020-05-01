import axios from "axios";

export const namespace = "user";
const initialState = {
    me: null,
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

export function fetchMe(callback) {
    return dispatch => {
        const loading = window.weui.loading("加载中...")
        return axios.get("/me")
            .then(({data}) => {
                loading.hide()
                callback && callback(data)

                dispatch({
                    type: namespace + "/setState",
                    payload: {
                        me: data.body
                    }
                });
            })
            .catch(error => {
                loading.hide()
                callback && callback({error})
            });
    };
}
