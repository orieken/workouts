/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ExerciseComponent} from './exercise.component';
import {ExerciseService} from "../services/exercise/exercise.service";
import {EXERCISES} from "../services/exercise/mock-exercises";

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseComponent],
      providers: [
        ExerciseService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has an exercise', fakeAsync(() => {
    expect(component.exercises).toBeUndefined();
    component.ngOnInit();
    tick();
    expect(component.exercises).toEqual(EXERCISES);
  }));

  it('renders exercises', fakeAsync(() => {
    let compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    let exercises = compiled.querySelectorAll('h2');
    expect(exercises.length).toEqual(5);
  }));
});
