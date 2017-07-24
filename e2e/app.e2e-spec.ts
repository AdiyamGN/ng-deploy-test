import { DeployTestPage } from './app.po';

describe('deploy-test App', () => {
  let page: DeployTestPage;

  beforeEach(() => {
    page = new DeployTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
