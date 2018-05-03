import { AudiencesLoaded } from './app.actions';
import { appReducer, initialState } from './app.reducer';

describe('appReducer', () => {
  it('should work', () => {
    const action: AudiencesLoaded = new AudiencesLoaded({});
    const actual = appReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
