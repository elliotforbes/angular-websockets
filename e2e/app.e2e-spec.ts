import { WebsocketTutorialPage } from './app.po';

describe('websocket-tutorial App', function() {
  let page: WebsocketTutorialPage;

  beforeEach(() => {
    page = new WebsocketTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
