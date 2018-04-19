import { AppState } from "./app.reducer";

export const selectFuseSettings = (state: AppState) => state.app.settings;

export const selectNavigation = (state: AppState) => state.app.settings.layout.navigation;
export const selectNavigationFolded = (state: AppState) => state.app.settings.layout.navigationFolded;
export const selectNavigationOpened = (state: AppState) => state.app.settings.layout.navigationOpened;