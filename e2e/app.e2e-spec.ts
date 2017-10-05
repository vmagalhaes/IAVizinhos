import { IAPage } from './app.po';

describe('ia App', () => {
  let page: IAPage;

  beforeEach(() => {
    page = new IAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
