import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';




@Component({
  selector: 'app-lesson-actions',
  templateUrl: './lesson-actions.component.html',
  styleUrls: ['./lesson-actions.component.css']
})
export class LessonActionsComponent implements OnInit {



  ngOnInit() {
  }

  onAttendanceChange($event: []) {
    /*тут?*/
    console.log($event);  
  }
}
