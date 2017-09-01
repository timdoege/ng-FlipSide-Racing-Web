import { TmRacingPage } from './app.po';

describe('tm-racing App', () => {
  let page: TmRacingPage;

  beforeEach(() => {
    page = new TmRacingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
