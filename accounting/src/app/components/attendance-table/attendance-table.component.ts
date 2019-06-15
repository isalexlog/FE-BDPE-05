import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserDto} from '../../dto/UserDto';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent implements OnInit {

  constructor() { }

  users: UserDto[];

  @Input()
  selectedValues: [];

  @Output()
  selectedValuesSave = new EventEmitter<[]>();

  ngOnInit() {
    this.users = [
      {id: '1', firstName: 'Vasya', lastName: 'Pupkin'}
    ];
  }

  onSaveButtonClick($event) {
    this.selectedValuesSave.emit(this.selectedValues);
  }
}
