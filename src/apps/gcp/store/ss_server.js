export const namespace = "ss_server";
const initialState = {
    current_connect_status: null,
    current_connect_id: null,
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
