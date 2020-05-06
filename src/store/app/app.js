export const namespace = "app";
const initialState = {
    loading:true,
    access_token:null,
    constant:null
};

export default function defaultReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case "app/setState":
            return {
                ...state,
                ...action.payload
            };
        case "app/logged":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
