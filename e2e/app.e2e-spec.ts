import { AngularWeatherPage } from './app.po';

describe('angular-weather App', function() {
  let page: AngularWeatherPage;

  beforeEach(() => {
    page = new AngularWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aw works!');
  });
});
