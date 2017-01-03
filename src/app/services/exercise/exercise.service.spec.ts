/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ExerciseService} from './exercise.service';
import {serializeNodes} from "@angular/compiler/src/i18n/digest";
import {Exercise} from "../../models/exercise";
import {EXERCISES} from "./mock-exercises";

describe('ExerciseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseService]
    });
  });

  it('should ...', inject([ExerciseService], (service: ExerciseService) => {
    expect(service).toBeTruthy();
  }));

  it('service has a name', inject([ExerciseService], (service: ExerciseService) => {
    expect(service.name).toEqual('ExerciseService')
  }));
  it('service has a description', inject([ExerciseService], (service: ExerciseService) => {
    expect(service.description).toEqual('returns collection of exercises for user')
  }));
  it('.getExercises() returns a collection of exercises', inject([ExerciseService], (service: ExerciseService) => {
    let exercises: Exercise[];
    service.getExercises().then(Exercises => {
      exercises = Exercises;
      expect(exercises).toEqual(EXERCISES);
    });
  }));
});
