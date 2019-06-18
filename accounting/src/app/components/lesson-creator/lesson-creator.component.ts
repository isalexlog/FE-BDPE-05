import { Component, OnInit } from '@angular/core';
import {RequiredIds} from "./requiredIds";

@Component({
  selector: 'app-lesson-creator',
  templateUrl: './lesson-creator.component.html',
  styleUrls: ['./lesson-creator.component.css']
})
export class LessonCreatorComponent implements OnInit {

  requiredIds: RequiredIds;

  constructor() { }

  ngOnInit() {
  }

  onSubjectSelectorChange($event: RequiredIds) {
    console.log($event);
    this.requiredIds = $event;

  }
}
