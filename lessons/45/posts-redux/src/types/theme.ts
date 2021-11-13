export enum ThemeActionTypes {
  CHANGE_THEME = "CHANGE_THEME",
}

interface ChangeThemeAction {
  type: ThemeActionTypes.CHANGE_THEME;
}

export interface ThemeState {
  theme: string;
}

export type ThemeAction = ChangeThemeAction;
