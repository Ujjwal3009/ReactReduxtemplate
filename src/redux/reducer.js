import * as actionTypes from "./action-types";

const stateInitial = {
  count: 0
};
export const reducer = (state = stateInitial ,action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
