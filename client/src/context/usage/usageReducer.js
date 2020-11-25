import {
  USAGE_HISTORY,
  GET_USAGE_ERROR,
  GET_SECTION_VALUE,
  CHANGE_SECTION_VALUE,
  GET_SECTION_ERROR,
  CHANGE_SECTION_VALUE_ERROR
} from "../types";

const usageReducer = (state, action) => {
  switch (action.type) {
    case USAGE_HISTORY:
      return {
        ...state,
        loading: false,
        usageHistory: action.payload
      };
    case GET_SECTION_VALUE:
      return {
        ...state,
        loadingSectionValue: false,
        sectionValue: action.payload[0]
      };
    case CHANGE_SECTION_VALUE:
      return {
        ...state,
        loadingSectionValue: false,
        sectionValue: action.payload
      };
    case GET_USAGE_ERROR:
    case GET_SECTION_ERROR:
    case CHANGE_SECTION_VALUE_ERROR:
    default:
      return state;
  }
};

export default usageReducer;
