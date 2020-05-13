export const namespace = "route";
const initialState = {
    page: {},
    breadcrumb_actions:[],
    index: true,
    page_close_id:null,
    pages_history:[],
    go_1:false,
    page_id:"index"
};
export default function defaultReducer(
    state = initialState,
    action
) {
    const keys = state.keys
    switch (action.type) {
        case namespace + "/setState":
            return {
                ...state,
                ...action.payload
            };
        case namespace + "/init":
            return {
                ...state,
                page:{}
            };
        case namespace + "/hideBreadcrumb_actions":
            return {
                ...state,
                breadcrumb_actions:[]
            };
        case namespace + "/showBreadcrumb_actions":
            return {
                ...state,
                breadcrumb_actions:action.payload
            };
        case namespace + "/onClosePage":
            return {
                ...state,
                ...action.payload
            };
        case namespace + "/hidePage":
            const page_id = keys.pop();
            console.log("hidePage", page_id, keys)
            const page1 = {}
            page1[page_id] = {
                visible: false,
                id: page_id
            }
            return {
                ...state,
                page: {
                    ...state.page,
                    ...page1
                },
                page_close_id:null,
                index: true,
                keys
            };
        case namespace + "/showPage":
            const {payload} = action
            const {id} = payload
            const page = {}
            console.log("showPage", keys, id)
            page[id] = {
                visible: true,
                id,
                ...action.payload,
            };
            return {
                ...state,
                page: {
                    ...state.page,
                    ...page
                },
                page_close_id:null,
                index: false,
                keys
            };
        default:
            return state;
    }
}
