import { TAGS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  tags: []
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAGS_SUCCESS:
      return {
        tags: action.payload
      };
    default:
      return state;
  }
};
