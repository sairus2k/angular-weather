import { browser, element, by } from 'protractor';

export class AngularWeatherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aw-root h1')).getText();
  }
}
