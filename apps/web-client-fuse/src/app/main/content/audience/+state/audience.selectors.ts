import {AudienceState} from "./audience.reducer";

export const selectAudiences = (state: AudienceState) => state.audience.list.items;
