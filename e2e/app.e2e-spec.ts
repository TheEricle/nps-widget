import { NpsWidgetPage } from './app.po';

describe('nps-widget App', () => {
  let page: NpsWidgetPage;

  beforeEach(() => {
    page = new NpsWidgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
