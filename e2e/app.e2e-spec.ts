import { WorkoutPage } from './app.po';

describe('workout App', function() {
  let page: WorkoutPage;

  beforeEach(() => {
    page = new WorkoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
