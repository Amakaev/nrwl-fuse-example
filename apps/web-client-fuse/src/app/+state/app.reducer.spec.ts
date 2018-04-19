import { appReducer, initialState } from './app.reducer';
import { ChangeSettigns, AppActionTypes, CloseSidenav, OpenSidenav, FoldSidenav, UnfoldSidenav, ChangeLanguage } from './app.actions';

const init = {
  settings: {
    layout: {
      navigation: {},
      navigationPosition: 'left', // 'right', 'left', 'top', 'none'
      navigationFolded: false, // true, false
      navigationOpened: true,
      toolbar: 'below', // 'above', 'below', 'none'
      footer: 'none', // 'above', 'below', 'none'
      mode: 'fullwidth' // 'boxed', 'fullwidth'
    },
    colorClasses: {
      toolbar: 'mat-white-500-bg',
      navbar: 'mat-fuse-dark-700-bg',
      footer: 'mat-fuse-dark-900-bg'
    },
    customScrollbars: true,
    routerAnimation: 'fadeIn', // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
    languages: [
      {
        'id': 'en',
        'title': 'English',
        'flag': 'us'
      },
      {
        'id': 'he',
        'title': 'Hebrew',
        'flag': 'he'
      }
    ],
    selectedLanguage: 'en',
  }
};
describe('appReducer', () => {
  it('Initial status should be defined', () => {
    const actual = appReducer(initialState, { type: AppActionTypes.ChangeSettings, settings: {} });
    expect(actual).toBeDefined();
    expect(actual.settings.layout).toBeDefined();
  });
});
describe(`When ${AppActionTypes.OpenSidenav}`, () => {
  it(`Sidenav should be opened`, () => {
    const action: OpenSidenav = new OpenSidenav();
    const actual = appReducer(init, action);
    expect(actual.settings.layout.navigationOpened).toEqual(true);
  });
});
describe(`When ${AppActionTypes.CloseSidenav}`, () => {
  it(`Sidenav should be closed`, () => {
    const action: CloseSidenav = new CloseSidenav();
    const actual = appReducer(init, action);
    expect(actual.settings.layout.navigationOpened).toEqual(false);
  });
});
describe(`When ${AppActionTypes.FoldSidenav}`, () => {
  it(`Sidenav should be folded`, () => {

    const action: FoldSidenav = new FoldSidenav();
    const actual = appReducer(init, action);
    expect(actual.settings.layout.navigationFolded).toEqual(true);
  });
});
describe(`When ${AppActionTypes.UnfoldSidenav}`, () => {
  it(`Sidenav should be unfolded`, () => {
    const action: UnfoldSidenav = new UnfoldSidenav();
    const actual = appReducer(init, action);
    expect(actual.settings.layout.navigationFolded).toEqual(false);
  });
});
describe(`When ${AppActionTypes.ChangeLanguage}`, () => {
  it(`Language should be changed`, () => {
    const action: ChangeLanguage = new ChangeLanguage('he');
    const actual = appReducer(init, action);
    expect(actual.settings.selectedLanguage).toEqual('he');
  });
});