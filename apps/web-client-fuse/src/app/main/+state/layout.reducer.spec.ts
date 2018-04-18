import { layoutReducer, initialState } from './layout.reducer';
import { OpenSidenav, LayoutActionTypes, CloseSidenav, FoldSidenav, UnfoldSidenav } from './layout.actions';
import { Z_DEFAULT_STRATEGY } from 'zlib';

describe(`When ${LayoutActionTypes.OpenSidenav}`, () => {
  it(`Sidenav should be opened`, () => {
    const init = {
      navigation: {},
      sideNavs: [{ navId: 'navbar', opened: true, folded: false }]
    }
    const action: OpenSidenav = new OpenSidenav('navbar');
    const actual = layoutReducer(init, action);
    expect(actual.sideNavs.find(x => x.navId === 'navbar')).toBeDefined();
    expect(actual.sideNavs.find(x => x.navId === 'navbar').opened).toEqual(true);
  });
});
describe(`When ${LayoutActionTypes.CloseSidenav}`, () => {
  it(`Sidenav should be closed`, () => {
    const init = {
      navigation: {},
      sideNavs: [{ navId: 'navbar', opened: true, folded: false }]
    }
    const action: CloseSidenav = new CloseSidenav('navbar');
    const actual = layoutReducer(init, action);
    expect(actual.sideNavs.find(x => x.navId === 'navbar')).toBeDefined();
    expect(actual.sideNavs.find(x => x.navId === 'navbar').opened).toEqual(false);
  });
});
describe(`When ${LayoutActionTypes.FoldSidenav}`, () => {
  it(`Sidenav should be folded`, () => {
    const init = {
      navigation: {},
      sideNavs: [{ navId: 'navbar', opened: true, folded: false }]
    }
    const action: FoldSidenav = new FoldSidenav('navbar');
    const actual = layoutReducer(init, action);
    expect(actual.sideNavs.find(x => x.navId === 'navbar')).toBeDefined();
    expect(actual.sideNavs.find(x => x.navId === 'navbar').folded).toEqual(true);
  });
});
describe(`When ${LayoutActionTypes.UnfoldSidenav}`, () => {
  it(`Sidenav should be unfolded`, () => {
    const init = {
      navigation: {},
      sideNavs: [{ navId: 'navbar', opened: true, folded: false }]
    }
    const action: UnfoldSidenav = new UnfoldSidenav('navbar');
    const actual = layoutReducer(init, action);
    expect(actual.sideNavs.find(x => x.navId === 'navbar')).toBeDefined();
    expect(actual.sideNavs.find(x => x.navId === 'navbar').folded).toEqual(false);
  });
});
