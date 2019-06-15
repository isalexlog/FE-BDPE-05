import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../dto/UserDto';
import {LessonDto} from '../../dto/LessonDto';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  lessonForm: FormGroup;

  @Input()
  submitButtonLabel = 'Save';

  @Input()
  lessonDto: LessonDto;

  @Output()
  submitLesson: EventEmitter<UserDto> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.lessonForm = this.fb.group({
      id: [
        null
      ],
      thema: [
        null, [
          Validators.required
        ]
      ],
      subjectId: [
        null, [
          Validators.required
        ]
      ],
      date: [
        null, [
          Validators.required
        ]
      ],
      groupId: [
        null, [
          Validators.required
        ]
      ],
    });

    if (this.lessonDto) {
      this.lessonForm.setValue(this.lessonDto);
    }
  }

  onSubmit($event) {
    this.submitLesson.emit(this.lessonForm.value);
  }

}
