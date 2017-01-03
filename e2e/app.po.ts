import { browser, element, by } from 'protractor';

export class WorkoutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  exercises = element(by.id('exercises'));
  allExercises = element.all(by.css('div[id^="exercise_'));

}
