import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LessonDto} from '../../dto/LessonDto';
import {RequiredIds} from "../lesson-creator/requiredIds";

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  lessonForm: FormGroup = this.fb.group({
    id: [],
    groupId: [],
    subjectId: [],
    thema: [
      null, [
        Validators.required
      ]
    ],
    date: [
      null, [
        Validators.required
      ]
    ],

  });

  @Input()
  submitButtonLabel = 'Save';


  _lesson: LessonDto;

  @Input()
  set lesson(lesson: LessonDto) {
    this._lesson = lesson;
    if (lesson) {
      this.lessonForm.setValue(lesson);
    }
  }

  @Output()
  submitLesson: EventEmitter<LessonDto> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    if (this._lesson) {
      this.lessonForm.setValue(this._lesson);
    }
  }

  onSubmit($event) {
    this.submitLesson.emit(this.lessonForm.value);
  }

}
