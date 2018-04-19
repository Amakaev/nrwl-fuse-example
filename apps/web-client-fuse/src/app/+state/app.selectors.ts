import { AppState } from "./app.reducer";

export const selectFuseSettings = (state: AppState) => state.app.settings;

export const selectNavigation = (state: AppState) => state.app.settings.layout.navigation;
export const selectNavigationFolded = (state: AppState) => state.app.settings.layout.navigationFolded;
export const selectNavigationOpened = (state: AppState) => state.app.settings.layout.navigationOpened;
export const selectSelectedLanguage = (state: AppState) => state.app.settings.languages.find(x=>x.id===state.app.settings.selectedLanguage);
export const selectLanguages = (state: AppState) => state.app.settings.languages;