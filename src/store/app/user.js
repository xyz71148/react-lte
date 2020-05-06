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
export function fetchMe(ok, fail) {
    return dispatch => {
        const loading = weui.loading("加载中...")
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
