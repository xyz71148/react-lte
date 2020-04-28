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
