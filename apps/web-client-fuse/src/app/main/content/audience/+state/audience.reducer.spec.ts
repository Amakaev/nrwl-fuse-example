import {AudienceActionTypes, AudiencesLoaded, LoadAudiences} from './audience.actions';
import {appReducer, initialState} from './audience.reducer';

describe(`When ${AudienceActionTypes.LoadAudiences}`, () => {
  it('show progress should be true', () => {
    const action: LoadAudiences = new LoadAudiences({});
    const actual = appReducer(initialState, action);
    expect(actual.list.showProgress).toEqual(true);
  });
});
describe(`When ${AudienceActionTypes.AudiencesLoaded}`, () => {
  it('Show progress should be false', () => {
    const action: AudiencesLoaded = new AudiencesLoaded({});
    const actual = appReducer(initialState, action);
    expect(actual.list.showProgress).toEqual(false);
  });
})
;describe(`When ${AudienceActionTypes.AudiencesLoaded}`, () => {
  it('List should be equal to loaded items', () => {
    let newVar = [{title: 'test1'}];
    const action: AudiencesLoaded = new AudiencesLoaded(newVar);
    const actual = appReducer(initialState, action);
    expect(actual.list.items).toEqual(newVar);
  });
});
