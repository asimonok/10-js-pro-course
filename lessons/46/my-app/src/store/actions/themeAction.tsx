import { Themes } from "Common/Themes";
import { ActionPayload } from "Common/ActionPayload";
import { CHANGE_THEME } from "store/types/types";

export const changeTheme = (newTheme: Themes) => {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
};
