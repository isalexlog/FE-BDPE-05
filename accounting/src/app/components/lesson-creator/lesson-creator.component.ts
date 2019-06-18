import { Component, OnInit } from '@angular/core';
import {RequiredIds} from './requiredIds';
import {LessonDto} from '../../dto/LessonDto';
import {LessonService} from '../../services/lesson.service';

@Component({
  selector: 'app-lesson-creator',
  templateUrl: './lesson-creator.component.html',
  styleUrls: ['./lesson-creator.component.css']
})
export class LessonCreatorComponent implements OnInit {

  requiredIds: RequiredIds;
  lessonDto: LessonDto;

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
  }

  onSubjectSelectorChange($event: RequiredIds) {
    console.log($event);
    this.requiredIds = $event;
    if (!!$event) {
      this.lessonDto = {
        id: null,
        groupId: $event.groupId,
        subjectId: $event.subjectId,
        date: null,
        thema: null
      };
    }
  }

  onSubmitLesson($event: LessonDto) {
    console.log($event);
    this.lessonService.create($event).subscribe(
      (newLesson: LessonDto) => {
        console.log('Created lesson');
        console.log(newLesson);
      },
      (error1) => console.log(error1)
    );
  }
}
