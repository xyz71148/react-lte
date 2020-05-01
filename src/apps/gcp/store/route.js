export const namespace = "route";
const initialState = {
    page: null,
    index: true,
    page_close_id:null,
    keys: []
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
            if (keys.length > 0)
                window.location.href = "#" + keys[keys.length - 1];
            else {
                window.location.href = "#";
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
            keys.push(id)
            page[id] = {
                visible: true,
                id,
                ...action.payload,
            };
            window.location.href = "#" + id
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
