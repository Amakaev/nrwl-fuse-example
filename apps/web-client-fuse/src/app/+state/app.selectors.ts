import { AppState } from "./app.reducer";

export const selectFuseSettings = (state: AppState) => state.app.settings;