import {WorkoutPage} from "./app.po";
import {EXERCISES} from "../src/app/services/exercise/mock-exercises";
describe('Exercises:', () => {
  let page: WorkoutPage;

  beforeEach(() => {
    page = new WorkoutPage();
  });

  it('has a list of exercises', () => {
    page.navigateTo();
    expect(page.allExercises.count()).toEqual(EXERCISES.length);
  })
});
