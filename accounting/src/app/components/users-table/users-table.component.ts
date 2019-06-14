import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../../dto/UserDto';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input()
  users: UserDto[];

  constructor() { }

  ngOnInit() {
  }

}
