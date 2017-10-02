import { AnyAppPage } from './app.po';

describe('any-app App', () => {
  let page: AnyAppPage;

  beforeEach(() => {
    page = new AnyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
