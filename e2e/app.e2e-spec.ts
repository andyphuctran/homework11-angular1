import { Homework11Page } from './app.po';

describe('homework11 App', () => {
  let page: Homework11Page;

  beforeEach(() => {
    page = new Homework11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
