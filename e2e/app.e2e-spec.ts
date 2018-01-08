import { QantasNgDemoPage } from './app.po';

describe('qantas-ng-demo App', () => {
  let page: QantasNgDemoPage;

  beforeEach(() => {
    page = new QantasNgDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
