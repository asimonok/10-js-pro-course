import * as Actions from "../actions/themeAction";
import { Themes } from "Common/Themes";
import { CHANGE_THEME } from "store/types/types";

//type State = {
//  theme: Themes;
//};

const initialState = {
  theme: Themes.light,
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default: {
      return state;
    }
  }
};
