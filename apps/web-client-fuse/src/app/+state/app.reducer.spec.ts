import { appReducer, initialState } from './app.reducer';
import { ChangeSettigns, AppActionTypes } from './app.actions';

describe('appReducer', () => {
  it('Initial status should be defined', () => {
    const actual = appReducer(initialState, { type: AppActionTypes.ChangeSettings, settings: {} });
    expect(actual).toBeDefined();
    expect(actual.settings.layout).toBeDefined();
  });
});
