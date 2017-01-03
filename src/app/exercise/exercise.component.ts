import { Component, OnInit } from '@angular/core';
import { Exercise } from "../models/exercise";
import { ExerciseService } from "../services/exercise/exercise.service";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [ExerciseService]
})
export class ExerciseComponent implements OnInit {

  exercises: Exercise[];

  constructor(private ExerciseService: ExerciseService) { }

  getExercises(): void {
    this.ExerciseService.getExercises().then(exercises => this.exercises = exercises);
  }

  ngOnInit(): void {
    this.getExercises();
  }

}
