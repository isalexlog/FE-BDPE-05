import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserDto} from '../../dto/UserDto';
import {AttendanceService} from '../../services/attendance.service';
import {AttendanceDto} from '../../dto/AttendanceDto';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent implements OnInit {

  constructor(private attendanceService: AttendanceService) { }

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
    this.attendanceService.create($event).subscribe(
      (newAttendance: AttendanceDto) => {
        console.log('Created attendance list');
        console.log(newAttendance);
      },
      (error) => console.log(error)
    );
    this.selectedValuesSave.emit(this.selectedValues);
  }
}
