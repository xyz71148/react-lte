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
