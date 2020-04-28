import {sidebar} from "../../../config"

export const namespace = "sidebar";
const initialState = {

    ...sidebar
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