import { Injectable } from '@angular/core';
import { Exercise } from "../../models/exercise";
import { EXERCISES } from "./mock-exercises";

@Injectable()
export class ExerciseService {
  public name: string = 'ExerciseService';
  public description: string = 'returns collection of exercises for user';
  constructor() { }

  getExercises(): Promise<Exercise[]> {
    return Promise.resolve(EXERCISES)
  }
}
